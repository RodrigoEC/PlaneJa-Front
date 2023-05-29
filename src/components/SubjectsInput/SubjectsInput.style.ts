import styled from "styled-components";
import { FilterIcon } from "../../assets/icons/Filter";

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  min-width: 15rem;
  
  padding: 5px 5px 2.5px 5px;
  border-radius: 3px;
  border-bottom: 1px solid;
  /* &:focus-within {
    outline: solid;
    outline-width: 2px;
    outline-color: white;
  } */

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
  font-size: 0.85rem;
  font-weight: bold;
  transition: 0.3s;
  letter-spacing: 1px;
  padding-bottom: 4px;
  outline: none;
  width: 100%;

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

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const Filter = styled(FilterIcon)`
  fill: ${({ theme }) => theme.colors.primary};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`