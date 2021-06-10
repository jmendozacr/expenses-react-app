import { createContext, useContext, useEffect, useState } from "react";
import useGetExpensesByMonth from "../hooks/useGetExpensesByMonth";

const TotalExpenses = createContext();

const TotalExpensesProvider = ({children}) => {
    const [total, setTotal] = useState(0);
    const expenses = useGetExpensesByMonth();
    
    useEffect(() => {
        let reduceTotal = expenses.reduce((acc, cur) => acc + cur.quantity, 0)
        setTotal(reduceTotal);

        console.log('reduceTotal', reduceTotal);
    }, [expenses]);

    return (
        <TotalExpenses.Provider value={{total: total}}>
            {children}
        </TotalExpenses.Provider>
    );
}

const useTotalExpenses = () => useContext(TotalExpenses);

export { TotalExpenses, TotalExpensesProvider, useTotalExpenses };