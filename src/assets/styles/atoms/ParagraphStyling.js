import styled from "styled-components";
export const Paragraph = styled.p`
color: ${props => props.theme.color.black.regular};
font-size: 1.5rem;
font-weight: 400;
margin-bottom: 20px;
/* word-break: break-all; */
/* margin: 0 0 20px 0; */
/* padding: 0; */
${({ strong }) => strong && `font-weight: bold;`}
${({ left }) =>
  left &&
  `
  position: absolute; left: 20px; top: 50%; 
  transform: translateY(-50%)
`}
${({ noMargin }) => noMargin && `margin: 0;`}
${({ center }) => center && `margin: 5px auto 10px;`}
${({ bold }) => bold && `font-weight: bold;`}
${({ size }) => size === "large" && `font-size: 1.7rem;`}
`;
