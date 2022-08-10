import styled from 'styled-components';
const MovieDetailsStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${({ theme: { spacing } }) => spacing(4)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(4)};
`;

export { MovieDetailsStyles };
