import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { textToID } from "../../../../utils";
import h2TagStyles from "./H2Tag.module.css";

export function H2Tag({ heading }: { heading: string }) {
  return (
    <h2 className={h2TagStyles.heading}>
      {heading}
      <Link href={textToID(heading)} style={{ marginLeft: "5px" }}>
        <AiOutlineLink />
      </Link>
    </h2>
  );
}
