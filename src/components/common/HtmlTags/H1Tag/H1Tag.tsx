import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { textToID } from "../../../../utils";
import H1TagStyles from "./H1Tag.module.css";

export function H1Tag({ heading }: { heading: string }) {
  return (
    <h1 className={H1TagStyles.heading}>
      {heading}
      <Link href={textToID(heading)} style={{ marginLeft: "5px" }}>
        <AiOutlineLink />
      </Link>
    </h1>
  );
}
