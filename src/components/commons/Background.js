import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Points } from './../../images/puntos.svg';

const Svg = styled.svg`
	height: 50vh;
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 0;
	path {
		fill: rgba(64,210,89, .35);
	}
`;

const PointsAbove = styled(Points)`
	position: fixed;
	z-index: 1;
	top: 2.5rem; /* 40px */
	left: 2.5rem; /* 40px */
`;

const PointsBelow = styled(Points)`
	position: fixed;
	z-index: 1;
	bottom: 2.5rem; /* 40px */
	right: 2.5rem; /* 40px */
`;

const Background = () => {
    return(
        <>
            <PointsAbove/>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fillOpacity="1" 
                        d="M0,192L288,0L576,224L864,288L1152,128L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
                    >
                    </path>
                </Svg>
            <PointsBelow/>
        </>
    );
}

export default Background;