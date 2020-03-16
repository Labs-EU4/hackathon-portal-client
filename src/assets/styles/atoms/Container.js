import styled from 'styled-components';
import { media, Solid } from "../variables/index";

const ContainerO = styled.div`
  max-width: 380px;
  padding: 60px 40px;
  border: 1px solid ${Solid.BORDER_GREY};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  @media ${media.tablet} {
    width: 340px;
    padding: 60px 30px;
  }

  @media ${media.mobile} {
    max-width: 300px;
    padding: 40px 20px;
  }
`;


// --------------------------------- NEW // --------------------------------- //

// import styled from 'styled-components';

// import { media } from '../variables/media';

export const Container = styled.div`
  max-width: 380px;
  border: 1px solid ${props => props.theme.color.grey.border};
  border-radius: 6px;
  padding: 60px 40px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  @media ${media.tablet} {
    width: 340px;
    padding: 60px 30px;
  }
  @media ${media.mobile} {
    max-width: 300px;
    padding: 40px 20px;
  }
`;
