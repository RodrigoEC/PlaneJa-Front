import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;

  padding: 0.75rem 1rem;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;

  svg {
    transition: 0.3s;
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrast};

    & svg {
      fill: ${({ theme }) => theme.colors.contrast} !important;
    }
  }
  
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-style: italic;
`