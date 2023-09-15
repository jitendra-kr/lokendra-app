import { H1Tag, PTag } from "../../common";
import { ShowCodeBlock } from "../../common/ShowCodeBlock";

export const StringToAsciiInJavascript = () => {
  return (
    <>
      <H1Tag heading="Convert text to ASCII codes in Javascript" />
      <div style={{ marginTop: "30px" }}>
        <PTag text="In JavaScript, we can use the charCodeAt method to get the ASCII codes. In the below example, stringToAsciiCodes function takes an input string and converts it to ASCII codes " />
      </div>
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
