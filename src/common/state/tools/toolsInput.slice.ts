import { createSlice } from "@reduxjs/toolkit";

export interface InputState {
  value: string;
}

const initialState: InputState = {
  value: "",
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
    resetInput: () => initialState,
  },
});

export const { updateToolsInput, resetInput } = counterSlice.actions;

export default counterSlice.reducer;
