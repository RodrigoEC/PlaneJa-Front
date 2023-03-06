import styled from "styled-components";
import { Locked } from "../../assets/icons/Locked";
import { Unlocked } from "../../assets/icons/Unlocked";
import { colors } from "../../util/colors";

export const LockedIcon = styled(Locked)`
  width: 1rem;
  position: absolute;
  align-self: center;
  fill: transparent;
  transition: 0.3s;
  left: calc(50% - 0.5rem);
  animation-name: pop;
  animation-duration: 0.2s;
`;

export const UnlockedIcon = styled(Unlocked)`
  width: 1.2rem;
  position: absolute;
  align-self: center;
  fill: transparent;
  transition: 0.3s;
  left: calc(50% - 0.7rem);
  animation-name: pop;
  animation-duration: 0.2s;
`;

type WrapperType = {
  variant: keyof typeof colors;
  blocked: string;
}
export const Title = styled.span`
  font-size: 1rem;
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
    ${LockedIcon}, ${UnlockedIcon} {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;


