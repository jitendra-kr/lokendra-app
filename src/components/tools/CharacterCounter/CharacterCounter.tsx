import { Content } from "antd/lib/layout/layout";
import { withRouter } from "next/router";
import { OfflineMetaTags } from "../../common";
import { ToolKeys, ToolsList } from "../ToolsList";
import styles from "../../../../styles/StringToAscii.module.css";
import { ToolsBody } from "../ToolsBody";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import characterCounterStyles from "./CharacterCounter.module.css";

import Link from "next/link";
import { JsonViewer } from "../helper/JsonViewer";
import { useEffect, useState } from "react";
import { ToolOutputActions } from "../helper/ToolOutputActions";
import { convertNumberToWords } from "../../../utils";

function CharacterCounter() {
  const [count, setCount] = useState(0);
  const [countInWords, setCountInWords] = useState("");

  const onChangeCb = (value: string) => {
    const length = value.length
    setCount(length);
    setCountInWords(convertNumberToWords(length));
  };

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.characterCounter} />
      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-9">
          <InputToConvertByTools
            rules={[
              { required: true, message: "Please enter" },
              {
                validator: async (_: any, value: any) => {
                  if (!value) {
                    return Promise.reject("Please enter any text!");
                  } else {
                    return Promise.resolve();
                  }
                },
              },
            ]}
            onChangeCb={onChangeCb}
            placeholder="Type or Paste Text to Begin"
          />
          <div>
            Want to stringify JSON ? use
            <Link href="/tools/json-to-string">&nbsp; stringify JSON </Link>
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <div>
              <p className={`${characterCounterStyles.count}`}>
                <ToolOutputActions content={"" + count} />
                <b>{count}</b> <br />
                <hr />
                <ToolOutputActions content={countInWords} />
                <b className="textTransformCapitalize">{countInWords}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToolsList />
    </Content>
  );
}

export default withRouter(CharacterCounter);
