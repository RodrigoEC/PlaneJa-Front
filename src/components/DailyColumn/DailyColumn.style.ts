import styled, { DefaultTheme } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2rem 0.75rem 1rem;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.primary}10;
  border: 2px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary}40;
  box-sizing: border-box;
  border-radius: 5px;
  gap: 1.5rem;

  @media screen and (max-width: 700px) {
    padding: 1.5rem 1rem 1rem;
    gap: 1.25rem;
  }
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const Divider = styled.div`
  border: 1px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  width: 2.5rem;
`;

export const SubjectsContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

export const EmptySubject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed
    ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary}50;
  height: 4rem;
  width: 12rem;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 1.5rem;

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
    width: 10rem;
  }
`;