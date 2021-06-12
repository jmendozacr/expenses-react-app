import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../components/commons/BackButton';
import TotalBar from '../components/TotalBar';
import useGetExpensesByMonthAndCategories from '../hooks/useGetExpensesByMonthAndCategories';
import  { Header, Title } from './../components/commons/Header';

const ExpensesByCategory = () => {
    const expenses = useGetExpensesByMonthAndCategories();
    console.log('expenses', expenses);

    return (
        <>
            <Helmet>
                <title>Expenses by Category</title>
            </Helmet>

            <Header>
                <BackButton/>
                <Title>
                    Expenses by category page
                </Title>
            </Header>
            <TotalBar/>
        </>
    );
}

export default ExpensesByCategory;