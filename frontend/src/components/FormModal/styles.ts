import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  background: #101010;
  border: 1px solid #303030;
  border-radius: 8px;
  padding: 35px 30px;
  position: relative;
  text-align: center;
  max-width: 40vw;
  width: 100%;

  @media screen and (max-width: 890px) {
    max-width: 90vw;
  }

  .header {
    margin-bottom: 30px;

    h3 {
      font-size: 20px;
      padding-right: 25px;
    }

    .close {
      position: absolute;
      top: 30px;
      right: 30px;
    }
  }

  input {
    width: 100%;
  }

  button:not(.close) {
    display: block;
    margin-top: 30px;
    width: 100%;
  }
`;
