import { SimpleGrid, Icon, Heading, Text } from "@chakra-ui/react";
import SuccessIcon from "@images/icon-complete.svg?react";
import Button from "@components/Shared/Button";

import { useFormikContext } from "formik";

export default function ThankYou() {
  const { handleReset } = useFormikContext();
  return (
    <SimpleGrid
      px={{ base: "6", xl: "0" }}
      justifyItems="center"
      spacing={{ base: 5, xl: 6 }}
      pb={{ base: "20", xl: "0" }}
      alignSelf={{ base: "center" }}
      justifySelf={{ base: "center", xl: "unset" }}
      ms={{ xl: "30%", xxl: "38%" }}
      maxW="400px"
      w="full"
    >
      <Icon as={SuccessIcon} w="80px" h="80px" mb="5" />
      <Heading
        color="violet.black"
        fontWeight="500"
        textTransform="uppercase"
        letterSpacing="widest"
        lineHeight="none"
        fontSize="3xl"
      >
        Thank you!
      </Heading>
      <Text lineHeight="none" color="violet.dark">
        We've added your card details
      </Text>
      <Button text="Continue" mt="8" onClick={handleReset} />
    </SimpleGrid>
  );
}
