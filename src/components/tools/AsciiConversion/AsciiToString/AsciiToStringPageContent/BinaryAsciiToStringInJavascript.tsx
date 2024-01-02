import { H2Tag, PTag } from "../../../../common";
import { ShowCodeBlock } from "../../../../common/ShowCodeBlock";

export function BinaryAsciiToStringInJavascript() {
  return (
    <>
      <H2Tag heading="Convert Binary ASCII Codes to String in Javascript" />
      <PTag text="In JavaScript, you need to parse each binary representation and transform it back to its decimal ASCII equivalent in order to convert Binary ASCII to text. This is an example of code." />

      <ShowCodeBlock
        download={false}
        language="javascript"
        code={`
function binaryASCIIToText(binaryASCII) {
  // Split the input into an array of binary strings
  var binaryArray = binaryASCII.split(' ');

  // Convert each binary string to decimal ASCII and then to a character
  var text = binaryArray.map(function(binary) {
    // Convert binary to decimal ASCII
    var decimalASCII = parseInt(binary, 2);
    // Convert decimal ASCII to character
    return String.fromCharCode(decimalASCII);
  }).join('');

  return text;
}

// Example usage with the binary ASCII "1110100 1100101 1110011 1110100"
var binaryASCII = "1110100 1100101 1110011 1110100";
var resultText = binaryASCIIToText(binaryASCII);
console.log(resultText);
// test
        
      `}
      />
    </>
  );
}
