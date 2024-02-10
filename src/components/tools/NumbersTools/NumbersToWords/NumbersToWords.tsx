"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { capitalizeEveryWord, messageError } from "../../../../utils";
import { Faq } from "../../../common";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import numbersToWordsFaqData from "./numbersToWordsFaqData";

const NumbersToWordsOptions = dynamic(
  () =>
    import("./NumbersToWordsOptions").then((mod) => mod.NumbersToWordsOptions),
  {
    ssr: false,
  },
);

const initialOptions = {
  localeCode: "",
  currency: false,
};

type InitialOptions = {
  localeCode?: string;
  currency?: boolean;
};

export function NumbersToWords() {
  const [byte, setByte] = useState("");
  const [error, setError] = useState("");
  const [number, setNumber] = useState<string>("");
  const [options, setOptions] = useState<InitialOptions>(initialOptions);

  useEffect(() => {
    setOptions((value) => ({ ...value, localeCode: navigator.language }));
  }, []);

  const handleLocaleCodeChange = (v: string) => {
    setOptions((value) => ({ ...value, localeCode: v }));
    onChangeCb(number, v, options.currency);
  };

  const handleCurrencyCheckboxChange = (v: boolean) => {
    setOptions((value) => ({ ...value, currency: v }));
    onChangeCb(number, options.localeCode, v);
  };

  const onChangeCb = async (
    value: string,
    localeCode?: string,
    currency?: boolean,
  ) => {
    const { ToWords } = await import("to-words");
    const toWords = new ToWords({
      localeCode: localeCode ?? options.localeCode,
      converterOptions: {
        currency: currency ?? options.currency,
        doNotAddOnly: true,
      },
    });
    setByte("");
    setError("");
    setNumber("");

    if (!value) {
      return;
    }
    value = value.replaceAll(",", "");
    setNumber(value);
    try {
      const words = toWords.convert(Number(value));
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
    <>
      <InputOutputViewer
        toolId={ToolKeys.NUMBER_TO_WORDS}
        byte={byte}
        onChangeCb={onChangeCb}
        input={{
          showInput: true,
          buttonName: "",
          options: (
            <>
              <NumbersToWordsOptions
                handleCurrencyCheckboxChange={handleCurrencyCheckboxChange}
                handleLocaleCodeChange={handleLocaleCodeChange}
              />
            </>
          ),
        }}
        onClick={onClick}
        placeholder={`Enter desired number`}
        error={error}
      />
      <Faq data={numbersToWordsFaqData}></Faq>
    </>
  );
}
