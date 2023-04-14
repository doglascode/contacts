import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Container = styled.div<{ danger?: boolean }>`
  background: #101010;
  border: 1px solid #303030;
  border-radius: 8px;
  padding: 30px;
  position: relative;
  text-align: center;
  max-width: 40vw;
  width: 100%;

  @media screen and (max-width: 890px) {
    max-width: 90vw;
  }

  > h1 {
    font-size: 20px;
    color: ${({ danger }) => danger ? '#F63131' : '#FFFFFF'};
  }

  .modal-content {
    margin-top: 30px;
  }
`;

export const Actions = styled.div`
  align-items: center;
  display: flex;
  margin-top: 30px;
  justify-content: flex-end;

  .btn-cancel {
    background: transparent;
    color: #a6a6a6;
  }

  .btn-confirm {
    background: #F63131;
    margin-left: 5px;
  }
`;
