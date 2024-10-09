import { getToolInput } from "../common/selectors/toolsSelectors";
import { useAppSelector } from "./useAppSelector";

export const useGetToolsInput = () => {
  const { value } = useAppSelector(getToolInput);
  return { value };
};
