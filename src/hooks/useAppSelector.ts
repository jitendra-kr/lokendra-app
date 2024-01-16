import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../common/state";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;