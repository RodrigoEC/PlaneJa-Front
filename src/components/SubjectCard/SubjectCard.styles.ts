import styled from "styled-components";
import { colors } from "../../util/colors";

export const AboutContainer = styled.div`
  position: absolute;
  align-self: center;
  display: flex;
  gap: 1rem;
`

export const About = styled.span`
  color: transparent;
  transition: 0.3s;
  animation-name: pop;
  animation-duration: 0.2s;
  font-size: 0.75rem;
  text-decoration: underline;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  &:hover {
    opacity: 0.6;
  }
`;

type WrapperType = {
  variant: keyof typeof colors;
  blocked: string;
}
export const Title = styled.span`
  font-size: 0.9rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.forth};
  transition: 0.3s;

  @media screen and (max-width: 700px) {
    font-size: 0.78rem;
  }
`

export const Wrapper = styled.div<WrapperType>`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ variant }: { variant: keyof typeof colors }) =>
    colors[variant]}60;
  cursor: ${({ blocked }: { blocked: string }) =>
    blocked === "T" ? "not-allowed" : "pointer"};
  height: 4rem;
  align-items: center;
  padding: 0.5rem;
  width: 12rem;
  box-sizing: border-box;
  border-radius: 3px;
  border: 3px solid
    ${({ variant }: { variant: keyof typeof colors }) => colors[variant]};
  font-weight: bold;
  font-size: 0.9rem;
  transition: 0.3s;
  text-align: center;
  animation: appear 0.3s;

  & svg {
    opacity: ${({ blocked }: { blocked: string }) =>
    blocked === "T" ? "0.6" : "1"};;
  }

  @media screen and (max-width: 700px) {
    width: 10rem;
  }

  &:hover {
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */

    ${Title} {
      color: ${({ variant }: { variant: keyof typeof colors }) =>
    colors[variant]}30;
    }
    ${About} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;


