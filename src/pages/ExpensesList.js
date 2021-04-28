import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../components/commons/BackButton';
import  { Header, Title } from './../components/commons/Header';

const ExpensesList = () => {

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
        </>
    );
}

export default ExpensesList;