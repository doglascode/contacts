import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;

  & + .input-field {
    margin-top: 20px;
  }

  small {
    color: #f63131;
    display: block;
    font-size: 12px;
    margin-top: 10px;
  }

  .loader {
    position: absolute;
    top: 17px;
    right: 20px;
  }

  .contact-icon {
    position: absolute;
    top: 10px;
    left: 18px;
  }
`;
