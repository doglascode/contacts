import styled from 'styled-components';

export default styled.input`
  appearance: none;
  background-color: transparent;
  border: 1px solid #3D3D3D;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  padding: 11px 18px;
  outline: none;
  transition: border-color .2s;

  &:focus {
    border-color: #FF8A00;
  }

  &[disabled] {
    background-color: #202020;

    &::placeholder {
      color: #A6A6A6;
    }
  }

  &[type="file"] {
    -moz-appearance: initial;
    color: transparent;
    cursor: pointer;
    padding: 15px 18px 15px 60px;

    &::before {
      content: "Foto do contato";
      color: #FFFFFF;
      display: inline-block;
    }

    &::-webkit-file-upload-button {
      display: none;
    }
  }
`;
