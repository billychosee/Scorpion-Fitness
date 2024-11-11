import styled from 'styled-components';

type StyledButtonProps = {
  primary?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5rem 1.5rem;
  font-family: ${({ theme }) => theme.fonts.merriweather};
  background: ${(props) => (props.primary ? '#800080' : '#148914')};
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;

  &:hover {
    background: ${(props) => (props.primary ? '#EA00EA' : '#25F025')};
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.95rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.8rem;
    padding: 0.5rem 1.25rem;
  }
`;
