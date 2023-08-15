import { toWords } from "number-to-words";
import { useState } from "react";
import { capitalizeEveryWord, messageError } from "../../../../utils";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";

export function NumbersToWords() {
  const [byte, setByte] = useState("");
  const [error, setError] = useState("");

  const [number, setNumber] = useState<string>("");

  const validateDot = (value: string) => {
    var count = 0;
    for (var i = 0; i < value.length; i++) {
      if (value[i] === ".") {
        count++;
      }
    }
    return { isValid: count <= 1, array: value.split(".") };
  };

  const onChangeCb = (value: string) => {
    setByte("");
    setError("");
    setNumber("");

    if (!value) {
      return;
    }
    value = value.replaceAll(",", "");
    const { isValid, array } = validateDot(value);
    if (!isValid) {
      setError("INVALID NUMBER");
      return;
    }
    const afterDecimal = array[1];
    setNumber(value);
    let words = "";
    try {
      words += toWords(value);
      if (afterDecimal) {
        words += ` point ${toWords(afterDecimal)}`;
      }
      if (words) {
        words = words.replaceAll("-", " ");
      }
      setByte(capitalizeEveryWord(words));
    } catch (error) {
      setError("INVALID NUMBER");
    }
  };

  const onClick = () => {
    if (!number) {
      messageError({ content: "Please type number" });
    }
    onChangeCb(number);
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.NUMBER_TO_WORDS}
      byte={byte}
      onChangeCb={onChangeCb}
      input={{ showInput: true, buttonName: "Convert" }}
      onClick={onClick}
      placeholder={`Enter desired number`}
      error={error}
    />
  );
}
