import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #202020;
  border-radius: 8px;
  color: #fff;
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  width: 345px;

  @media screen and (max-width: 890px) {
    width: 100%;
  }

  .details {
    align-items: center;
    display: flex;
    gap: 15px;

    .contact-icon {
      align-items: center;
      background: #5f5377;
      border-radius: 50%;
      display: flex;
      font-size: 25px;
      justify-content: center;
      height: 40px;
      overflow: hidden;
      width: 40px;
    }
  }

  .actions {
    align-items: center;
    display: flex;
    gap: 10px;
  }
`;

export const Info = styled.div`
  max-width: 185px;
  word-wrap: break-word;

  .name {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    h3 {
      font-size: 16px;
      font-weight: 400;
    }
  }

  .label {
    background: #FF8A00;
    border-radius: 2px;
    color: #000;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    padding: 2px 5px;
  }

  .phone {
    margin-top: 8px;

    h2 {
      font-size: 17px;

      &.empty {
        color: #A6A6A6;
        font-weight: 400;
      }
    }
  }

  .email {
    color: #a6a6a6;
    font-size: 12px;
    margin-top: 8px;
  }
`;
