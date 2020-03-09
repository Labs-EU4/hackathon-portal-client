import BodyContainer from "../../atoms/BodyContainer";
import { H2 } from "../../atoms/Heading";
import styled from "styled-components";

export const BodyColumn = styled(BodyContainer)`
      flex-direction: column;
      align-items: start;
      height: 100%;
      width: 50%;
      padding:0;
      img {
        width: 100%;
        height:100%;
      }
    `;
export const BodyRow = styled(BodyContainer)`
     flex-direction: row;
     justify-content: space-between;
     height: 100%;
     width: 100%;
     max-width: 100vw;
   `;

export const Header2 = styled(H2)`
    font-size: 70px;
    `;