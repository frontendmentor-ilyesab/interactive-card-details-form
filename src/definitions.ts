interface FormValues {
    [index: string]: string | object;
    holderName: string;
    cardNumber: string;
    expiryDate: {
        month: string;
        year: string;
    }
    cvc: string;
}

type Actions = | {
    type: "change";
    fieldName: string;
    fieldValue: string;
  }
  | {
    type: "change_nested";
    nestedField: keyof FormValues;
    fieldName: string;
    fieldValue: string;
  }
  | {
    type: "reset"
  }
  

export type {FormValues, Actions};