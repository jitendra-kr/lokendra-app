let nf = new Intl.NumberFormat("en-IN");

export default function addComma(value: number) {
  return nf.format(value);
}
