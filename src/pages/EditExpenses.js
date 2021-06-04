import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import BackButton from '../components/commons/BackButton';
import ExpenseForm from '../components/ExpenseForm';
import TotalBar from '../components/TotalBar';
import useGetExpense from '../hooks/useGetExpense';
import  { Header, Title } from './../components/commons/Header';

const EditExpenses = () => {
    const { id } = useParams();
    // console.log('id', id);
    const [expense] = useGetExpense(id);
    console.log('expense', expense);

    return (
        <>
            <Helmet>
                <title>Edit Expense</title>
            </Helmet>

            <Header>
                <BackButton/>
                <Title>
                    Edit Expense
                </Title>
            </Header>
            <ExpenseForm/>
            <TotalBar/>
        </>
    );
}

export default EditExpenses;