import { Box, Image, Show } from "@chakra-ui/react";
import CardBack from "@/components/Header/CardBack";
import CardFront from "@/components/Header/CardFront";
import MobileHeaderImage from "@images/bg-main-mobile.png";
import MobileDesktopImage from "@images/bg-main-desktop.png";

export default function Header() {
  return (
    <Box pos="relative" as="header">
      <Show breakpoint="(max-width: 991px)">
        <Image src={MobileHeaderImage} alt="" w="full" h="240px" />
      </Show>
      <Show breakpoint="(min-width: 992px)">
        <Image src={MobileDesktopImage} alt="" />
      </Show>
      <CardBack />
      <CardFront />
    </Box>
  );
}
