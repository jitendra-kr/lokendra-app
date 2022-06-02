import { getToolInput } from "../common/selectors"
import { useAppSelector } from "./useAppSelector"

export const useGetToolsInput = () => {
    const {value} = useAppSelector(getToolInput);
    return {value};
}