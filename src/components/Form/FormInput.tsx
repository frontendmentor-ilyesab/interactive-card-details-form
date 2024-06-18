import { Input, InputProps } from "@chakra-ui/react";

export default function FormInput(props: InputProps) {
  return (
    <Input
      borderColor="violet.light"
      borderRadius="lg"
      color="violet.black"
      fontSize="lg"
      py="5"
      px="3.5"
      type="text"
      spellCheck="false"
      _placeholder={{ color: "violet.light" }}
      _hover={{ cursor: "pointer" }}
      _invalid={{
        borderColor: "red",
        boxShadow: "none",
      }}
      _focusVisible={{
        bgGradient:
          "linear-gradient(white, white), linear-gradient(to right, var(--chakra-colors-gradient-from), var(--chakra-colors-gradient-to))",
        bgClip: "padding-box, border-box",
        borderColor: "transparent",
        backgroundOrigin: "border-box",
        boxShadow: "none",
        cursor: "pointer",
        caretColor: "currentColor",
      }}
      {...props}
    />
  );
}
