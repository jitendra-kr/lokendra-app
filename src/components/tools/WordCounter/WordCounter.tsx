"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { convertNumberToWords } from "../../../utils";
import { ToolKeys } from "../ToolsList/ToolKeys";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { ToolOutputActions } from "../helper/ToolOutputActions";
import characterCounterStyles from "./WordCounter.module.css";
const InputToConvertByTools = dynamic(() =>
  import("../helper/InputToConvertByTools").then(
    (mod) => mod.InputToConvertByTools,
  ),
);

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
    <InputOutputViewer
      toolId={ToolKeys.wordCounter}
      byte={""}
      inputChild={
        <InputToConvertByTools
          onChangeCb={onChangeCb}
          placeholder="Type or Paste Text to Begin"
        />
      }
      outputChild={
        <>
          <div style={{ marginTop: "30px" }}>
            <strong className={characterCounterStyles["count-in-words"]}>
              WORDS
            </strong>
            <span className={`${characterCounterStyles.count}`}>
              <ToolOutputActions content={"" + wordCount} />
              <p className="textTransformCapitalize">
                {wordCount} - {wordCountInWords}
              </p>
            </span>
          </div>
          <div>
            <strong className={characterCounterStyles["count-in-words"]}>
              CHARACTERS
            </strong>
            <span className={`${characterCounterStyles.count}`}>
              <ToolOutputActions content={"" + characterCount} />
              <p className="textTransformCapitalize">
                {characterCount} - {characterCountInWords}
              </p>
            </span>
          </div>
          <div>
            <strong className={characterCounterStyles["count-in-words"]}>
              SENTENCES
            </strong>
            <span className={`${characterCounterStyles.count}`}>
              <ToolOutputActions content={"" + sentenceCount} />
              <p className="textTransformCapitalize">
                {sentenceCount} - {sentenceCountInWords}
              </p>
            </span>
          </div>
        </>
      }
    />
  );
}

export default WordCounter;
