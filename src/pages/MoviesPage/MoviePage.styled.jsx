import styled from 'styled-components';

const MoviesPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${({ theme: { spacing } }) => spacing(4)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(4)};
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding-top: ${({ theme: { spacing } }) => spacing(1)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(1)};
  padding-left: ${({ theme: { spacing } }) => spacing(2)};
  padding-right: ${({ theme: { spacing } }) => spacing(2)};
  border-radius: ${({ theme: { options } }) => options.borderRadius};
  box-shadow: ${({ theme: { options } }) => options.shadowInset}; ;
`;

export { MoviesPageStyles, Form, Input };
