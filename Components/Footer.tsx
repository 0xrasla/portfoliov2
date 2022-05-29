import type { NextPage } from "next";
import { Container, Text } from "@chakra-ui/react";

const Footer: NextPage = () => {
  return (
    <Container
      maxW={"2xl"}
      as={"footer"}
      textAlign={"center"}
      height={"1"}
      fontSize={"sm"}
      margin={"auto"}
      fontFamily={"heading"}
      opacity={"0.5"}
      padding={"20px 0px"}
      letterSpacing={"1px"}
    >
      <Text>© 2022 Rasla. All Rights Reserved.</Text>
    </Container>
  );
};

export default Footer;
