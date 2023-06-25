import { Layout } from "antd";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { useToolListData } from "../../../common/hooks/useToolListData";
import { jsonlint } from "../../../externalLib";
import { OfflineMetaTags } from "../../common";
import { ToolsBody } from "../ToolsBody";
import { ToolKeys, ToolsList } from "../ToolsList";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { ToolDescription } from "../helper/ToolOverview";

const Editor = dynamic(() => import("../../common/Ide/Ide"), {
  ssr: false,
});

const { Content } = Layout;

function JsonToString() {
  const { toolData } = useToolListData(ToolKeys.JSONtostring);
  const [byte, setByte] = useState<string>("");
  const [editorError, setEditorError] = useState<string>("");

  const onError = (errormsg: string | undefined) => {
    if (errormsg) {
      setEditorError(errormsg);
      return;
    }
    setEditorError("");
  };

  function isJsonString(str: string | undefined) {
    if (editorError) {
      setEditorError("");
    }
    if (!str) {
      setByte("");
      return;
    }
    let parsedData;
    try {
      parsedData = jsonlint.parse(str);
    } catch (e) {
      setByte("Invalid JSON ----> " + e);
    }
    const data = JSON.stringify(parsedData);
    if (parsedData && data) {
      setByte(data);
    }
  }

  return (
    <>
      <Content>
        <OfflineMetaTags tagData={toolData} />
        <div className={`${styles.mainDiv} row`}>
          <ToolsBody />
          <div className="col-lg-6">
            <div>
              <Editor cb={isJsonString} error={onError} />
            </div>
          </div>
          <div className="col-lg-6">
            <ConvertedOutputByTools
              content={byte ?? `'${byte}'`}
              error={editorError}
            />
          </div>
        </div>
        <ToolDescription content={toolData.toolDescription} />
        <ToolsList />
      </Content>
    </>
  );
}

export default withRouter(JsonToString);
