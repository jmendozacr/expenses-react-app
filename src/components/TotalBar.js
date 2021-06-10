import React from 'react';
import styled from 'styled-components';
import { useTotalExpenses } from '../context/totalExpensesByMonthContext';
import theme from '../theme/theme';
import convertToCurrency from '../utils/convertToCurrency';

const BarraTotal = styled.div`
	background: ${theme.green};
	font-size: 1.25rem; /* 20px */
	letter-spacing: 1px;
	font-weight: 500;
	text-transform: uppercase;
	padding: 0.62rem 2.25rem; /* 10px 40px */
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media(max-width: 31.25rem) { /* 500px */
		flex-direction: column;
		font-size: 14px;
	}
`;

const TotalBar = () => {
	const { total } = useTotalExpenses();

    return (
        <BarraTotal>
            <p>Total spent in the month:</p>
            <p>{convertToCurrency(total)}</p>
        </BarraTotal>
    );
}

export default TotalBar;