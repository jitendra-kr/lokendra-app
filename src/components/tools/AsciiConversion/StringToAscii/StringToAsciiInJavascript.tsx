import { H2Tag, PTag } from "../../../common";
import { ShowCodeBlock } from "../../../common/ShowCodeBlock";

export const StringToAsciiInJavascript = () => {
  return (
    <>
      <H2Tag heading="Convert string to ASCII codes in Javascript" />
      <PTag
        text="Converting text to ASCII is a common task in many programming scenarios. Knowledge of ASCII code conversion gives you a better knowledge of character representation and allows you to take on a variety of text-based difficulties. 
      In JavaScript, we can use the charCodeAt method to get the ASCII codes. In the below example, stringToAsciiCodes function takes an input string and converts it to ASCII codes. "
      />

      <ShowCodeBlock
        download={false}
        language="javascript"
        code={`
        function stringToAsciiCodes(inputString) {
            const asciiCodes = [];
          
            for (let i = 0; i < inputString.length; i++) {
              const charCode = inputString.charCodeAt(i);
              asciiCodes.push(charCode);
            }
          
            return asciiCodes;
          }
          
        const inputString = "fireboxtools.com";
        const asciiCodes = stringToAsciiCodes(inputString);
        console.log(asciiCodes);
        
        // [102, 105, 114, 101, 98, 111, 120, 116, 111, 111, 108, 115, 46, 99, 111, 109]
          `}
      />
    </>
  );
};
