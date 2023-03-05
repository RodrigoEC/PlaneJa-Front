import styled from "styled-components";
import { Github as GithubIcon } from "../../assets/icons/Github";
import { Logo as LogoPlaneJa } from "../../assets/icons/Logo";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1rem 0rem 0.5rem;
  box-sizing: border-box;
`;

export const Logo = styled(LogoPlaneJa)`
  fill: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 700px) {
    width: 9rem;
  }
`;

export const SideIcons = styled.div`
  display: flex;
  gap: 1rem;
  transition: 0.3s;
  align-items: center;
`;

export const Name = styled.span`
  font-weight: bold;
  opacity: 0.8;

  @media screen and (max-width: 600px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 400px) {
    display: None;
  }
`

export const Github = styled(GithubIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.primary};
  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    width: 1.5rem;
  }
`;
