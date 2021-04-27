import styled from 'styled-components';

const Header = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2.5rem; /* 40px */
    width: 100%;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem; /* 40px */
    font-weight: normal;
    text-transform: uppercase;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2rem; /* 32px */
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
 
    @media(max-width: 60rem){ /* 950px */
        align-items: center;
        display: flex;
        flex-direction: column-reverse;
 
        & > div {
            display: flex;
            justify-content: end;
            margin-bottom: 1.25rem; /* 20px */
        }
    }
`;

const ButtonContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export { Header, HeaderContainer, Title, ButtonContainer };