import { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import { db } from './../firebase/firebaseConfig';

const useGetExpenses = () => {
    const { user } = useAuth();
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const unsuscribe = db.collection('expenses')
            .where('uidUser', '==', user.uid)
            .orderBy('date', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                setExpenses(snapshot.docs.map(expense => {
                    return {...expense.data(), id: expense.id}
                }));
        });

        return unsuscribe;
    }, [user])

    return [expenses];
}

export default useGetExpenses;
