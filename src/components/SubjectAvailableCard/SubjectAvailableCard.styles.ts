import styled, { DefaultTheme } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0.5rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primary}15;
  border-radius: 5px;
  gap: 0.75rem;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.secondary}60;
  margin-right: 0.15rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
`;
export const ScheduleContainer = styled.div`
  display: flex;
  font-size: 0.75rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Day = styled.span`
  font-size: inherit;
  font-weight: bold;
`;

export const ScheduleTime = styled.span`
  opacity: 0.8;
  font-size: inherit;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.25rem 0;
  font-weight: bold;
  width: 100%;
  border-radius: 5px;
  color: ${({
    isAvailable,
    theme,
  }: {
    isAvailable: string;
    theme: DefaultTheme;
  }) => (isAvailable === "T" ? theme.colors.primary : theme.colors.alert)};
  cursor: ${({ isAvailable }: { isAvailable: string }) =>
    isAvailable === "T" ? "pointer" : "not-allowed"};
  transition: 0.3s;

  &:hover {
    background-color: ${({
      isAvailable,
      theme,
    }: {
      isAvailable: string;
      theme: DefaultTheme;
    }) => isAvailable === "T" && `${theme.colors.primary}20`};
  }
`;

export const SubWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 12rem;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

export const SubList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InlineList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  line-height: 1.25;
`;

export const ListTitle = styled.span`
  font-weight: bold;
`;

export const ListContent = styled.span`
`;

export const ClassNumber = styled(ListContent)`
  line-break: strict;
`

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}30;
  margin: 0;
  padding: 0;
`