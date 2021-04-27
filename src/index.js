import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Container from './components/commons/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import EditExpenses from './pages/EditExpenses';
import ExpensesByCategory from './pages/ExpensesByCategory';
import ExpensesList from './pages/ExpensesList';

WebFont.load({
    // Work+Sans:wght@400;500;700
    google: {
        families: ['Work Sans: 400,500,700', 'sans-serif']
    }
});

export const Index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Container>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/edit/:id">
                        <EditExpenses/>
                    </Route>
                    <Route path="/expenses-by-category">
                        <ExpensesByCategory/>
                    </Route>
                    <Route path="/expenses-list">
                        <ExpensesList/>
                    </Route>
                    <Route exact={true} path="/">
                        <App />
                    </Route>   
                </Container>
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Index/>,
    document.getElementById('root')
);