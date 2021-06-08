import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import BackButton from '../components/commons/BackButton';
import ExpenseForm from '../components/ExpenseForm';
import TotalBar from '../components/TotalBar';
import useGetExpense from '../hooks/useGetExpense';
import  { Header, Title } from './../components/commons/Header';

const EditExpenses = () => {
    const { id } = useParams();
    const [expense] = useGetExpense(id);

    return (
        <>
            <Helmet>
                <title>Edit Expense</title>
            </Helmet>

            <Header>
                <BackButton route="/expenses"/>
                <Title>
                    Edit Expense
                </Title>
            </Header>
            <ExpenseForm expense={expense}/>
            <TotalBar/>
        </>
    );
}

export default EditExpenses;