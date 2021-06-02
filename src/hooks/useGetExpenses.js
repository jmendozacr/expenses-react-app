import { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import { db } from './../firebase/firebaseConfig';

const useGetExpenses = () => {
    const { user } = useAuth();
    const [expenses, setExpenses] = useState([]);
    const [lastExpense, setLastExense] = useState(null);
    const [loadMoreValidation, setLoadMoreValidation] = useState(false);

    const getMoreExpenses = () => {
        db.collection('expenses')
        .where('uidUser', '==', user.uid)
        .orderBy('date', 'desc')
        .limit(10)
        .startAfter(lastExpense)
        .onSnapshot((snapshot) => {
            let newExpenses = [];

            if(snapshot.docs.length > 0) {
                setLastExense(snapshot.docs[snapshot.docs.length - 1]);

                newExpenses = snapshot.docs.map(expense => {
                    return {...expense.data(), id: expense.id}
                });

                setExpenses([...expenses, ...newExpenses]);
            } else {
                setLoadMoreValidation(false);
            }
        })
    }

    useEffect(() => {
        const unsuscribe = db.collection('expenses')
            .where('uidUser', '==', user.uid)
            .orderBy('date', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                if(snapshot.docs.length > 0 ) {
                    setLastExense(snapshot.docs[snapshot.docs.length - 1]);
                    setLoadMoreValidation(true);
                } else {
                    setLoadMoreValidation(false);
                }

                setExpenses(snapshot.docs.map(expense => {
                    return {...expense.data(), id: expense.id}
                }));
        });

        return unsuscribe;
    }, [user])

    return [expenses, getMoreExpenses, loadMoreValidation];
}

export default useGetExpenses;
