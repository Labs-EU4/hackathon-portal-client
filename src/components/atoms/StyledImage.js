import styled from 'styled-components';

const StyledImage = styled.figure`
    ${props => props.theme.flex.columnCenter};
	/* width: 100%;
	height: 12rem; */
	
	div {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 100%;
			border-radius: 50%;
		}
	}

	p {
        ${props => props.theme.flex.center};
		width: 100%;
		padding: 0.5rem;
		font-size: 1.8rem;
		color: #444;
	}
`;

export default StyledImage;