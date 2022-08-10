import styled from 'styled-components';

const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
`;

const CastItem = styled.div`
  display: flex;
  margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
  padding-top: ${({ theme: { spacing } }) => spacing(4)};
`;

const Thumb = styled.div`
  width: 120px;

  img {
    width: 100%;
  }
`;

const ProfileInfo = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(4)};
`;

const Character = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
`;

export { CastList, CastItem, Thumb, ProfileInfo, Character };
