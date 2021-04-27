import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import  { Header, HeaderContainer, Title } from './../components/commons/Header';
import Button from './../components/commons/Button';
import { Form, Input, ButtonContainer } from './../components/commons/ElementsForm';
import { ReactComponent as SvgLogin } from './../images/registro.svg';

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;

const Register = () => {
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
                <Input 
                    type="password"
                    name="password2"
                    placeholder="repeat password"
                />
                <ButtonContainer>
                    <Button type="submit" as="button" primary>Register</Button>
                </ButtonContainer>
            </Form>
        </>
    );
}

export default Register;