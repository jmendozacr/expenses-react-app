import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    background: ${(props) => props.primary ? '#5B69E2' : '#000'};
    width: ${(props) => props.withIcon ? '15.62rem' : 'auto'}; /* 250px */
    align-items: center;
    border-radius: 0.625rem; /* 10px */
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Work Sans', sans-serif;
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    height: 3.75rem; /* 60px */
    justify-content: space-between;
    margin-left: 1.25rem; /* 20px */
    outline: none;
    padding: 1.25rem 1.87rem; /* 20px 30px */
    text-decoration: none;

    svg {
        height: ${(props) => props.largeIcon ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }
`;

export default Button;