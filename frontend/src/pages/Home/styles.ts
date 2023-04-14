import styled from 'styled-components';

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 45px;
  padding: 30px 0;

  @media screen and (max-width: 890px) {
    margin: 0 auto;
    gap: 20px;

  }

  h1 {
    font-size: 25px;
  }

  a {
    border: 2px solid #0047FF;
    color: #0047FF;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    padding: 11px 15px;
    text-transform: uppercase;
  }
`;

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 890px) {
    max-width: 90%;
  }
`;

export const ContactsList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 50px;
`;

export const ContactSearchContainer = styled.div`
  border-bottom: 1px solid #303030;
  padding-bottom: 40px;
  width: 100%;

  .search-contact {
    margin: auto;
    width: 500px;

    @media screen and (max-width: 890px) {
      width: 80%;
    }

    input {
      display: block;
      width: 100%;
    }
  }
`;

export const ContactNotFoundContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  gap: 20px;

  span {
    text-align: center;
    max-width: 500px;
    width: 100%;
    word-wrap: break-word;

    strong {
      color: #ff8a00;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

export const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  padding-top: 100px;
  justify-content: center;

  .details {
    margin-left: 30px;

    h1 {
      font-size: 25px;
    }

    button {
      margin-top: 10px;
    }
  }
`;
