import {
  MouseEventHandler,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Wrapper, Background, Close, Title } from "./Modal.style";

export const Modal = ({
  onClose,
  title,
  children,
}: {
  title: string;
  onClose: MouseEventHandler;
  children: ReactElement;
}): ReactElement => {
  const [closedModal, setClosedModal] = useState(false);
  const handleClose = () => {
    setClosedModal(true);
    setTimeout(onClose, 150);
  };

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const keys = ["Escape", "f"];
    if (keys.includes(event.key)) {
      handleClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <Background onClick={handleClose}>
      <Wrapper
        onClick={(e) => e.stopPropagation()}
        closed={closedModal.toString()}
      >
        <Title>{title}</Title>
        {children}
        <Close onClick={handleClose}>
          <strong>F</strong>echar
        </Close>
      </Wrapper>
    </Background>
  );
};
