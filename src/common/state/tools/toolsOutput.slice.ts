import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface OutputState {
  value: unknown
}

const initialState: OutputState = {
  value: "",
}

interface IValue {
    payload: OutputState
}

export const counterSlice = createSlice({
  name: 'updateToolsOutput',
  initialState,
  reducers: {
    updateToolsOutput: (state: OutputState, value: IValue) => {
      state.value = value.payload.value
    },
    reset: () => initialState,
  },
})


export const { updateToolsOutput, reset } = counterSlice.actions

export default counterSlice.reducer