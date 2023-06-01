import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { Modal } from "../components/Modal/Modal";
import { contentMap } from "../util/modalContent";
import { defaultFunction } from "../util/util";

interface ModalContent {
  question: { title: string; children: ReactElement };
}

interface ModalContextInterface {
  openModal: boolean;
  setOpenModal: Function;
  contentKey: keyof ModalContent;
  setContentKey: Function;
  handleChangeContent: Function;
}

const ModalContext = createContext<ModalContextInterface>({
  openModal: false,
  setOpenModal: defaultFunction,
  contentKey: "question",
  setContentKey: defaultFunction,
  handleChangeContent: defaultFunction,
});

export const ModalProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [contentKey, setContentKey] = useState<keyof ModalContent>("question");
  const [content, setContent] = useState<{
    title: string;
    children: () => ReactElement;
  }>(contentMap.question);

  const handleChangeContent = (key: string) => {
    if (!contentMap[key as keyof ModalContent]) return;

    setContentKey(key as keyof ModalContent);
    setOpenModal(true);
  };

  const value = {
    openModal,
    setOpenModal,
    contentKey,
    setContentKey,
    handleChangeContent,
  };

  useEffect(() => {
    setContent(contentMap[contentKey]);
  }, [contentKey, setContentKey]);

  return (
    <ModalContext.Provider value={value}>
      {openModal && (
        <Modal title={content.title} onClose={() => setOpenModal(false)}>
          {content.children()}
        </Modal>
      )}
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return { ...useContext(ModalContext) };
};
