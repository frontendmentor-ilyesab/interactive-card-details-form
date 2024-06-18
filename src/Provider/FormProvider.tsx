import { useReducer } from "react";

import {
  FormValuesContext,
  FormValuesDispatchContext,
} from "@/Context/context";

import type { FormValues, Actions } from "@/definitions";

const initialValues: FormValues = {
  holderName: "",
  cardNumber: "",
  expiryDate: {
    month: "",
    year: "",
  },
  cvc: "",
};

export function FormProvider({ children }: { children: React.ReactElement }) {
  const [formValues, dispatch] = useReducer(formValuesReducer, initialValues);

  return (
    <FormValuesContext.Provider value={formValues}>
      <FormValuesDispatchContext.Provider value={dispatch}>
        {children}
      </FormValuesDispatchContext.Provider>
    </FormValuesContext.Provider>
  );
}

function formValuesReducer(formValues: FormValues, action: Actions) {
  switch (action.type) {
    case "change": {
      return { ...formValues, [action.fieldName]: action.fieldValue };
    }
    case "change_nested": {
      const nestedObject = formValues[action.nestedField];
      if (typeof nestedObject === "object") {
        return {
          ...formValues,
          [action.nestedField]: {
            ...nestedObject,
            [action.fieldName]: action.fieldValue,
          },
        };
      }
      return formValues;
    }
    case "reset": {
      return initialValues;
    }
  }
}
