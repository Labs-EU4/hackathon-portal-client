import styled from 'styled-components';

const StyledSectionTitle = styled.h2`
  margin-right: 10px;
  padding: 8px 22px;
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-left: none;
  border-bottom: none;

  ${({ gap }) => gap === true && `margin-left: 10px;`}
`;