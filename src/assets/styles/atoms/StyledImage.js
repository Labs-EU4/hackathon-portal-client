import styled from 'styled-components';

const StyledImage = styled.figure`
    ${props => props.theme.flex.columnCenter};
	
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
		color: ${props => props.theme.color.grey.dark};
	}
`;

export default StyledImage;