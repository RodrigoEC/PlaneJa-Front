import styled from "styled-components";

export const OutWrapper = styled.div`
  width: 100%;
  padding-bottom: 6px;
  overflow-x: scroll;
  margin-bottom: 1rem;
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}80;
    opacity: 0.6;
    border-radius: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;
