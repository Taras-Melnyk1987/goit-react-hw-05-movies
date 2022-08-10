import styled from 'styled-components';

const ButtonStyles = styled.button`
  display: inline-flex;
  align-items: center;
  align-self: center;
  padding-top: ${({ theme: { spacing } }) => spacing(2)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(2)};
  padding-left: ${({ theme: { spacing } }) => spacing(5)};
  padding-right: ${({ theme: { spacing } }) => spacing(5)};

  border: none;
  border-radius: ${({ theme: { options } }) => options.borderRadius};
  background-color: ${({ theme: { colors } }) => colors.accent};
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 14px;

  cursor: pointer;

  &:active {
    box-shadow: ${({ theme: { options } }) => options.shadowInset};
  }
`;

export { ButtonStyles };
