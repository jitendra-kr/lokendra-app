import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InputState {
  value?: string;
  diffLeftValue?: string;
  diffRightValue?: string;
  loadSampleData: boolean;
}

const initialState: InputState = {
  value: "",
  diffLeftValue: "",
  diffRightValue: "",
  loadSampleData: false,
};

interface IValue {
  payload: InputState;
}

export const counterSlice = createSlice({
  name: "updateToolsInput",
  initialState,
  reducers: {
    updateToolsInput: (
      state: InputState,
      { payload }: PayloadAction<string>,
    ) => {
      state.value = payload;
    },
    updateDiffLeftInput: (
      state: InputState,
      { payload }: PayloadAction<string>,
    ) => {
      state.diffLeftValue = payload;
    },
    updateDiffRightInput: (
      state: InputState,
      { payload }: PayloadAction<string>,
    ) => {
      state.diffRightValue = payload;
    },
    updateSampleData: (
      state: InputState,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.loadSampleData = payload;
    },

    resetInput: () => initialState,
  },
});

export const {
  updateToolsInput,
  updateDiffLeftInput,
  updateDiffRightInput,
  updateSampleData,
  resetInput,
} = counterSlice.actions;

export default counterSlice.reducer;
