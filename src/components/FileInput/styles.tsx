import styled, { DefaultTheme } from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;

  padding: 0.75rem 1rem;
  border-radius: 5px;
  border: 2px solid
    ${({ theme, error }: { theme: DefaultTheme; error: boolean }) =>
      error ? theme.colors.alert : theme.colors.primary};
  box-sizing: border-box;
  transition: 0.3s;
  color: ${({ theme, error }: { theme: DefaultTheme; error: boolean }) =>
    error ? theme.colors.alert : theme.colors.primary};
  font-weight: bold;

  svg {
    transition: 0.3s;
    fill: ${({ theme, error }: { theme: DefaultTheme; error: boolean }) =>
      error ? theme.colors.alert : theme.colors.primary};
  }

  &:hover:not(.disabled) {
    cursor: pointer;
    background-color: ${({
      theme,
      error,
    }: {
      theme: DefaultTheme;
      error: boolean;
    }) => (error ? theme.colors.alert : theme.colors.primary)};

    & svg {
      fill: ${({ theme, error }: { theme: DefaultTheme; error: boolean }) =>
        error ? "#fff" : theme.colors.contrast};
    }

    & span {
      color: ${({ theme, error }: { theme: DefaultTheme; error: boolean }) =>
        error ? "#fff" : theme.colors.contrast};
    }
  }

  &.disabled {
    opacity: 0.7;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;

    svg {
      max-width: 12px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-style: italic;
`;
