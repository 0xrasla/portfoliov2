import { NextPage } from "next";
import { Container, Text, Box, useColorMode, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const AboutSection: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();

  return (
    <Container>
      <Box as={"div"} marginTop={"xl"}>
        <Text
          as={"h2"}
          fontFamily={"heading"}
          fontSize={"2xl"}
          textDecoration={"underline"}
          textDecorationThickness={"4px"}
          textUnderlineOffset={"5px"}
          marginBottom={"6px"}
        >
          About
        </Text>
        <Box as={"div"}>
          <Text fontFamily={"body"} fontSize={"md"} textAlign={"justify"}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rasla, is a Full-Stack
            Developer, Enterpreneur and Freelancer from India with lot of
            passion in Learning and Making new Stuffs. He love to Code and Do it
            Every day. When he is not online, he take his mobile and walk out to
            take some pictures, also chat/talk with his future wife.He Also
            Running a Youtube Channel called CodingWithRasla.He Secretly Working
            in His Starup Company For Sometime🤫
          </Text>
        </Box>
      </Box>
      <Box as={"div"} marginTop={"2"}>
        <Text
          as={"h2"}
          fontFamily={"heading"}
          fontSize={"2xl"}
          textDecoration={"underline"}
          textDecorationThickness={"4px"}
          textUnderlineOffset={"5px"}
          marginBottom={"6px"}
        >
          Bio
        </Text>
        <Box fontFamily={"body"} fontSize={"md"} textAlign={"justify"}>
          <Box as={"span"} fontFamily={"fancy"} display={"flex"}>
            <Text as={"h3"}>1999 -</Text>
            <Text as={"h3"} fontFamily={"body"}>
              &nbsp;&nbsp;I was born in India
            </Text>
          </Box>
          <Box as={"span"} fontFamily={"fancy"} display={"flex"}>
            <Text as={"h3"}>2021 -</Text>
            <Text as={"h3"} fontFamily={"body"}>
              &nbsp;&nbsp;Completing Bachelor&apos;s Degree in Computer Science
            </Text>
          </Box>
          <Box as={"span"} fontFamily={"fancy"} display={"flex"}>
            <Text as={"h3"}>2022 -</Text>
            <Text as={"h3"} fontFamily={"body"}>
              &nbsp;&nbsp;Working in 3 Startup companies
            </Text>
          </Box>
          <Box as={"span"} fontFamily={"fancy"} display={"flex"}>
            <Text as={"h3"}>Present -</Text>
            <Text as={"h3"} fontFamily={"body"}>
              &nbsp;&nbsp;Building My Empire
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Intrests */}
      <Box as={"div"} marginTop={"2"}>
        <Text
          as={"h2"}
          fontFamily={"heading"}
          fontSize={"2xl"}
          textDecoration={"underline"}
          textDecorationThickness={"4px"}
          textUnderlineOffset={"5px"}
          marginBottom={"6px"}
        >
          I 💖
        </Text>
        <Box
          as={"div"}
          fontFamily={"body"}
          fontSize={"md"}
          textAlign={"justify"}
        >
          <Box as={"span"} display={"flex"}>
            Love and Care, Eat, Sleep, Code, Travel, Read, Watch
            Movies,Photography,
          </Box>
        </Box>
      </Box>

      {/* Projects */}

      <Box as={"div"} marginTop={"2"} textAlign={"center"}>
        <Button colorScheme={"green"} onClick={() => router.push("/portfolio")}>
          My Portfolio
        </Button>
      </Box>

      {/* Links */}

      <Box as={"div"} marginTop={"2"}>
        <Text
          as={"h2"}
          fontFamily={"heading"}
          fontSize={"2xl"}
          textDecoration={"underline"}
          textDecorationThickness={"4px"}
          textUnderlineOffset={"5px"}
          marginBottom={"6px"}
        >
          Online
        </Text>
        <Box
          fontFamily={"body"}
          fontSize={"md"}
          textAlign={"justify"}
          display={"flex"}
          gap={"10px"}
          marginBottom={"20px"}
        >
          <Image
            src={`https://img.icons8.com/material-outlined/24/${
              colorMode == "dark" ? "000000" : "ffffff"
            }/github.png`}
            alt={""}
            width={"24px"}
            height={"24px"}
          />
          <Text>
            <Link href={"https://github.com/Rasla-Dev"} target={"_blank"}>
              Github
            </Link>
          </Text>
        </Box>
        <Box
          fontFamily={"body"}
          fontSize={"md"}
          textAlign={"justify"}
          display={"flex"}
          gap={"10px"}
          marginBottom={"20px"}
        >
          <Image
            src={`https://img.icons8.com/ios/24/${
              colorMode == "dark" ? "000000" : "ffffff"
            }/linkedin-circled--v1.png`}
            alt={""}
            width={"24px"}
            height={"24px"}
          />
          <Text>
            <Link
              href={"https://www.linkedin.com/in/thinesh-rasla-779ba2189/"}
              target={"_blank"}
            >
              Linkedin
            </Link>
          </Text>
        </Box>
        <Box
          fontFamily={"body"}
          fontSize={"md"}
          textAlign={"justify"}
          display={"flex"}
          gap={"10px"}
          marginBottom={"20px"}
        >
          <Image
            src={`https://img.icons8.com/material-outlined/24/${
              colorMode == "dark" ? "000000" : "ffffff"
            }/instagram-new--v1.png`}
            alt={""}
            width={"24px"}
            height={"24px"}
          />
          <Text>
            <Link
              href={"https://www.instagram.com/rassouniqz/"}
              target={"_blank"}
            >
              Instagram
            </Link>
          </Text>
        </Box>
      </Box>

      {/* Projects */}
      <Box
        as={"div"}
        marginTop={"2"}
        textAlign={"center"}
        onClick={() => {
          router.push("/posts");
        }}
      >
        <Button colorScheme={"green"}>{"Popular Posts"}</Button>
      </Box>
    </Container>
  );
};

export default AboutSection;
