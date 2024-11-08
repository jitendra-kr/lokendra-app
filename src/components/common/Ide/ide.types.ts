import { Theme } from "@monaco-editor/react";

export type OutputIdeProps = {
  value?: string;
  theme?: Theme;
  language?: string;
};

export type EditorCallBackOptions = {
  monoType?: boolean;
};

export type IdeProps = {
  language?: string;
  cb?: (value: string | undefined, options?: EditorCallBackOptions) => void;
  error?: (value: string | undefined) => void;
  options?: {
    monotype?: boolean;
    format?: boolean;
    repair?: boolean;
  };
};
