import styled from "styled-components";
import Logo from "../../assets/images/Logo.svg";
import LogoWhite from "../../assets/images/LogoWhite.svg";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 6px;
  overflow-x: scroll;
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

export const Timing = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  margin-top: 6rem;
  gap: 4rem;
  margin-left: 0.25rem;

  @media screen and (max-width: 700px) {
    margin-top: 5rem;
    gap: 4.1rem;
  }
`;

export const Time = styled.span`
  display: flex;
  gap: 0.25rem;
  padding-right: 0.25rem;
  font-size: 0.9rem;
  font-weight: bold;
  opacity: 0.9;
  &::after {
    content: "-";
  }

  @media screen and (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

export const TableContent = styled.div`
  display: flex;
  gap: 0.65rem;
  background-image: url(${({ theme }) => theme.name === "light" ? Logo : LogoWhite});
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 700px) {
    gap: 0.5rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid  ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrast};
  }
`;
