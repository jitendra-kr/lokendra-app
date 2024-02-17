import Link from "next/link";
import styles from "./SampleJSON.module.css";
import { SampleData } from "./sampleJSON.types";

export default function RenderSampleData({
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
