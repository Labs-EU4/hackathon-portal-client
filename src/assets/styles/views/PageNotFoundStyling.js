import BodyContainerO from "../atoms/BodyContainer";
import { H2O } from "../atoms/Heading";
import styled from "styled-components";

export const BodyColumn = styled(BodyContainerO)`
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
export const BodyRow = styled(BodyContainerO)`
     flex-direction: row;
     justify-content: space-between;
     height: 100%;
     width: 100%;
     max-width: 100vw;
   `;

export const Header2 = styled(H2O)`
    font-size: 70px;
    `;