import styled from 'styled-components';

const GalleryStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: ${({ theme: { spacing } }) => spacing(4)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(2)};
`;

export { GalleryStyles };
