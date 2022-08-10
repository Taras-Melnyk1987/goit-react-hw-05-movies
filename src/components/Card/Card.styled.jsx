import styled from 'styled-components';

export const CardContainer = styled.li`
  width: 250px;
  height: auto;
  margin-bottom: ${({ theme: { spacing } }) => spacing(5)};
  border-radius: ${({ theme: { options } }) => options.borderRadius};
  box-shadow: ${({ theme: { options } }) => options.shadowOut};
  cursor: pointer;

  &:active {
    box-shadow: ${({ theme: { options } }) => options.shadowInset};
  }
`;
