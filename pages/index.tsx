import type { NextPage } from "next";
import Head from "next/head";
import { Container, Text, Box, useColorModeValue } from "@chakra-ui/react";
import { NaveBar, AboutSection } from "../Components/index";
import Image from "next/image";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div>
      <Head>
        <title>Thinesh Rasla - Homepage</title>
        <meta
          name="description"
          content="Fullstack Developer Rasla's Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NaveBar />
      </header>
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      >
        <Container
          maxW="2xl"
          as={"main"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          {/* <AnimeObj /> */}

          <Box
            as={"section"}
            bg={useColorModeValue("text", "secondary")}
            color={useColorModeValue("contrast", "text")}
            padding={"4"}
            borderRadius={"10px"}
            margin={"30px 0px"}
            textAlign={"center"}
            // marginTop={"40%"}
            width={"70%"}
            fontFamily={"heading"}
            fontSize={"xl"}
            fontWeight={"medium"}
          >
            <Text as={"h2"}>Hi, I am a Software Developer based in India</Text>
          </Box>

          <Box
            maxW={"container.lg"}
            textAlign={"start"}
            fontSize={"xl"}
            color={useColorModeValue("text", "secondary")}
            fontWeight={"medium"}
            fontFamily={"body"}
          >
            <Box
              as={"div"}
              display={"flex"}
              flexDirection={"row-reverse"}
              gap={"20px"}
              width={"70%"}
              margin={"auto"}
              textAlign={"start"}
              justifyContent={"space-evenly"}
            >
              <Box
                as={motion.div}
                animate={{
                  scale: [0.1, 1],
                  rotate: [0, 360],
                }}
              >
                <Image
                  src="https://avatars.githubusercontent.com/u/76244740?v=4"
                  alt="me"
                  width={100}
                  height={100}
                  objectFit="cover"
                  style={{ borderRadius: "50%" }}
                />
              </Box>
              <Box as={"div"} display={"flex"} flexDirection={"column"}>
                <Text
                  fontFamily={"fancy"}
                  fontSize={"2.5rem"}
                  fontWeight={"medium"}
                  as={"h1"}
                  textAlign={"start"}
                >
                  Thinesh Rasla
                </Text>
                <Text as={"h5"} fontSize={"sm"}>
                  (Full-Stack Developer / Enterpreneur / Freelancer)
                </Text>
              </Box>
            </Box>
            <AboutSection />
          </Box>
        </Container>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
