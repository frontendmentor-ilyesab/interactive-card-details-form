import { Box, Image, AspectRatio, Text } from "@chakra-ui/react";
import CardBackImage from "@images/bg-card-back.png";
import { useFormValues } from "@/Hooks/hooks";

export default function CardBack() {
  const { cvc: formCvc } = useFormValues();
  const cvc = formCvc === "" ? "000" : formCvc;
  return (
    <AspectRatio
      pos="absolute"
      top={{ base: "8", lg: "calc(20vh + 245px + 2.5rem)" }}
      left={{ lg: "6", xl: "unset" }}
      right={{
        base: "0",
        sm: "4",
        lg: "0",
        xl: "calc(447px / 4 * -1)",
        xxl: "calc(447px / 2 * -1)",
      }}
      w={{ base: "290px", md: "447px" }}
      boxShadow="cardShadow"
      borderRadius="lg"
      ratio={447 / 245}
    >
      <Box pos="relative">
        <Image src={CardBackImage} alt="Back of the Card" objectFit="cover" />
        <Text
          color="violet.light"
          fontSize={{ base: "xs", md: "sm" }}
          letterSpacing="widest"
          top={{ base: "70px", md: "111px" }}
          right={{ base: "10", md: "14" }}
          pos="absolute"
        >
          {cvc}
        </Text>
      </Box>
    </AspectRatio>
  );
}
