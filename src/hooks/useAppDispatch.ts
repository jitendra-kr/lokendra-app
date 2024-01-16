import { useDispatch } from "react-redux";
import { AppDispatch } from "../common/state";

export const useAppDispatch = () => useDispatch<AppDispatch>();