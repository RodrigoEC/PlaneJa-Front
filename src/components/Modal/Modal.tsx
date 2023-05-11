import {
  MouseEventHandler,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Wrapper, Background, Close, Title, Divider } from "./Modal.style";

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
    console.log(event)
    if (keys.includes(event.key) && !event.ctrlKey) {
      handleClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Background onClick={handleClose}>
      <Wrapper
        onClick={(e) => e.stopPropagation()}
        closed={closedModal.toString()}
      >
        <Title>{title}</Title>
        <Divider/>
        {children}
        <Divider/>
        <Close onClick={handleClose}>
          <strong>F</strong>echar
        </Close>
      </Wrapper>
    </Background>
  );
};
