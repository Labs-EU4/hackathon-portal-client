import styled from 'styled-components';

export const Anchor = styled.a`
  ${props => props.theme.fontSize.small};
  font-weight: 500;
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.black.regular};

  &:hover {
    color: ${props => props.theme.color.black.light};
  }
`;

export const TopNavAnchor = styled(Anchor)`
  ${props => props.theme.fontSize.base};
  border: 0;
  padding: 10px;
  margin: 0 10px 0 0;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.color.black.regular};
    transition: all 3s;
  }
`;

export const FooterNavAnchor = styled(Anchor)`
  color: ${props => props.theme.color.black};
  padding: 10px;
  border: 0;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.color.grey.regular};
    transition: all 3s;
  }
`;
