import h2TagStyles from "./H2Tag.module.css";

export function H2Tag({
  heading,
  link = true,
}: {
  heading: string;
  link?: boolean;
}) {
  return <h2 className={h2TagStyles.heading}>{heading}</h2>;
}
