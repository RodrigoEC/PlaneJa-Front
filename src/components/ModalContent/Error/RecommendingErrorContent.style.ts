import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-flow: column;
  gap: 1rem;

  img {
    max-width: 11rem;
    min-width: 11rem;
    min-height: 11rem;
    background-color: ${({ theme }) => theme.colors.primary}50;
  }
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: 0.95rem;
`;



