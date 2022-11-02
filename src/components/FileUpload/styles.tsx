import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  box-sizing: border-box;
`;

export const ClassesVersion = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 0.85rem;
`;

export const FileName = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 0.75rem;
`;
