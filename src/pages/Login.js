import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import  { Header, HeaderContainer, Title } from './../components/commons/Header';
import Button from './../components/commons/Button';
import { Form, Input, ButtonContainer } from './../components/commons/ElementsForm';
import { ReactComponent as SvgLogin } from './../images/login.svg';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const Login = () => {
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
            <Form>
                <Svg/>
                <Input 
                    type="email"
                    name="email"
                    placeholder="email"
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="password"
                />
                <ButtonContainer>
                    <Button type="submit" as="button" primary>Login</Button>
                </ButtonContainer>
            </Form>
        </>
    );
}

export default Login;
