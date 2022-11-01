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
  @media screen and (max-width: 600px) {
    width: 10rem;
  }
`

export const SideIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Github = styled(GithubIcon)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    width: 1.5rem;
  }
`;
