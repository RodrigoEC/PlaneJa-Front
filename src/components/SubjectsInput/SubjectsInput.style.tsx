import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  &.invalid {
    color: ${({ theme }) => theme.colors.alert} !important;
    border-color: ${({ theme }) => theme.colors.alert} !important;

    ::placeholder {
      color: ${({ theme }) => theme.colors.alert} !important;
    }

    svg {
      fill: ${({ theme }) => theme.colors.alert};
    }
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.contrast};
  border: none;
  color: inherit;
  font-size: 0.9rem;
  font-weight: bold;
  border-bottom: 1px solid;
  transition: 0.3s;
  letter-spacing: 1px;
  padding-bottom: 4px;

  &[disabled] {
    cursor: not-allowed;
  }

  &::placeholder {
    color: inherit;
    opacity: 0.8;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}80;
    opacity: 0.6;
    border-radius: 8px;
  }

  @media screen and (max-width: 700px) {
    max-width: 9rem;
    font-size: 0.8rem;
  }
`;

export const List = styled.datalist`
  background-color: ${({ theme }) => theme.colors.contrast};
`;

export const AddButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  padding: 0;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  :hover {
    opacity: 0.6;
  }

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
