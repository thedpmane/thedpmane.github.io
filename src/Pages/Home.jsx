import { Box, Text, Image, useColorMode } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import image from "../images/deepak2.jpg";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      id="home"
      h={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      ml={{ base: 0, md: 60 }}
      p={{ base: "80px 20px", md: "80px" }}
      className="gradient-background"
      bgGradient={
        colorMode === "dark"
          ? "linear-gradient(45deg, #000000 0%, #000000 32%, #00a3ff 90%)"
          : "linear-gradient(45deg, #ffffff 0%, #ffffff 32%, #00a3ff 90%)"
      }
      bgBlendMode="multiply"
    >
      {/* Mobile UI */}
      <Box
        display={{ base: "grid", md: "none" }}
        gridTemplateColumns="1fr"
        textAlign="center"
        mt="60px"
      >
        <Box mb={4}>
          <Box
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            boxShadow="lg"
            width="250px"
            mx="auto"
          >
            <Image src={image} alt="" />
          </Box>
        </Box>
        <Box>
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            Hello, my name is
          </Text>
          <Text fontSize="6xl" fontWeight="bold" mb={4}>
            Deepak Mane
          </Text>
          <Text fontSize="3xl" color="blue.500">
            And I'm a{" "}
          </Text>
          <Text as="span" color="blue.500" fontSize="2xl">
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer", "Passionate Programmer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Box>
      </Box>

      {/* Desktop UI */}
      <Box
        gap="50px"
        display={{ base: "none", md: "grid" }}
        gridTemplateColumns="1fr 1fr"
      >
        <Box>
          <Text fontSize="3xl" fontWeight="bold" mb={2}>
            Hello, my name is
          </Text>
          <Text fontSize="6xl" fontWeight="bold" mb={4}>
            Deepak Mane
          </Text>
          <Text fontSize="3xl" color="blue.500">
            And I'm a{" "}
            <span className="typing">
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
            </span>
          </Text>
        </Box>
        <Box ml={[0, 0, 4]} textAlign="center">
          <Box
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            boxShadow="lg"
            width="250px"
          >
            <Image src={image} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
