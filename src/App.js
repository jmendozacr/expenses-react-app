import React from 'react';
import { Helmet } from 'react-helmet';
import  { Header, HeaderContainer, Title, ButtonContainer } from './components/commons/Header';
import Button from './components/commons/Button';

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
                        <Button to="/">X</Button>
                    </ButtonContainer>
                </HeaderContainer>
            </Header>
        </>
    );
}

export default App;