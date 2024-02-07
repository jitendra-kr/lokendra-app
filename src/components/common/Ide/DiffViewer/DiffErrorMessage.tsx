import DiffViewerStyles from "./DiffViewer.module.css";

export function DiffErrorMessage({ message }: { message: string }) {
  if (!message) return <></>;
  return (
    <div className={DiffViewerStyles.errorMessageBG}>
      <p className={DiffViewerStyles.errorMessageTxt}>{message}</p>
    </div>
  );
}
