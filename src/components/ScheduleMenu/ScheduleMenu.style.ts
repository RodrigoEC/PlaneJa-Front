import styled, { DefaultTheme } from "styled-components";
import { Arrow } from "../../assets/icons/Arrow";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Index = styled.span`
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;

  background-color: ${({
    selected,
    theme,
  }: {
    selected: string;
    theme: DefaultTheme;
  }) => selected === "T" && theme.colors.primary};

  color: ${({ selected, theme }: { selected: string; theme: DefaultTheme }) =>
    selected === "T" && theme.colors.contrast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrast};
  }
`;

export const RightArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.colors.primary};
  opacity: ${({ blocked }: { blocked: string }) =>
    blocked === "T" ? 0.6 : 1};
  cursor: ${({ blocked }: { blocked: string }) =>
    blocked === "T" ? "not-allowed" : "pointer"};
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const LeftArrow = styled(RightArrow)`
  transform: rotate(180deg);
`;
