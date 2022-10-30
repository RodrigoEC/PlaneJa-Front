import styled from "styled-components";
import { Github as GithubIcon } from "../../assets/icons/Github";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
`

export const SideIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const Github = styled(GithubIcon)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

`