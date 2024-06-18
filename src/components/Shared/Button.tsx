import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface MyButtonProps {
  text: string;
}

export default function Button({
  text,
  ...props
}: MyButtonProps & ButtonProps) {
  return (
    <ChakraButton
      bg="violet.black"
      color="white"
      w="full"
      fontWeight="500"
      py="7"
      fontSize="lg"
      borderRadius="lg"
      _hover={{}}
      _focusVisible={{}}
      _active={{}}
      {...props}
    >
      {text}
    </ChakraButton>
  );
}
