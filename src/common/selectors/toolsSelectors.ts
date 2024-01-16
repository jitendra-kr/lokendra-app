import { createSelector } from "reselect"
import { RootState } from "../state"

export const getToolInput = createSelector(
    (state: RootState) => state,
    (state) => state.updateToolsInput
)

export const getToolOutput = createSelector(
    (state: RootState) => state,
    (state) => state.updateToolsOutput
)