import type { NextPage } from "next";
import { Container, Box, Text, Tooltip } from "@chakra-ui/react";
import { NaveBar } from "../Components";
import Head from "next/head";
import { posts } from "../data/projects";
import { useColorModeValue } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const Posts: NextPage = () => {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div>
      <Head>
        <title>Thinesh Rasla - Posts Page</title>
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
          maxW="3xl"
          as={"main"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          overflow={"hidden"}
          justifyContent={"flex-start"}
        >
          <Box
            maxW={"container.lg"}
            textAlign={"start"}
            fontSize={"xl"}
            color={useColorModeValue("text", "secondary")}
            fontWeight={"medium"}
            fontFamily={"body"}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"30px"}
          >
            <Text
              as={"h2"}
              textAlign={"start"}
              textTransform={"uppercase"}
              fontFamily={"heading"}
              marginTop={"20px"}
              fontSize={"2xl"}
              textDecorationLine={"underline"}
              textUnderlineOffset={"3px"}
              alignSelf={"flex-start"}
              marginLeft={"80px"}
            >
              Popular Posts
            </Text>
            {posts.map((project, index) => (
              <Tooltip
                key={index}
                hasArrow={true}
                placement={index % 2 === 0 ? "right" : "left"}
                label={"Click to visit code repository"}
              >
                <Box
                  key={index}
                  as={"div"}
                  bg={useColorModeValue("text", "secondary")}
                  color={useColorModeValue("contrast", "text")}
                  padding={"4"}
                  borderRadius={"10px"}
                  textAlign={index % 2 === 0 ? "left" : "right"}
                  minW={"90%"}
                  maxW={"90%"}
                  minH={"100px"}
                  onClick={() => {
                    window.open(project.url, "_blank");
                  }}
                  _hover={{
                    transform: "scale(1.02)",
                    transition: "all 0.2s ease-in-out",
                    cursor: "pointer",
                  }}
                  boxShadow={"3px 3px 10px black"}
                >
                  <Image src={project.image} width={300} height={250} />
                  <Text
                    as={"h3"}
                    fontFamily={"fancy"}
                    textDecorationLine={"underline"}
                    textUnderlineOffset={"3px"}
                  >
                    {project.name}
                  </Text>
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Container>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Posts;
