import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0.5rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primary}20;
  border-radius: 5px;
  gap: 0.75rem;
  flex-direction: column;
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
  padding: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    opacity: 0.6;
  }
`;
