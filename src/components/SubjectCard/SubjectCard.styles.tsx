import styled from "styled-components";
import { Locked } from "../../assets/icons/Locked";
import { Unlocked } from "../../assets/icons/Unlocked";

export const LockedIcon = styled(Locked)`
  width: 1.75rem;
  position: absolute;
  align-self: center;
  fill: transparent;
  transition: 0.3s;
  left: calc(50% - 1rem);
  animation-name: pop;
  animation-duration: 0.2s;
`;

export const UnlockedIcon = styled(Unlocked)`
  width: 1.75rem;
  position: absolute;
  align-self: center;
  fill: transparent;
  transition: 0.3s;
  left: calc(50% - 1rem);
  animation-name: pop;
  animation-duration: 0.2s;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: ${({
    colors,
  }: {
    colors: { background: string; border: string };
  }) => colors.background};
  cursor: pointer;
  height: 4rem;
  align-items: center;
  padding: 0.5rem;
  width: 12.5rem;
  box-sizing: border-box;
  border-radius: 3px;
  border: 3px solid
    ${({ colors }: { colors: { background: string; border: string } }) =>
      colors.border};
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    color: ${({ colors }: { colors: { background: string; border: string } }) =>
      colors.background};
    ${LockedIcon}, ${UnlockedIcon} {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;
