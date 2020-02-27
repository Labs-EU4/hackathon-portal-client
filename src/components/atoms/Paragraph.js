import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${props => props.theme.color.black.regular};
  font-size: 1.5rem;
  font-weight: 400;
  /* word-break: break-all; */
  /* margin: 0 0 20px 0; */
  /* padding: 0; */

  strong {
    font-weight: bold;
  }
`;

export const PlainParagraph = styled(Paragraph)`
  margin: 0;
`;
