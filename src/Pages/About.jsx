import React from "react";
import { Box, Text, Image, Divider, Flex, Heading } from "@chakra-ui/react";
import about from "../images/about.png";
import Typewriter from "typewriter-effect";
import ResumeBtn from "../Components/ResumeBtn/ResumeBtn";
const About = () => {
  return (
    <Box id="about" ml={{ base: 0, md: 60 }} p={{ base: "80px 20px", md: 8 }}>
      <Heading fontWeight="bold" textAlign="center">
        About me
      </Heading>
      <Divider
        borderColor="blue.500"
        w="180px"
        borderWidth="2.5px"
        m="20px auto"
      />

      <Flex direction={{ base: "column", lg: "row" }}>
        <Box flex={{ base: 1, lg: "50%" }} p={{ base: "0px", lg: "0 40px" }}>
          <Flex justify={{ base: "center", lg: "flex-start" }} h="100%">
            <Image objectFit="contain" src={about} alt="" w="100%" h="auto" />
          </Flex>
        </Box>

        <Box flex={{ base: 1, lg: "50%" }} pl={{ base: 0, lg: 4 }}>
          <Box>
            <Box fontWeight="bold" fontSize="2xl">
              I'm Deepak and I'm a{" "}
              <Text as="span" color="blue.500" fontSize="2xl">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Web Developer",
                      "Passionate Programmer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Text>
            </Box>

            <Text my={4}>
              Aspiring Full Stack Web Developer, a passionate coder, and capable
              of writing efficient code using MERN Stack. Ambitious to work and
              collaborate with other dedicated and enterprising developers.
              Eager to take up a responsible role within an exciting and
              inspiring organization, and deliver products that offer a great
              user experience.
            </Text>
          </Box>
          <Box>
            <ResumeBtn />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
