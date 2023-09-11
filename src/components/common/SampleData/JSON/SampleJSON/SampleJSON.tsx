import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { SCREENS } from "../../../../../common/enums";
import { OfflineMetaTags } from "../../../OfflineMetaTags/OfflineMetaTags";
import { RelevantTools } from "../../../RelevantTools";
import { ShowCodeBlock } from "../../../ShowCodeBlock";
import styles from "./SampleJSON.module.css";
import {
  DaysJSON,
  FormattedJSON,
  InvalidJSON,
  JSONExamples,
  MinifiedJSON,
  ProductJSON,
  SampleData,
  UserJSON,
  blogPostCommentJSON,
  employeeJSON,
  employersJSON,
  monthsJSON,
} from "./sampleJSONData";

const headingToID = (heading: string) => {
  return heading.toLocaleLowerCase().replaceAll(" ", "-");
};

function RenderSampleData({
  jsonData,
  heading,
}: {
  jsonData: SampleData[];
  heading: string;
}) {
  return (
    <>
      <div className="col">
        <h2
          className="heading"
          style={{ textAlign: "left", marginBottom: "20px" }}
        >
          {heading}
        </h2>

        <ul>
          {jsonData.map((data) => (
            <li key={data.value} style={{ fontSize: "17px" }}>
              <Link className={styles.link} href={data.value} target="_blank">
                {data.key}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function RenderJSONExamples({ data }: { data: JSONExamples }) {
  const id = headingToID(data.heading);
  return (
    <div className="col">
      <h2
        className="heading"
        style={{ marginBottom: "20px", fontSize: "22px" }}
        id={id}
      >
        {data.heading}
        <Link href={"#" + id} style={{ marginLeft: "5px" }}>
          <AiOutlineLink />
        </Link>
      </h2>
      <ShowCodeBlock
        code={JSON.stringify(data.data, null, "\t")}
        language="json"
        trySample={false}
      />
    </div>
  );
}
function RenderJSON({
  data1,
  data2,
}: {
  data1: JSONExamples;
  data2?: JSONExamples;
}) {
  return (
    <div style={{ marginTop: "20px" }} className="row">
      <RenderJSONExamples data={data1} />
      {data2 && <RenderJSONExamples data={data2} />}
    </div>
  );
}

export function SampleJSON() {
  const JSONExampleArray = [
    UserJSON,
    ProductJSON,
    monthsJSON,
    employeeJSON,
    employersJSON,
  ];

  return (
    <>
      <OfflineMetaTags
        tagData={{
          link: SCREENS.JSON_EXAMPLES,
          metaTitle: `JSON Examples: Explore Minified and Formatted JSON Samples.`,
          metaDescription: `Discover the power of JSON with our extensive collection of JSON examples. You can go through a variety of sample JSON, including Minified, and Formatted JSON.`,
        }}
      />
      ;
      <div style={{ minHeight: "100vh" }}>
        <h1 id="already-formatted-json" className="heading">
          Explore Sample JSON Data: Discover Formatted, Interactive, and Useful
          JSON Examples
        </h1>
        <p className={styles.content}>
          Welcome to our Sample JSON (Javascript Object Notation) data page,
          where you can explore a wide variety of sample JSON to enhance your
          understanding and improve your programming skills. We offer a range of
          valuable resources, including Formatted JSON, and Interactive JSON to
          cater to your specific needs
        </p>
        <div className="row">
          <RenderSampleData jsonData={FormattedJSON} heading="Formatted JSON" />
          <RenderSampleData jsonData={MinifiedJSON} heading="Minified JSON" />
          <RenderSampleData jsonData={InvalidJSON} heading="Invalid JSON" />
        </div>

        <div style={{ marginTop: "50px", fontSize: "19px" }}>
          <RelevantTools
            toolLink={SCREENS.JSON_TO_STRING}
            showOtherToolsLink={false}
          />
        </div>

        <h2 id="#json-examples" className="heading">
          JSON Examples: Users, Products, Days, Weeks, Months etc
          <Link href={"#json-examples"} style={{ marginLeft: "5px" }}>
            <AiOutlineLink />
          </Link>
        </h2>
        <p className={styles.content}>
          Are you looking for JSON examples? Users, Products, Days, Weeks, and
          Months are among the many items in our collection. These examples will
          help you grasp the structure of JSON for various data kinds. They are
          user-friendly and precise, have been validated, and may be used as a
          reference. Explore our JSON data samples.
        </p>

        <div>
          <ul>
            {JSONExampleArray.map((data) => (
              <li key={data?.heading} style={{ fontSize: "17px" }}>
                <Link
                  className={styles.link}
                  href={`#${headingToID(data.heading)}`}
                  scroll={false}
                >
                  {data?.heading}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: "80px" }}>
          <RenderJSON data1={UserJSON} data2={ProductJSON} />
          <RenderJSON data1={DaysJSON} data2={monthsJSON} />
          <RenderJSON data1={employeeJSON} data2={employersJSON} />
          <RenderJSON data1={blogPostCommentJSON} />
        </div>
      </div>
    </>
  );
}
