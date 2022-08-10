import styled from 'styled-components';

const AdditionalInfo = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(3)};
  border-bottom: 2px solid lightgrey;

  h5 {
    margin-bottom: ${({ theme: { spacing } }) => spacing(2)};
    font-size: 14px;
  }
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 40px;
  font-size: 14px;

  a {
    text-decoration: underline;
  }

  li a.active {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;

export { AdditionalInfo, List };
