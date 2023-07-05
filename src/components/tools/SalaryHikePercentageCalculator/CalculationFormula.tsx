import { Image } from "antd";
import styles from "./CalculationFormula.module.css";

export function CalculationFormula({
  alt,
  src,
  heading,
}: {
  alt: string;
  src: string;
  heading: string;
}) {
  return (
    <div>
      <h2 className={styles.heading}>{heading}</h2>
      <Image alt={alt} src={src}></Image>
    </div>
  );
}
