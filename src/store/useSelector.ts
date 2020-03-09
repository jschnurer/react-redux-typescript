import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState } from "./index";

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useSelector;