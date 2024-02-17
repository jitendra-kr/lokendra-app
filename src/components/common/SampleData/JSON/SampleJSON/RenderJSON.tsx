import { ShowCodeBlock } from "@ft/components/common/ShowCodeBlock";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { headingToID } from "./sampleJSON.helper";
import { JSONExamples } from "./sampleJSON.types";

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

export default function RenderJSON({
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
