import styled, { css } from 'styled-components';

interface StyledButtonProps {
  isSecondary?: boolean;
  isLoading?: boolean;
}

const background = 'linear-gradient(136.24deg, #FF8A00 -23.81%, #FF005C 156.2%)';

export const StyledButton = styled.button<StyledButtonProps>`
  color: ${({ isSecondary }) => isSecondary ? '#0047FF' : '#000'};
  background: ${({ isSecondary }) => isSecondary ? 'transparent' : background};
  border: 1px solid ${({ isSecondary }) => isSecondary ? '#0047FF' : 'transparent'};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 15px;
  text-transform: uppercase;

  ${({ isLoading }) => isLoading && css`
    > div {
      margin-right: 10px;
    }
  `}
`;
