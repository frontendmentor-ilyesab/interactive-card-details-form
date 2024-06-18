import { FormControl, SimpleGrid } from "@chakra-ui/react";

import { Field, FieldProps, useFormikContext } from "formik";

import FormLabel from "@components/Form/FormLabel";

import FormInput from "@components/Form/FormInput";

import FormError from "@components/Form/FormError";

import { useFormValuesDispatch } from "@/Hooks/hooks";

import type { FormValues } from "@/definitions";
import React from "react";

interface InputProps {
  placeholder: string;
  name: string;
  maxLength?: number;
}

interface FormElementGroupProps {
  label: string;
  inputs: Array<InputProps>;
  sharedName: keyof FormValues;
}

export default function FormElementGroup({
  label,
  inputs,
  sharedName,
}: FormElementGroupProps) {
  let error: string | undefined = undefined;
  let allInputsTouched: boolean = false;
  const { errors, touched } = useFormikContext<FormValues>();
  const formValuesDispatch = useFormValuesDispatch();
  const errorObject = errors[sharedName];
  const touchedObject = touched[sharedName];
  if (touchedObject) {
    const touchedValues = Object.values(touchedObject);
    allInputsTouched =
      touchedValues.every(Boolean) && touchedValues.length === inputs.length;
  }
  if (errorObject) {
    error = Object.values(errorObject).find((err) => err !== "");
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: React.ChangeEventHandler<HTMLInputElement>
  ) {
    formValuesDispatch({
      type: "change_nested",
      nestedField: sharedName,
      fieldName: e.target.name.split(".")[1],
      fieldValue: e.target.value,
    });
    onChange(e);
  }

  return (
    <FormControl as="div" isInvalid={allInputsTouched && error !== undefined}>
      <FormLabel htmlFor="" label={label} as="div" />
      <SimpleGrid columns={inputs.length} spacing="2">
        {inputs.map((input) => {
          return (
            <Field key={input.name} name={input.name}>
              {({ field, meta }: FieldProps) => (
                <FormInput
                  id=""
                  placeholder={input.placeholder}
                  {...field}
                  onChange={(e) => handleChange(e, field.onChange)}
                  maxLength={input.maxLength}
                  isInvalid={
                    meta.touched &&
                    meta.error !== undefined &&
                    meta.error !== ""
                  }
                />
              )}
            </Field>
          );
        })}
      </SimpleGrid>
      <FormError error={error ?? ""} />
    </FormControl>
  );
}
