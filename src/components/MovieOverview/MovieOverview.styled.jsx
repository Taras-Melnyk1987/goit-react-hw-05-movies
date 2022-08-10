import styled from 'styled-components';

const MovieOverviewWrapper = styled.div`
  display: flex;
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(3)};
  border-bottom: 2px solid lightgrey;

  h2,
  h3,
  h4 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }
`;

const Thumb = styled.div`
  width: 250px;
  height: 375px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const MovieInfo = styled.div`
  padding: 15px;
`;

const GenresList = styled.ul`
  display: flex;
  font-size: 14px;
`;

const GenresListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export { MovieOverviewWrapper, Thumb, MovieInfo, GenresList, GenresListItem };
