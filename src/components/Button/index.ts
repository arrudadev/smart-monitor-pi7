import styled from 'styled-components';

type ButtonProps = {
  width?: string;
  background?: string;
  color?: string;
};

export const Button = styled.button<ButtonProps>`
  height: 3rem;
  width: ${({ width }) => width || '100%'};

  font-size: 1rem;
  font-weight: 600;

  border: none;
  border-radius: 8px;

  color: ${({ color }) => color || 'var(--text)'};

  background: ${({ background }) => background || 'var(--primary)'};

  &:hover {
    filter: brightness(0.9);
  }
`;
