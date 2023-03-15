import { Box, Flex, Grid, Heading, Img } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function Githubcalender() {
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      borderLeft="solid 2px #357EC7"
      bg={"black"}
      color={"white"}
      display={"flex"}
    >
      <Box marginTop={-150} m="20px auto">
        <Heading
          textAlign={"center"}
          mt={"20px"}
          textTransform={"uppercase"}
          color={"#357EC7.600"}
          fontWeight={700}
          fontSize={"4xl"}
          rounded={"md"}
        >
          Git Statistics
        </Heading>
        <Grid w={"80%"} m="auto" justifyContent={"center"}>
          <Img
            m="20px auto"
            pb="20px"
            pt="20px"
            className="git"
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=thedpmane&theme=2077&title_color=357ec7"
          />

          <GitHubCalendar
            username="thedpmane"
            blockSize={20}
            blockMargin={5}
            color={"#357EC7"}
          />
          <Flex wrap="wrap" pt="10px" gap={"10px"}>
            <Img
              m="20px auto"
              className="git"
              src="https://github-readme-stats.vercel.app/api?username=thedpmane&show_icons=true&bg_color=00000000&icon_color=357ec7&text_color=ffffff&title_color=357ec7&border_color=357ec7"
            />
            <Img
              m="20px auto"
              className="git"
              src="https://github-readme-streak-stats.herokuapp.com/?user=thedpmane&show_icons=true&theme=algolia"
            />
          </Flex>
          <Img
            m="auto"
            pt="20px"
            className="git"
            src="https://github-profile-trophy.vercel.app/?username=thedpmane&show_icons=true&theme=discord&no-bg=true"
          />
          <Img
            m="20px  auto"
            className="git"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=thedpmane&layout=compact&show_icons=true&bg_color=000000&icon_color=357ec7&text_color=ffffff&title_color=357ec7&border_color=357ec7"
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Githubcalender;
