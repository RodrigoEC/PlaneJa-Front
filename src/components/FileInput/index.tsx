import { ReactElement } from "react";
import { UploadIcon } from "../../assets/icons/Upload";
import { useExtractionContext } from "../../contexts/extraction";
import { Label, Text } from "./styles";

export const FileInput = (): ReactElement => {
  const { setFile } = useExtractionContext();

  return (
    <Label>
      <Text>
        <span>Enviar Histórico</span>
        <UploadIcon />
      </Text>
      <input
        hidden
        type="file"
        multiple={false}
        accept=".jpg, .png, .pdf"
        onChange={(e: any) => setFile(e.target.files[0])}
      />
    </Label>
  );
};
