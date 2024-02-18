import { RelevantTools } from "@ft/components/common/RelevantTools/RelevantTools";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SCREENS } from "../../../../../common/enums";
import RenderSampleData from "./RenderSampleData";
import styles from "./SampleJSON.module.css";
import { headingToID } from "./sampleJSON.helper";
import {
  DaysJSON,
  FormattedJSON,
  InvalidJSON,
  MinifiedJSON,
  ProductJSON,
  UserJSON,
  blogPostCommentJSON,
  employeeJSON,
  employersJSON,
  monthsJSON,
} from "./sampleJSONData";

const RenderJSON = dynamic(() => import("./RenderJSON"));

export default function SampleJSON() {
  const JSONExampleArray = [
    UserJSON,
    ProductJSON,
    monthsJSON,
    employeeJSON,
    employersJSON,
  ];

  return (
    <>
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
          <Link
            href={"#json-examples"}
            style={{ marginLeft: "5px", color: "black" }}
          >
            JSON Examples: Users, Products, Days, Weeks, Months etc
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
                  // scroll={false}
                >
                  {data?.heading}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: "80px" }}>
          <RenderJSON data1={DaysJSON} data2={monthsJSON} />
          <RenderJSON data1={UserJSON} />
          <RenderJSON data1={ProductJSON} />
          <RenderJSON data1={employeeJSON} />
          <RenderJSON data1={employersJSON} />
          <RenderJSON data1={blogPostCommentJSON} />
        </div>
      </div>
    </>
  );
}
