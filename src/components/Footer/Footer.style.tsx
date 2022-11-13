import styled from "styled-components";
import { Github } from "../../assets/icons/Github";

export const Wrapper = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.8rem;

  box-sizing: border-box;
  margin-bottom: 1.5rem;
`;

export const Text = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;


export const GithubIcon = styled(Github)`
  fill: ${({ theme }) => theme.colors.primary};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`
