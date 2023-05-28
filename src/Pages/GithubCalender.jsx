// import { Box, Divider, Flex, Grid, Heading, Img } from "@chakra-ui/react";
// import React from "react";
// import GitHubCalendar from "react-github-calendar";

// function Githubcalender() {
//   return (
//     <Box
//       ml={{ base: 0, md: 60 }}
//       borderLeft="solid 2px #357EC7"
//       id="githubcalender"
//       p={{ base: "80px 20px", md: 8 }}
//     >
//       <Heading fontWeight="bold" textAlign="center">
//         Git Calender
//       </Heading>
//       <Divider
//         borderColor="blue.500"
//         w="180px"
//         borderWidth="2.5px"
//         m="20px auto"
//       />

//       <Grid w={"80%"} m="auto" justifyContent={"center"}>
//         <Img
//           m="20px auto"
//           pb="20px"
//           pt="20px"
//           className="git"
//           src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=thedpmane&theme=2077&title_color=357ec7"
//         />

//         <GitHubCalendar
//           username="thedpmane"
//           blockSize={20}
//           blockMargin={5}
//           color={"#357EC7"}
//         />
//         <Flex justifyContent={"space-evenly"} gap="10px" border={"solid"}>
//           <Img
//             m="20px auto"
//             className="git"
//             src="https://github-readme-stats.vercel.app/api?username=thedpmane&show_icons=true&bg_color=00000000&icon_color=357ec7&text_color=357ec7&title_color=357ec7&border_color=357ec7"
//           />

//           <Img
//             m="20px auto"
//             className="git"
//             src="https://github-readme-streak-stats.herokuapp.com/?user=thedpmane&show_icons=true&theme=algolia"
//           />
//         </Flex>
//         <Img
//           m="auto"
//           pt="20px"
//           className="git"
//           src="https://github-profile-trophy.vercel.app/?username=thedpmane&show_icons=true&theme=discord&no-bg=true"
//         />
//         <Img
//           m="20px  auto"
//           className="git"
//           src="https://github-readme-stats.vercel.app/api/top-langs/?username=thedpmane&layout=compact&show_icons=true&bg_color=000000&icon_color=357ec7&text_color=ffffff&title_color=357ec7&border_color=357ec7"
//         />
//       </Grid>
//     </Box>
//   );
// }

// export default Githubcalender;
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Img,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function GitHubCalender() {
  return (
    <Box id="githubcalender" ml={{ base: 0, md: 60 }} p={"40px"}>
      <Heading fontWeight="bold" textAlign="center">
        Git Calendar
      </Heading>
      <Divider
        borderColor="blue.500"
        w="180px"
        borderWidth="2.5px"
        m="20px auto"
      />

      <Grid
        templateColumns={"repeat(1, 1fr)"}
        gap={{ base: "20px", md: "40px" }}
        justifyContent="center"
      >
        <Box textAlign="center">
          <Box>
            <GitHubCalendar
              username="thedpmane"
              blockSize={20}
              blockMargin={5}
              color={"#357EC7"}
              hight="500px"
              fontSize={14}
            />
          </Box>
        </Box>
        <Flex direction={["column", "column", "column", "row"]} gap="20px">
          <Box w={["full", "full", "full", "50%"]}>
            <Image
              m="20px auto"
              pb="20px"
              pt="20px"
              className="git"
              src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=thedpmane&theme=2077&title_color=357ec7"
            />
          </Box>
          <Box w={["full", "full", "full", "50%"]}>
            <Img
              m="auto"
              pt="20px"
              className="git"
              src="https://github-profile-trophy.vercel.app/?username=thedpmane&show_icons=true&theme=discord&no-bg=true"
            />
          </Box>
        </Flex>
        <Flex
          direction={["column", "column", "column", "row"]}
          gap="10px"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box w={["full", "full", "full", "50%"]}>
            <Img
              m="auto"
              p="20px"
              objectFit={"contain"}
              className="git"
              src="https://github-readme-stats.vercel.app/api?username=thedpmane&show_icons=true&bg_color=00000000&icon_color=357ec7&text_color=357ec7&title_color=357ec7&border_color=357ec7"
            />
          </Box>
          <Box w={["full", "full", "full", "50%"]}>
            <Img
              m="auto"
              p="20px"
              objectFit={"contain"}
              className="git"
              src="https://github-readme-streak-stats.herokuapp.com/?user=thedpmane&show_icons=true&theme=algolia"
            />
          </Box>
        </Flex>
      </Grid>

      <Box textAlign="center">
        <Img
          m="20px auto"
          className="git"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=thedpmane&layout=compact&show_icons=true&bg_color=000000&icon_color=357ec7&text_color=ffffff&title_color=357ec7&border_color=357ec7"
        />
      </Box>
    </Box>
  );
}

export { GitHubCalender };
