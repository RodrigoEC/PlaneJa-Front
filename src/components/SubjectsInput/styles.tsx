import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 3px;
  gap: 0.5rem;
  align-items: center;
`;

export const InputNumber = styled.input`
  max-width: 2.5rem;
  background-color: ${({ theme }) => theme.colors.third}50;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  height: 1.25rem;
  font-weight: bold;

  @media screen and (max-width: 700px) {
    height: 1.5rem;
  }
`;

export const Text = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;
