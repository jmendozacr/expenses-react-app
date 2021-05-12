import React from 'react';
import { Helmet } from 'react-helmet';
import  { Header, HeaderContainer, Title, ButtonContainer } from './components/commons/Header';
import Button from './components/commons/Button';
import ButtonLogout from './components/ButtonLogout';
import ExpenseForm from './components/ExpenseForm';
import TotalBar from './components/TotalBar';

const App = () => {
    return (
        <>
            <Helmet>
                <title>Add Expenses</title>
            </Helmet>
            <Header>
                <HeaderContainer>
                    <Title>Add Expense</Title>
                    <ButtonContainer>
                        <Button to="/categories">Categories</Button>
                        <Button to="/expenses">Expenses</Button>
                        <ButtonLogout/>
                    </ButtonContainer>
                </HeaderContainer>
            </Header>
            <ExpenseForm/>
            <TotalBar/>
        </>
    );
}

export default App;