export type SampleData = {
  key: string;
  value: string;
};

export const FormattedJSON: SampleData[] = [
  {
    value: "../sample-data/json/64KB.json",
    key: "64KB.json",
  },
  {
    value: "../sample-data/json/128KB.json",
    key: "128KB.json",
  },
  {
    value: "../sample-data/json/256KB.json",
    key: "256KB.json",
  },
  {
    value: "../sample-data/json/512KB.json",
    key: "512KB.json",
  },
  {
    value: "../sample-data/json/1MB.json",
    key: "1MB.json",
  },
  {
    value: "../sample-data/json/5MB.json",
    key: "5MB.json",
  },
];
export const MinifiedJSON: SampleData[] = [
  {
    value: "../sample-data/json/64KB-min.json",
    key: "64KB.json",
  },
  {
    value: "../sample-data/json/128KB-min.json",
    key: "128KB.json",
  },
  {
    value: "../sample-data/json/256KB-min.json",
    key: "256KB.json",
  },
  {
    value: "../sample-data/json/512KB-min.json",
    key: "512KB.json",
  },
  {
    value: "../sample-data/json/1MB-min.json",
    key: "1MB.json",
  },
  {
    value: "../sample-data/json/5MB-min.json",
    key: "5MB.json",
  },
];

export const InvalidJSON: SampleData[] = [
  {
    value: "../sample-data/json/missing-colon.json",
    key: "missing-colon.json",
  },
];
