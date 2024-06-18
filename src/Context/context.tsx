import { createContext } from "react";

import type { FormValues, Actions } from "@/definitions";

export const FormValuesContext = createContext<FormValues | null>(null);

export const FormValuesDispatchContext =
  createContext<React.Dispatch<Actions> | null>(null);
