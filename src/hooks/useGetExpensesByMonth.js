import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns';
import { useAuth } from "../context/authContext";

const useGetExpensesByMonth = () => {
    const [expenses, setExpenses] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const startOfMonthData = getUnixTime(startOfMonth(new Date()));
        const endOfMonthData = getUnixTime(endOfMonth(new Date()));

        if(user) {
            const unsuscribe = db.collection('expenses')
                .orderBy('date', 'desc')
                .where('date', '>=', startOfMonthData)
                .where('date', '<=', endOfMonthData)
                .where('uidUser', '==', user.uid)
                .onSnapshot((snapshot) => {
                    setExpenses(snapshot.docs.map(expense => {
                        return {...expense.data(), id: expense.id}
                    }));
                });

            return unsuscribe;
        }

    }, [user]);

    return expenses;
}

export default useGetExpensesByMonth;
