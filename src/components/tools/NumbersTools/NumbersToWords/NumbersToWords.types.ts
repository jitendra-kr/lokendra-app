export type InitialNumToWordOptions = {
  localeCode?: string;
  currency?: boolean;
};

export type ConvertNumberToWord = { value: string } & InitialNumToWordOptions;
