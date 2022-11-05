import { ReactElement } from "react";
import { UploadIcon } from "../../assets/icons/Upload";
import { useExtractionContext } from "../../contexts/extraction";
import { Label, Text } from "./styles";

export const FileInput = (): ReactElement => {
  const { setFile, loading, error, setError } = useExtractionContext();

  const onUpload = (e: any) => {
    setFile(e.target.files[0]);

    if (error) {
      setError(false);
    }
  };

  return (
    <Label error={error} className={loading ? "disabled" : ""}>
      <Text>
        {loading ? (
          <span>Extraindo dados...</span>
        ) : (
          <>
            <span>Carregar Histórico</span>
            <UploadIcon />
          </>
        )}
      </Text>
      <input
        disabled={loading}
        hidden
        type="file"
        multiple={false}
        accept=".pdf"
        onChange={onUpload}
      />
    </Label>
  );
};
