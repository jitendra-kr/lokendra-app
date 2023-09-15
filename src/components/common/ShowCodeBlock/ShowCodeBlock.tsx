import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {
  updateSampleData,
  updateToolsInput,
} from "../../../common/state/tools";
import { useAppDispatch } from "../../../hooks";
import { CopyToClip } from "../../tools/helper/CopyToClip";
import { InputOutputActionButton } from "../Buttons";
import { DownloadOutput } from "../DownloadOutput";

function UseIt({ code }: { code: string }) {
  const dispatch = useAppDispatch();

  return (
    <>
      <InputOutputActionButton
        name="Try Sample Data"
        onClick={() => {
          dispatch(updateToolsInput(code));
          dispatch(updateSampleData(true));
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        tooltip="Try Sample Data in above tool"
      />
    </>
  );
}

export const ShowCodeBlock = ({
  code,
  language,
  trySample,
  download,
}: {
  code: string;
  language: string;
  trySample?: boolean;
  download?: boolean;
}) => {
  return (
    <div
      style={{
        marginBottom: "60px",
      }}
    >
      <div
        style={{
          marginBottom: "8px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CopyToClip content={code} />
        {trySample && <UseIt code={code} />}
        {download && <DownloadOutput content={code} />}
      </div>
      <SyntaxHighlighter
        language={language}
        style={stackoverflowDark}
        showLineNumbers={true}
        customStyle={{ fontSize: "19px" }}
        wrapLongLines={true}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
