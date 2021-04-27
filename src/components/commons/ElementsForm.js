import styled from 'styled-components';
import theme from '../../theme/theme';

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.87rem; /* 30px */
 
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    padding: 0 2.5rem; /* 40px */
    input {
        font-family: 'Work Sans', sans-serif;
        padding: 2.5rem 0;
        text-align: center;
        width: 100%;

        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;

const Input = styled.input`
    border: none;
    border-bottom: 2px solid ${theme.lightGray};
    font-size: 2.5rem; /* 40px */
    outline: none;
    text-transform: uppercase;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2.2rem; /* 24px */
    }
`;

const LargeInput = styled(Input)`
    font-size: 4.37rem; /* 70px */
    font-weight: bold;
`;
 
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;  /* 40px */
`;

export { FilterContainer, Form, Input, LargeInput, ButtonContainer };