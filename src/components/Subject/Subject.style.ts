import styled from "styled-components";
import { Add } from "../../assets/icons/Add";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Delete = styled(Add)`
  transform: rotate(45deg);
  fill: ${({ theme }) => theme.colors.secondary};
  width: 0.75rem;
`;
