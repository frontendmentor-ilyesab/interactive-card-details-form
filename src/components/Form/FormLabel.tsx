import { FormLabel as ChakraFormLabel, FormLabelProps } from "@chakra-ui/react";

export default function FormLabel(props: FormLabelProps & { label: string }) {
  return (
    <ChakraFormLabel
      letterSpacing="widest"
      color="violet.black"
      textTransform="uppercase"
      fontSize={{ base: "xs", sm: "sm" }}
      mx="0"
      {...props}
      label={null}
    >
      {props.label}
    </ChakraFormLabel>
  );
}
