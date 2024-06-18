import { useContext } from "react";

import {
  FormValuesContext,
  FormValuesDispatchContext,
} from "@/Context/context";

export function useFormValues() {
  const formValues = useContext(FormValuesContext);
  if (!formValues) {
    throw Error("Make Sure to use this hook within a provider");
  }
  return formValues;
}

export function useFormValuesDispatch() {
  const formValuesDispatch = useContext(FormValuesDispatchContext);
  if (!formValuesDispatch) {
    throw Error("Make Sure to use this hook within a provider");
  }
  return formValuesDispatch;
}
