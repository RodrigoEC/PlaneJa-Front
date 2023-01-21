import styled, { DefaultTheme } from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2rem 1rem 1rem;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.primary}20;
  border: 2px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.colors.stroke}80;
  box-sizing: border-box;
  border-radius: 5px;
  gap: 1.5rem;
`;

export const Title = styled.span`
  font-size: 1.2rem;
  text-transform: capitalize;
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
  border: 2px dashed ${({ theme }: { theme: DefaultTheme }) => theme.colors.stroke}50;
  height: 3.5rem;
  width: 12.5rem;
  border-radius: 3px;
`