import { useEffect, useState } from "react";
import useGetExpensesByMonth from "./useGetExpensesByMonth";

const useGetExpensesByMonthAndCategories = () => {
    const [expensesByCategory, setExpensesByCategory] = useState([]);
    const expenses = useGetExpensesByMonth();

    useEffect(() => {
        const sumOfExpenses = expenses.reduce((accObject, curItem) => {
            const currentCategory = curItem.category;
            const currentAmount = curItem.quantity;
    
            accObject[currentCategory] += currentAmount;
    
            return accObject;
    
        }, {
            'food': 0,
            'payments': 0,
            'home': 0,
            'transport': 0,
            'clothing': 0,
            'health': 0,
            'purchases': 0,
            'fun': 0
        });
    
        setExpensesByCategory(Object.keys(sumOfExpenses).map((item) => {
            return { category: item, quantity: sumOfExpenses[item] }
        }));
    }, [expenses]);

    return expensesByCategory;
}

export default useGetExpensesByMonthAndCategories;
