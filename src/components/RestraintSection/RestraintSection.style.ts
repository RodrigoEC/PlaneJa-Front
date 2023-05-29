import styled, { DefaultTheme } from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-flow: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 1rem;
  border: 2px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary}50;
  border-radius: 5px;
`;

export const InputArea = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

export const Divider = styled.div`
  height: 1.5rem;
  border-left: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary}50;
`;

export const Submit = styled.input`
  justify-self: flex-end;
`;

export const EssentialContainer = styled.div`
  flex-grow: 1;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const SubjectsContainer = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  gap: 0 1rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 500px) {
    overflow-x: scroll;
    justify-content: start;
    flex-wrap: nowrap;

    &::-webkit-scrollbar {
      margin-top: 1rem;
      background-color: transparent;
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary}80;
      opacity: 0.6;
      border-radius: 8px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.primary}70;
`

export const Button = styled.button`
  background-color: transparent;
  box-shadow: none;
  border: none;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 0.9rem;
  transition: 0.3s;
  cursor: ${({ disable }: { disable: string }) => disable === "true" ? "not-allowed" : "pointer"};
  opacity: ${({ disable }: { disable: string }) => disable === "true" ? "0.6" : "1"};
  border-bottom: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  padding: 0;

  &:hover {
    opacity: 0.7;
  }
`