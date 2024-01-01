import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";
import { AsciiFormat, SelectASCIIConversionType } from "../common";
import { AsciiToStringPageContent } from "./AsciiToStringPageContent";

function AsciiToString() {
  const [byte, setByte] = useState("");
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState<AsciiFormat>("Decimal ASCII");

  function decimalASCIIToText(inputStr: string) {
    const asciiArray = inputStr
      .split(" ")
      .map((code) => parseInt(code.trim(), 10))
      .filter((item) => !isNaN(item));

    const sentence = asciiArray
      .map((asciiValue) => String.fromCharCode(asciiValue))
      .join("");

    return sentence;
  }

  function binaryASCIIToText(binaryASCII: string) {
    // Split the input into an array of binary strings
    var binaryArray = binaryASCII.split(" ");

    // Convert each binary string to decimal ASCII and then to a character
    var text = binaryArray
      .map(function (binary) {
        // Convert binary to decimal ASCII
        var decimalASCII = parseInt(binary, 2);
        // Convert decimal ASCII to character
        return String.fromCharCode(decimalASCII);
      })
      .join("");

    return text;
  }

  function octalASCIIToText(octalASCII: string) {
    // Split the input into an array of octal strings
    var octalArray = octalASCII.split(" ");

    // Convert each octal string to decimal ASCII and then to a character
    var text = octalArray
      .map(function (octal) {
        // Convert octal to decimal ASCII
        var decimalASCII = parseInt(octal, 8);
        // Convert decimal ASCII to character
        return String.fromCharCode(decimalASCII);
      })
      .join("");

    return text;
  }
  function hexASCIIToText(hexASCII: string) {
    // Split the input into an array of hexadecimal strings
    var hexArray = hexASCII.split(" ");

    // Convert each hexadecimal string to decimal ASCII and then to a character
    var text = hexArray
      .map(function (hex) {
        // Convert hexadecimal to decimal ASCII
        var decimalASCII = parseInt(hex, 16);
        // Convert decimal ASCII to character
        return String.fromCharCode(decimalASCII);
      })
      .join("");

    return text;
  }

  const onChangeCb = (value: string) => {
    setInput(value);
    if (value) {
      let text = "";
      switch (inputType) {
        case "Decimal ASCII":
          text = decimalASCIIToText(value);
          break;
        case "Binary ASCII":
          text = binaryASCIIToText(value);
          break;
        case "Octal ASCII":
          text = octalASCIIToText(value);
          break;
        case "Hexadecimal ASCII":
          text = hexASCIIToText(value);
          break;
        default:
          alert("Invalid input format");
          break;
      }
      setByte(text);
    } else {
      setByte("");
    }
  };

  useEffect(() => {
    onChangeCb(input);
  }, [input, inputType]);

  return (
    <InputOutputViewer
      toolId={ToolKeys.ASCIItoString}
      byte={byte}
      onChangeCb={onChangeCb}
      inputEditorActionChild={
        <SelectASCIIConversionType setInputType={setInputType} />
      }
      pageContent={<AsciiToStringPageContent />}
    />
  );
}

export default withRouter(AsciiToString);
