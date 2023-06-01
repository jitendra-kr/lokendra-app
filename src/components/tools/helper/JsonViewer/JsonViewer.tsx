import { get, isArray } from "lodash";
import { JSONTree } from "react-json-tree";
import { STRING_CONSTANTS } from "../../../../constants";
import { ToolOutputActions } from "../ToolOutputActions";
import styles from "./JsonViewer.module.css";
import { JSONTreeTheme } from "./editorTheme";

type JsonViewerProps = {
  content: any;
  input: string;
  error: any;
};

function RenderJsonViewer({ content, error, input }: JsonViewerProps) {
  const valueColor: any = {
    boolean: "boolean",
    number: "number",
    string: "string",
  };

  const typeOf = (value: any) => {
    if (value === "true" || value === "false") {
      return "boolean ";
    }
    if (value === "null") {
      return "object ";
    }
    return typeof value + " ";
  };

  if (!input) {
    return <></>;
  }

  if (content && content === STRING_CONSTANTS.tools.invalidJson) {
    return (
      <span className={styles.invalidJson}>
        {content} ----&gt; {get(error, "name") + " " + get(error, "message")}
      </span>
    );
  }

  return (
    <>
      {isArray(content) ? "[" : "{"}
      <JSONTree
        data={content}
        labelRenderer={([raw]) => (
          <span className={styles.keyValues}>"{raw}":</span>
        )}
        valueRenderer={(raw: any) => (
          <em>
            <span className={`${styles.keyValues} ${styles.dataTypeLabel}`}>
              {typeOf(raw)}
            </span>
            <span
              className={`${styles.keyValues} ${
                styles[valueColor[typeOf(raw)]]
              }`}
            >
              {raw}
            </span>
          </em>
        )}
        theme={{
          extend: JSONTreeTheme,
        }}
        shouldExpandNode={() => true}
        hideRoot={true}
      />
      {isArray(content) ? "]" : "}"}
    </>
  );
}

export const JsonViewer = ({ content, error, input }: JsonViewerProps) => {
  return (
    <>
      <ToolOutputActions content={content} />
      <div className={styles.container}>
        <RenderJsonViewer content={content} error={error} input={input} />
      </div>
    </>
  );
};
