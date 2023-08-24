import Link from "next/link";
import { SCREENS } from "../../../../../common/enums";
import { RelevantTools } from "../../../RelevantTools";
import {
  FormattedJSON,
  InvalidJSON,
  MinifiedJSON,
  SampleData,
} from "./sampleJSONData";

function RenderSampleData({
  jsonData,
  heading,
}: {
  jsonData: SampleData[];
  heading: string;
}) {
  // const [isModalOpen, setIsModalOpen] = useState<{
  //   status: boolean;
  //   data: string;
  //   url: string;
  // }>({ status: false, url: "", data: "" });

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
              <Link href={data.value} target="_blank">
                {data.key}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <Modal
        closable={false}
        width="90%"
        destroyOnClose={true}
        onOk={() => setIsModalOpen({ status: false, url: "", data: "" })}
        open={isModalOpen.status}
        cancelText={<></>}
        okText="Close"
      >
        <JsonViewer content={isModalOpen.data} error={""} editorError={""} />
      </Modal> */}
    </>
  );
}

export function SampleJSON() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 id="already-formatted-json" className="heading">
        Explore Sample JSON Data: Discover Formatted, Interactive, and Useful
        JSON Examples
      </h1>
      <p style={{ marginTop: "20px", fontSize: "19px" }}>
        Welcome to our Sample JSON Data page, where you can explore a wide
        variety of JSON examples to enhance your understanding and improve your
        programming skills. We offer a range of valuable resources, including
        Formatted JSON, Interactive JSON, and Useful JSON examples, to cater to
        your specific needs
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
    </div>
  );
}
