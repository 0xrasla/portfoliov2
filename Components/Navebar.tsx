import {
  HStack,
  Button,
  Box,
  Text,
  useColorModeValue,
  color,
} from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";

const NaveBar: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  let darkIcon =
    "https://img.icons8.com/ios-glyphs/30/000000/partly-cloudy-day--v1.png";
  let lightIcon =
    "https://img.icons8.com/ios-glyphs/30/ffffff/partly-cloudy-night--v1.png";

  const router = useRouter();

  return (
    <Box
      width={"100vw"}
      as={"nav"}
      bg={useColorModeValue("secondary", "text")}
      shadow={"md"}
      top={"0"}
      position={"sticky"}
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <HStack
        fontFamily={"heading"}
        gap={"20px"}
        justifyContent={"flex-end"}
        fontSize={"md"}
        width={"40%"}
        padding={"3"}
        margin={"auto"}
        alignItems={"center"}
      >
        <Text
          as={"h3"}
          flex={"1"}
          textTransform={"uppercase"}
          _hover={{
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        >
          Rasso
        </Text>

        <Button
          shadow={"base"}
          variant={"link"}
          onClick={() => toggleColorMode()}
          _focus={{
            bg: useColorModeValue("none", "none"),
            outline: "none",
          }}
        >
          <img src={colorMode == "dark" ? darkIcon : lightIcon} />
        </Button>
      </HStack>
    </Box>
  );
};

export default NaveBar;
