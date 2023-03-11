import styled from "styled-components";

export const Background = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  display: flex;
  padding: 1rem;
  position: fixed;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000070;
  z-index: 1;

  animation-name: fadeIn;
  animation-duration: 0.2s;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 30rem;
  width: 100%;
  min-height: 15rem;
  background-color: ${({ theme }) => theme.colors.contrast};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 1.25rem 1rem;
  box-sizing: border-box;
  gap: 1rem;

  animation-name: translateDown;
  animation-duration: 0.2s;
  transform: ${({ closed }: { closed: string }) =>
    closed === "true" && "translateY(-4rem) rotateX(90deg);"};
  transition: 0.2s;

  @keyframes translateDown {
    from {
      transform: translateY(-4rem);
    }
    to {
      transform: translateY(0);
    }
  }

  article {
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.25;
  }

  img {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.2rem;
  line-height: 1.5;

  @media screen and (max-width: 700px) {
    letter-spacing: 0.1rem;
    padding: 0.25rem 0;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`

export const Text = styled.div``;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  width: fit-content;
`;

export const Close = styled.span`
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0.5rem;
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;

  &:hover,
  strong {
    text-decoration: underline;
  }
`;
