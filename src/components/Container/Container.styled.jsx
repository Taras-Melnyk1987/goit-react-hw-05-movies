import styled from 'styled-components';

const ContainerStyles = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme: { spacing } }) => spacing(3)};
  padding-right: ${({ theme: { spacing } }) => spacing(3)};
`;

export { ContainerStyles };
