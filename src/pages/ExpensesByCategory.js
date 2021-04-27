import React from 'react';
import { Helmet } from 'react-helmet';
import  { Header, HeaderContainer, Title } from './../components/commons/Header';

const ExpensesByCategory = () => {
    return (
        <>
            <Helmet>
                <title>Expenses by Category</title>
            </Helmet>

            <Header>
                <HeaderContainer>
                    <Title>
                        Expenses by category page
                    </Title>
                </HeaderContainer>
            </Header>
        </>
    );
}

export default ExpensesByCategory;