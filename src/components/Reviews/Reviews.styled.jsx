import styled from 'styled-components';

const List = styled.ul`
  width: 90%;
`;

const Review = styled.li`
  border-bottom: ${({ theme: { options } }) => options.border};
  margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => spacing(3)};
  font-weight: 700;
`;

const ReviewText = styled.p`
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;

export { List, ListHeader, Review, ReviewText };
