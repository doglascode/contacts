import styled from 'styled-components';

export const Wrapper = styled.div<{iconSize?: number}>`
  align-items: center;
  background: #5f5377;
  border-radius: 50%;
  display: flex;
  height: ${({ iconSize }) => iconSize ? iconSize : 32}px;
  justify-content: center;
  overflow: hidden;
  width: ${({ iconSize }) => iconSize ? iconSize : 32}px;

  img {
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .letter {
    font-size: 18px;
    user-select: none;
  }
`;
