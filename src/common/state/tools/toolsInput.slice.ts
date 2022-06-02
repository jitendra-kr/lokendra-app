import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InputState {
  value: string
}

const initialState: InputState = {
  value: "",
}

interface IValue {
    payload: InputState
}

export const counterSlice = createSlice({
  name: 'updateToolsInput',
  initialState,
  reducers: {
    updateToolsInput: (state: InputState, value: IValue) => {
      state.value = value.payload.value
    },
    reset: () => initialState,
  },
})


export const { updateToolsInput, reset } = counterSlice.actions

export default counterSlice.reducer