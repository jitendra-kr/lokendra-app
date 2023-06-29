import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InputState {
  value?: string;
  diffLeftValue?: string;
  diffRightValue?: string;
}

const initialState: InputState = {
  value: "",
  diffLeftValue: "",
  diffRightValue: "",
};

interface IValue {
  payload: InputState;
}

export const counterSlice = createSlice({
  name: "updateToolsInput",
  initialState,
  reducers: {
    updateToolsInput: (state: InputState, value: IValue) => {
      state.value = value.payload.value;
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
    resetInput: () => initialState,
  },
});

export const {
  updateToolsInput,
  updateDiffLeftInput,
  updateDiffRightInput,
  resetInput,
} = counterSlice.actions;

export default counterSlice.reducer;
