import styled from "styled-components";

export const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.contrast};
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  max-width: 10rem;
  height: 1.5rem;
  transition: 0.3s;
  letter-spacing: 1px;
`;
