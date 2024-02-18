import H1TagStyles from "./H1Tag.module.css";

export function H1Tag({ heading }: { heading: string }) {
  return <h1 className={H1TagStyles.heading}>{heading}</h1>;
}
