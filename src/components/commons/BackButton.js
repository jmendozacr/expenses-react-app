import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from './../../images/flecha.svg';
import { useHistory } from 'react-router-dom';

const BackButton = ({ route = '/' }) => {
    const history = useHistory();

    return (
        <ButtonStyle onClick={() => history.push(route)}>
            <Icon/>
        </ButtonStyle>
    );
}

const ButtonStyle = styled.button`
    align-items: center;
    background: #000;
    border-radius: 0.31rem; /* 5px */
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    display: flex;
    height: 3.12rem; /* 50px */
    justify-content: center;
    line-height: 3.12rem; /* 50px */
    margin-right: 1.25rem; /* 20px */
    text-align: center;
    width: 3.12rem; /* 50px */
 
    @media(max-width: 60rem){ /* 950px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
        width: 2.5rem; /* 40px */
    }
`;

const Icon = styled(Arrow)`
    fill: #fff;
    height: auto;
    width: 50%;
`;

export default BackButton;