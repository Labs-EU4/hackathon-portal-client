import styled from "styled-components";
import { media } from "../variables/media";
import { BodyContainer } from "../atoms/BodyContainerStyling";

export const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;
export const StyledContainer = styled.div`
  position: relative;
  display: block;
`;

export const AddTeamParticipantContainer = styled.div`
  input {
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.color.black.regular};
    border: 1px solid ${props => props.theme.color.grey.border};
    border-radius: 6px;
    padding: 10px;
    margin: 0 20px 10px 0;
    ${({ display }) => (display === "wide" ? `width: 100%;` : `width: 180px;`)}

    &:focus {
      transition: all 0.5s;
      box-shadow: 0 0 3px #ddd;
    }
  }

  @media ${media.tablet} {
    width: 100%;
    margin-right: 0;
  }
`;

export const StyledWidget = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;
