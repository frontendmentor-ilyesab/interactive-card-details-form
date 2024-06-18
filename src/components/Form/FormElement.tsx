import { FormControl } from "@chakra-ui/react";
import FormLabel from "@components/Form/FormLabel";
import FormInput from "@components/Form/FormInput";
import FormError from "@components/Form/FormError";
import { useField } from "formik";

import { useFormValuesDispatch } from "@/Hooks/hooks";
import React from "react";

type FormElementProps = {
  label: string;
  placeholder: string;
  name: string;
  maxLength?: number;
  onBeforeInput?: React.CompositionEventHandler<HTMLInputElement>;
};

export default function FormElement({
  label,
  name,
  placeholder,
  maxLength,
  onBeforeInput,
}: FormElementProps) {
  const [field, meta] = useField(name);
  const formValuesDispatch = useFormValuesDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    formValuesDispatch({
      type: "change",
      fieldName: e.target.name,
      fieldValue: e.target.value,
    });
    field.onChange(e);
  }
  return (
    <FormControl
      isInvalid={meta.touched && meta.error !== undefined && meta.error !== ""}
    >
      <FormLabel label={label} />
      <FormInput
        maxLength={maxLength}
        onInput={onBeforeInput}
        placeholder={placeholder}
        {...field}
        onChange={handleChange}
      />
      <FormError error={meta.error ?? ""} />
    </FormControl>
  );
}
