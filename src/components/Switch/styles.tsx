import styled, { DefaultTheme } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  height: 2rem;
  width: 3.5rem;
  padding: 0rem 0.4rem;
  box-sizing: border-box;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 600px) {
    width: 3rem;
    height: 1.5rem;
  }
`;

export const InnerBall = styled.div`
  background-color: ${({ theme }) => theme.colors.contrast};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  transition: 0.3s ease;
  transition-property: transform background-color;
  ${({ theme }: { theme: DefaultTheme }) =>
    theme.name === "dark" ? `transform: translate(125%)` : ""};

  @media screen and (max-width: 600px) {
    width: 1rem;
    height: 1rem;
  }
`;
