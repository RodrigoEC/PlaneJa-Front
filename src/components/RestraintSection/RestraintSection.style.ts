import styled, { DefaultTheme } from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-flow: column;
  width: fit-content;
  justify-content: center;
  box-sizing: border-box;
  max-width: 24rem;
  width: 100%;

  padding: 5px;
  gap: 1rem;
  border: 2px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary}50;
  border-radius: 5px;
`;

export const LoadingContainer =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-flow: column;
  font-size: 0.75rem;
  gap: 0.5rem;
`


export const SubjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
  height: 12rem;
  gap: 0.5rem;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
    margin: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}80;
    opacity: 0.6;
    border-radius: 8px;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-flow: column;
  font-size: 0.75rem;
  gap: 0.5rem;
`
