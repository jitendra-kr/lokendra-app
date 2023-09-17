import { H1Tag, PTag } from "../../common";
import { ShowCodeBlock } from "../../common/ShowCodeBlock";

export const DecodeURLInJavascript = () => {
  return (
    <>
      <H1Tag heading="Decode URL in Javascript " />
      <PTag
        text={`There are two in-build methods in JavaScript decodeURIComponent and decodeURI that are used to URL encoding. Here's how you can use them.`}
      />

      <ShowCodeBlock
        download={false}
        language="javascript"
        code={`
        var originalString = "https%3A%2F%2Ffireboxtools.com%2Fencoding-decoding-tools%2Furl-encode%3Fname%3Donline%20tool";

        var decodedString = decodeURIComponent(originalString);
        
        console.log(decodedString);
        
        // https://fireboxtools.com/encoding-decoding-tools/url-encode?name=online tool
          `}
      />

      <ShowCodeBlock
        download={false}
        language="javascript"
        code={`
        var originalString = "https%3A%2F%2Ffireboxtools.com%2Fencoding-decoding-tools%2Furl-encode%3Fname%3Donline%20tool";

        var decodedString = decodeURI(originalString);
        
        console.log(decodedString);
        
        // https%3A%2F%2Ffireboxtools.com%2Fencoding-decoding-tools%2Furl-encode%3Fname%3Donline tool
          `}
      />
    </>
  );
};
