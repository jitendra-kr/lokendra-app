import { H2Tag, PTag } from "../../../../common";
import { ShowCodeBlock } from "../../../../common/ShowCodeBlock";

export function HexadecimalAsciiToStringInJavascript() {
  return (
    <>
      <H2Tag heading="Convert Hexadecimal ASCII Codes to String in Javascript" />
      <PTag
        text="In hexadecimal The term ASCII describes how ASCII characters are represented using hexadecimal (base-16) numbers. American Standard Code for Information Interchange) has a unique number value, which can be represented in different numeral systems as binary, hexadecimal, or decimal.
      Hexadecimal representation is a useful way to represent binary-coded numbers since each digit corresponds to four binary digits (bits). The letters A-F and the numbers 0–9 are used in hexadecimal, where A stands for 10, B for 11, and so on up to F for 15.
      Here's a quick example in JavaScript to convert hexadecimal ASCII to text"
      />

      <ShowCodeBlock
        download={false}
        language="javascript"
        code={`
function hexASCIIToText(hexASCII) {
  // Split the input into an array of hexadecimal strings
  var hexArray = hexASCII.split(' ');

  // Convert each hexadecimal string to decimal ASCII and then to a character
  var text = hexArray.map(function(hex) {
    // Convert hexadecimal to decimal ASCII
    var decimalASCII = parseInt(hex, 16);
    // Convert decimal ASCII to character
    return String.fromCharCode(decimalASCII);
  }).join('');

  return text;
}

// Example usage with the hexadecimal ASCII "48 65 6C 6C 6F"
var hexASCII = "48 65 6C 6C 6F";
var resultText = hexASCIIToText(hexASCII);
console.log(resultText);
// Hello
      `}
      />
    </>
  );
}
