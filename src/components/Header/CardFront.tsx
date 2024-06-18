import { Box, Image, AspectRatio, Icon, Text, HStack } from "@chakra-ui/react";
import CardFrontImage from "@images/bg-card-front.png";
import CardLogo from "@images/card-logo.svg?react";

import { useFormValues } from "@/Hooks/hooks";

const defaults = {
  holderName: "Jane Appleseed",
  cardNumber: "0000 0000 0000 0000",
  expiryDate: {
    month: "00",
    year: "00",
  },
};

export default function CardFront() {
  const {
    holderName: formHolderName,
    cardNumber: formCardNumber,
    expiryDate: formExpiryDate,
  } = useFormValues();
  const holderName =
    formHolderName === "" ? defaults.holderName : formHolderName;
  const cardNumber =
    formCardNumber === "" ? defaults.cardNumber : formCardNumber;
  const month =
    formExpiryDate.month === ""
      ? defaults.expiryDate.month
      : formExpiryDate.month;
  const year =
    formExpiryDate.year === "" ? defaults.expiryDate.year : formExpiryDate.year;
  return (
    <AspectRatio
      pos="absolute"
      top={{ base: "123px", sm: "120px", lg: "20vh" }}
      left={{ base: "0", sm: "4", lg: "6", xl: "20%", xxl: "30%" }}
      w={{ base: "290px", md: "447px" }}
      boxShadow="cardShadow"
      borderRadius="lg"
      ratio={447 / 245}
    >
      <Box pos="relative">
        <Image
          src={CardFrontImage}
          alt="The Front of the Card"
          objectFit="cover"
        />
        <Icon
          as={CardLogo}
          top={{ base: 4, md: 6 }}
          left={{ base: 6, md: 8 }}
          w={{ base: "63px", md: "84px" }}
          h={{ base: "35.25px", md: "47px" }}
          pos="absolute"
        />
        <HStack
          pos="absolute"
          top={{ base: "55%", md: "53%" }}
          left={{ base: 6, md: 8 }}
          color="white"
          letterSpacing="widest"
          fontSize={{ base: "lg", md: "3xl" }}
        >
          {cardNumber.split(" ").map((slice, i) => (
            <Text key={i}>{slice}</Text>
          ))}
        </HStack>
        <Text
          pos="absolute"
          fontSize={{ base: "xs", md: "sm" }}
          letterSpacing="widest"
          color="violet.light"
          left={{ base: 6, md: 8 }}
          bottom={{ base: "4", md: "6" }}
        >
          {holderName}
        </Text>
        <Text
          pos="absolute"
          fontSize={{ base: "xs", md: "sm" }}
          letterSpacing="widest"
          color="violet.light"
          right={{ base: 6, md: 8 }}
          bottom={{ base: "4", md: "6" }}
        >
          {month}/{year}
        </Text>
      </Box>
    </AspectRatio>
  );
}
