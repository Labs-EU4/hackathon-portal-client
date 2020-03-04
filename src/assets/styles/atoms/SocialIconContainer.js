import styled from 'styled-components';

export const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0.5rem;

  a {
    color: ${props => props.theme.color.grey.regular};
    padding: 0;
    margin: 20px 15px 0 15px;
    ${props => props.theme.fontSize.h1};
    display: inline-block;
    cursor: pointer;

    i {
      font-size: 5rem;
      transition: transform 0.25s ease-in;
      margin: 0 auto;
    }

    &:hover i {
      color: ${props => props.theme.color.grey.regular};
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin-top: 3rem;
  text-transform: uppercase;
  color: ${props => props.theme.color.white.regular};
  font-weight: 500;
  line-height: 1.4rem;

  .dividerContainer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    font-weight: 50;
    font-size: 10px;

    p{
      width: 40%;
    }

    .divider {
      padding: 1rem;
      width: 47%;
    }
  }
`;