import { CSSProperties } from "react";
import H1TagStyles from "./H1Tag.module.css";

export function H1Tag({
  heading,
  styles,
}: {
  heading: string;
  styles?: CSSProperties;
}) {
  return (
    <h1 className={H1TagStyles.heading} style={styles}>
      {heading}
    </h1>
  );
}
