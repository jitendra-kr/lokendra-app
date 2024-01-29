export type RandomStringFormat =
  | "Lowercase (a-z)"
  | "Uppercase (A-Z)"
  | "Mixed (a-zA-Z)"
  | "Numbers (0-9)"
  | "Lowercase a-z and numbers (0-9)"
  | "Uppercase A-Z and numbers (0-9)"
  | "All letters a-zA-Z and numbers (0-9)"
  | "Custom character set"
  | "Hex"
  | "Binary"
  | "Octal";

export type Format = {
  value: RandomStringFormat;
  label: RandomStringFormat;
};

export type InputValue = {
  stringLength?: number;
  howManyStrings: number;
  customAlphabets?: string;
  format: RandomStringFormat;
};

export type InternalRandomStringFormat = Omit<
  RandomStringFormat,
  "Custom character set" | "Hex" | "Binary" | "Octal"
>;
