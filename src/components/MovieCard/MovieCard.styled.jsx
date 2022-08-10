import styled from 'styled-components';

const Thumb = styled.div`
  width: 250px;
  height: 375px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  padding: 10px 10px;

  h2 {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.black};
  }
`;
export { Thumb, Title };
