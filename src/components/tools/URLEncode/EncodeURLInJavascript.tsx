import { H2Tag } from "@ft/components/common/HtmlTags/H2Tag";
import { PTag } from "@ft/components/common/HtmlTags/PTag";
import { ShowCodeBlock } from "../../common/ShowCodeBlock/ShowCodeBlock";

export const EncodeURLInJavascript = () => {
  return (
    <>
      <H2Tag heading="Encode URL in Javascript " />
      <PTag
        text={`There are two in-build methods in JavaScript encodeURIComponent and encodeURI that are used to URL encoding. Here's how you can use them.`}
      />

      <ShowCodeBlock
        download={false}
        language="javascript"
        code={`
        var originalString = "https://fireboxtools.com/encoding-decoding-tools/url-encode?name=online tool";

        var encodedString = encodeURIComponent(originalString);
        
        console.log(encodedString);
        
        // https%3A%2F%2Ffireboxtools.com%2Fencoding-decoding-tools%2Furl-encode%3Fname%3Donline%20tool
          `}
      />

      <ShowCodeBlock
        download={false}
        language="javascript"
        code={`
        var originalString = "https://fireboxtools.com/encoding-decoding-tools/url-encode?name=online tool";

        var encodedString = encodeURI(originalString);
        
        console.log(encodedString);
        
        // https://fireboxtools.com/encoding-decoding-tools/url-encode?name=online%20tool
          `}
      />
    </>
  );
};
