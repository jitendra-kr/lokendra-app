import { CSSProperties } from "react";
import H1TagStyles from "./H1Tag.module.css";

export function H1Tag({
  heading,
  styles,
  id,
}: {
  heading: string;
  styles?: CSSProperties;
  id?: string;
}) {
  return (
    <h1 className={H1TagStyles.heading} id={id} style={styles}>
      {heading}
    </h1>
  );
}
