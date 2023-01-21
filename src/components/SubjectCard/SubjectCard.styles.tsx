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
  left: calc(50% - 0.6rem);
  animation-name: pop;
  animation-duration: 0.2s;
`;

export const UnlockedIcon = styled(Unlocked)`
  width: 1.25rem;
  position: absolute;
  align-self: center;
  fill: transparent;
  transition: 0.3s;
  left: calc(50% - 0.8rem);
  animation-name: pop;
  animation-duration: 0.2s;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ variant }: { variant: keyof typeof colors }) => colors[variant]}80;
  cursor: pointer;
  height: 3.5rem;
  align-items: center;
  padding: 0.5rem;
  width: 12.5rem;
  box-sizing: border-box;
  border-radius: 3px;
  border: 3px solid ${({ variant }: { variant: keyof typeof colors }) => colors[variant]};
  font-weight: bold;
  font-size: 0.9rem;
  transition: 0.3s;

  &:hover {
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    color: ${({ variant }: { variant: keyof typeof colors }) => colors[variant]}30;
    ${LockedIcon}, ${UnlockedIcon} {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;
