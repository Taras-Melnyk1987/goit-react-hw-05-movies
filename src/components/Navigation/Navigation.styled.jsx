import styled from 'styled-components';

const NavListLinks = styled.ul`
  display: flex;

  li {
    padding: ${({ theme: { spacing } }) => spacing(3)};
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.black};
    font-size: 18px;
  }

  a.active {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;

export { NavListLinks };
