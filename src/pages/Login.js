import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { auth } from '../firebase/firebaseConfig';
import  { Header, HeaderContainer, Title } from './../components/commons/Header';
import Button from './../components/commons/Button';
import { Form, Input, ButtonContainer } from './../components/commons/ElementsForm';
import { ReactComponent as SvgLogin } from './../images/login.svg';
import Alert from '../components/commons/Alert';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertState, setAlertState] = useState(false);
    const [alert, setAlert] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const regex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        setAlertState(false);
        setAlert({});

        if( !regex.test(email) ) {
            setAlertState(true);
            setAlert({
                type: 'error',
                message: 'Please enter a valid email.'
            });
            return;
        }
        if(email === '' || password === '') {
            setAlertState(true);
            setAlert({
                type: 'error',
                message: 'There is an empty field'
            });
            return;
        }

        try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push('/');
        } catch (error) {
            let message = error.message;
            setAlertState(true);
            setAlert({
                type: 'error',
                message: message
            });
        }
    }

    return (
        <>
             <Helmet>
                <title>Log in</title>
            </Helmet>
            <Header>
                <HeaderContainer>
                    <Title>
                        Expenses by category page
                    </Title>
                    <div>
                        <Button to="/register">Register</Button>
                    </div>
                </HeaderContainer>
            </Header>
            <Form onSubmit={handleSubmit}>
                <Svg/>
                <Input 
                    type="text"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonContainer>
                    <Button type="submit" as="button" primary>Login</Button>
                </ButtonContainer>
            </Form>
            <Alert 
                type={alert.type} 
                message={alert.message} 
                alertState={alertState} 
                setAlertState={setAlertState}
            />
        </>
    );
}

export default Login;
