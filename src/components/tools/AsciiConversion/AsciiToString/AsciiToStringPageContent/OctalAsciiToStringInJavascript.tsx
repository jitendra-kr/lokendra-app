import { H2Tag } from "@ft/components/common/HtmlTags/H2Tag";
import { PTag } from "@ft/components/common/HtmlTags/PTag";
import { ShowCodeBlock } from "../../../../common/ShowCodeBlock/ShowCodeBlock";

export function OctalAsciiToStringInJavascript() {
  return (
    <>
      <H2Tag heading="Convert Octal ASCII Codes to String in Javascript" />
      <PTag text="If you have ASCII values represented in octal and you want to convert them to text in JavaScript. you can use a similar approach as before but specify base 8 for the parseInt function. Here's an example" />

      <ShowCodeBlock
        download={false}
        language="javascript"
        code={`
function octalASCIIToText(octalASCII) {
  // Split the input into an array of octal strings
  var octalArray = octalASCII.split(' ');

  // Convert each octal string to decimal ASCII and then to a character
  var text = octalArray.map(function(octal) {
    // Convert octal to decimal ASCII
    var decimalASCII = parseInt(octal, 8);
    // Convert decimal ASCII to character
    return String.fromCharCode(decimalASCII);
  }).join('');

  return text;
}

// Example usage with the octal ASCII "164 145 163 164"
var octalASCII = "164 145 163 164";
var resultText = octalASCIIToText(octalASCII);
console.log(resultText);
// test
      `}
      />
    </>
  );
}
