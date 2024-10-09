import { ShowCodeBlock } from "@ft/components/common/ShowCodeBlock/ShowCodeBlock";
import { headingToID } from "./sampleJSON.helper";
import { JSONExamples } from "./sampleJSON.types";

function RenderJSONExamples({ data }: { data: JSONExamples }) {
  const id = headingToID(data.heading);
  return (
    <div className="col" id={id}>
      <h2
        className="heading"
        style={{ marginBottom: "20px", fontSize: "20px" }}
      >
        {data.heading}
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
