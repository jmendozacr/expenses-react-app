import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../components/commons/BackButton';
import TotalBar from '../components/TotalBar';
import useGetExpenses from '../hooks/useGetExpenses';
import  { Header, Title } from './../components/commons/Header';

const ExpensesList = () => {
    const [expenses] = useGetExpenses();
    console.log('expenses', expenses);

    return (
        <>
            <Helmet>
                <title>Expenses</title>
            </Helmet>

            <Header>
                <BackButton/>
                <Title>
                    Expenses page
                </Title>
            </Header>
            <TotalBar/>
        </>
    );
}

export default ExpensesList;