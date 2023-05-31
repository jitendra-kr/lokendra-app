import { Content } from "antd/lib/layout/layout";
import { withRouter } from "next/router";
import { OfflineMetaTags } from "../../common";
import { ToolKeys, ToolsList } from "../ToolsList";
import styles from "../../../../styles/StringToAscii.module.css";
import { ToolsBody } from "../ToolsBody";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import characterCounterStyles from "./WordCounter.module.css";

import Link from "next/link";
import { useState } from "react";
import { ToolOutputActions } from "../helper/ToolOutputActions";
import { convertNumberToWords } from "../../../utils";

function WordCounter() {
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setWordSentence] = useState(0);

  const [wordCountInWords, setWordCountInWords] = useState("");
  const [characterCountInWords, setCharacterCountInWords] = useState("");
  const [sentenceCountInWords, setSentenceCountInWords] = useState("");

  const countCharacter = (value: string) => {
    const length = value.length;
    setCharacterCount(length);
    setCharacterCountInWords(convertNumberToWords(length));
  };

  function countWords(str: string) {
    const words = str
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "");
    const length = words.length;
    setWordCount(length);
    setWordCountInWords(convertNumberToWords(length));
  }

  function countSentence(str: string) {
    const words = str
      .trim()
      .split(".")
      .filter((word) => word !== "");
    const length = words.length;
    setWordSentence(length);
    setSentenceCountInWords(convertNumberToWords(length));
  }

  const onChangeCb = (value: string) => {
    countWords(value);
    countCharacter(value);
    countSentence(value);
  };

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.wordCounter} />
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
              <strong className={characterCounterStyles["count-in-words"]}>
                WORDS
              </strong>
              <p className={`${characterCounterStyles.count}`}>
                <ToolOutputActions content={"" + wordCount} />
                {wordCount} <br />
                <span className="textTransformCapitalize">
                  {wordCountInWords}
                </span>
              </p>
            </div>
            <div>
              <strong className={characterCounterStyles["count-in-words"]}>
                CHARACTERS
              </strong>
              <p className={`${characterCounterStyles.count}`}>
                <ToolOutputActions content={"" + characterCount} />
                {characterCount} <br />
                <span className="textTransformCapitalize">
                  {characterCountInWords}
                </span>
              </p>
            </div>
            <div>
              <strong className={characterCounterStyles["count-in-words"]}>
                SENTENCES
              </strong>
              <p className={`${characterCounterStyles.count}`}>
                <ToolOutputActions content={"" + sentenceCount} />
                {sentenceCount} <br />
                <span className="textTransformCapitalize">
                  {sentenceCountInWords}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToolsList />
    </Content>
  );
}

export default withRouter(WordCounter);
