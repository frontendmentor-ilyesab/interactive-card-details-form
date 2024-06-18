import { FormErrorMessage } from "@chakra-ui/react";

export default function FormError({ error }: { error: string }) {
  return (
    <FormErrorMessage
      color="red"
      fontSize="xs"
      _groupFocusWithin={{ display: "none" }}
    >
      {error}
    </FormErrorMessage>
  );
}
