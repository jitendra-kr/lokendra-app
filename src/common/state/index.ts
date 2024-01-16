import { configureStore } from '@reduxjs/toolkit'
import updateToolsInputReducer from "./tools/toolsInput.slice"
import updateToolsOutputReducer from "./tools/toolsOutput.slice"

export const store = configureStore({
  reducer: {
    updateToolsInput: updateToolsInputReducer,
    updateToolsOutput: updateToolsOutputReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch