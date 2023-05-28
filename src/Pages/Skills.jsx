import {
  Box,
  Text,
  Divider,
  Flex,
  Heading,
  background,
} from "@chakra-ui/react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaNodeJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiCypress, SiTypescript } from "react-icons/si";
import { MdOutlineOfflineBolt } from "react-icons/md";
import React from "react";

const Skills = () => {
  const skillsData = [
    { icon: FaHtml5, text: "HTML" },
    { icon: FaCss3Alt, text: "CSS" },
    { icon: FaJsSquare, text: "JavaScript" },
    { icon: FaGithub, text: "Github" },
    { icon: FaNodeJs, text: "ExpressJs" },
    { icon: FaNodeJs, text: "NodeJs" },
    { icon: SiCypress, text: "Cypress" },
    { icon: FaDatabase, text: "MongoDb" },
    { icon: FaReact, text: "React" },
    { icon: FaReact, text: "Redux" },
    { icon: SiTypescript, text: "Typescript" },
    { icon: MdOutlineOfflineBolt, text: "Chakra UI" },
  ];
  return (
    <Box id="skills" ml={{ base: 0, md: 60 }} p={{ base: "80px 20px", md: 8 }}>
      <Box>
        <Heading fontWeight="bold" textAlign="center" mb={4}>
          Skills
        </Heading>
        <Divider
          borderColor="blue.500"
          w="180px"
          borderWidth="2.5px"
          m="20px auto"
        />

        <Flex
          display="grid"
          gridTemplateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          justifyContent="space-evenly"
          gap="4"
          fontSize={{ base: "xl", md: "xl" }}
          p={{ base: 2, md: 8 }}
        >
          {skillsData.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} text={skill.text} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const SkillItem = ({ icon, text }) => {
  return (
    <Flex
      borderRadius="5px"
      textAlign="center"
      justifyContent="center"
      p={4}
      gap={2}
      bg="blue.500"
      border="1px solid"
      borderColor={"blue.500"}
      _hover={{
        border: "1px solid",
        backgroundColor: "black",
        borderColor: "white",
        color: "blue.500",
      }}
    >
      {React.createElement(icon, { size: "40px" })}
      <Text>{text}</Text>
    </Flex>
  );
};
export default Skills;
