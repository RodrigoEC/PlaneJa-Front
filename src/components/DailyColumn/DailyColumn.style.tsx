import styled, { DefaultTheme } from "styled-components";
import { Reload } from "../../assets/icons/Reload";

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
  border: 2px dashed
    ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary}50;
  height: 3.3rem;
  width: 10.5rem;
  border-radius: 3px;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
    width: 9rem;
  }
`;

export const LoadingIcon = styled(Reload)`
  fill: ${({ theme }) => theme.colors.primary};
  animation: spinning 0.8s infinite;
  animation-timing-function: linear;
  opacity: 0.7;
`;

export const LoadingSubject = styled(EmptySubject)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  gap: 0.4rem;

  color: ${({ theme }) => theme.colors.primary}80;

  span {
    font-size: 0.7rem;
  }
`;
