import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import  { Header, HeaderContainer, Title } from './../components/commons/Header';
import Button from './../components/commons/Button';
import { Form, Input, ButtonContainer } from './../components/commons/ElementsForm';
import { ReactComponent as SvgLogin } from './../images/registro.svg';
import { auth } from '../firebase/firebaseConfig';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const Register = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'password2':
                setPassword2(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const exReg = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if( !exReg.test(email) ) {
            console.log("error");
            return;
        }
        if(email === '' || password === '' || password2 === '') {
            console.log("there is a empty space");
            return;
        }
        if(password !== password2) {
            console.log("the password is not the same");
            return;
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            console.log("user was registered");
            history.push('/');
        } catch (error) {
            let message = error.message;

            return console.log(message);
        }
    }

    return (
        <>
             <Helmet>
                <title>Register</title>
            </Helmet>
            <Header>
                <HeaderContainer>
                    <Title>
                        Expenses by category page
                    </Title>
                    <div>
                        <Button to="/login">Login</Button>
                    </div>
                </HeaderContainer>
            </Header>
            <Form onSubmit={handleSubmit}>
                <Svg/>
                <Input 
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={handleChange}
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleChange}
                />
                <Input 
                    type="password"
                    name="password2"
                    autoComplete="off"
                    placeholder="repeat password"
                    value={password2}
                    onChange={handleChange}
                />
                <ButtonContainer>
                    <Button type="submit" as="button" primary>Register</Button>
                </ButtonContainer>
            </Form>
        </>
    );
}

export default Register;