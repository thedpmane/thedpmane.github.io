import React from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  Flex,
  Image,
  Link,
  Text,
  UnorderedList,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import AdvanceAutoParts from "../images/advanceautoparts.png";
import skinstoreimg from "../images/Skinstore.png";
import meanbuy from "../images/meanbuy.png";
import licious from "../images/Licious.png";
import image from "../images/lifesylestore.png";
import { SiRedux, SiChakraui, SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";

const projects = [
  {
    name: "AdvanceAutoParts",
    imageSrc: AdvanceAutoParts,
    websiteUrl: "https://shop.advanceautoparts.com/",
    description:
      "AdvanceAutoParts is your source for quality auto parts, advice and accessories. View car care tips, shop online for home delivery",
    bullets: [
      "Group of Five members, build the application in 5 days, where I have developed the Cart page,Checkout page of the website",
      "Built functionality till checkhout page such as adding and reomve item from cart increase and decrease quantity of the product which reflects to total price",
    ],
    techStack: [
      { name: "React", icon: FaReact },
      { name: "React Redux", icon: SiRedux },
      { name: "NodeJs", icon: FaNodeJs },
      { name: "ExpressJs", icon: FaNodeJs },
      { name: "MongoDb", icon: SiMongodb },
      { name: "Chakra UI", icon: SiChakraui },
    ],

    githubUrl: "https://github.com/darshancoder/Advance-auto-Parts-Clone",
    demoUrl: "https://advanceautoparts.vercel.app",
  },
  {
    name: "Lifestyle Stores",
    imageSrc: image,
    websiteUrl: "https://www.lifestylestores.com/in/en/",
    description:
      "LifestyleStores is one of the most trusted purveyors of unique, designer products in India. It provides you an exquisite range of Branded Clothes and Fashion related Products",
    bullets: [
      "Group of Five members, build the application in 4 days, where I was leading the team, have developed the Products page,Single product page and the All functionality till checkhout page of the website.",
      "Developed both frontend and backend setup, and manage workload of each member to built this fully resposive website.",
    ],

    techStack: [
      { name: "HTML", icon: AiFillHtml5 },
      { name: "JS", icon: FaNodeJs },
      { name: "CSS", icon: FaCss3Alt },
    ],
    githubUrl: "https://github.com/example/lifestyle-stores",
    demoUrl: "https://example.com/lifestyle-stores-demo",
  },
  {
    name: "Licious",
    imageSrc: licious,
    websiteUrl: "https://www.licious.in/",
    description:
      "Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep.",
    bullets: [
      "Group of Five members, build the application in 4 days, where I have developed the Products page,Single product page,Cart page,Login & SignUp page and the All functionality till checkhout page of the website.",
      "Built functionality till checkhout page such as adding and reomve item from cart increase and decrease quantity of the product which reflects to total price and Login and Signup",
    ],
    techStack: [
      { name: "React", icon: FaReact },
      { name: "React Redux", icon: SiRedux },
      { name: "Chakra UI", icon: SiChakraui },
    ],
    githubUrl: "https://github.com/Saif-sk5417/obtainable-expansion-7399",
    demoUrl: "https://clone-licious-com.vercel.app/",
  },
  {
    name: "SkinStore",
    imageSrc: skinstoreimg,
    websiteUrl: "https://www.skinstore.com/",
    description:
      "SkinStore is an authorized retailer to 100s of premium beauty brands across skin, makeup and hair including SkinCeuticals, Dermalogica etc website. Your one stop destination for beauty and self-care.",
    bullets: [
      "It is an Individual Project that Built in 5 days,where I worked on the almost each section such as reponsive as well as working it like original website.",
    ],
    techStack: [
      { name: "React", icon: FaReact },
      { name: "Context API", icon: FaReact },
      { name: "Chakra UI", icon: SiChakraui },
    ],
    githubUrl: "https://github.com/thedpmane/clone-skinstore",
    demoUrl: "https://clone-skinstore.vercel.app/",
  },
  {
    name: "MeanBuy",
    imageSrc: meanbuy,
    websiteUrl: "https://www.meanbuy.com/",
    description:
      "MeanBuy is Online Shopping Is Made Easier with Various Categories and Filters. Best Online Shopping for International Branded Products.",
    bullets: [
      "It is an Individual Project that Built in 5 days,where I worked on the almost each section and functionality like original website such as adding product to cart.",
    ],
    techStack: [
      { name: "HTML", icon: AiFillHtml5 },
      { name: "JS", icon: FaNodeJs },
      { name: "CSS", icon: FaCss3Alt },
    ],
    githubUrl: "https://github.com/your-username/meanbuy-clone",
    demoUrl: "https://your-username.github.io/meanbuy-clone/",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      ml={{ base: 0, md: 60 }}
      p={{ base: "80px 20px", md: 8 }}
    >
      <Heading fontWeight="bold" textAlign="center">
        Projects
      </Heading>
      <Divider
        borderColor="blue.500"
        w="180px"
        borderWidth="2.5px"
        m="20px auto"
      />
      {/* ldfljflkjflldfjljflkfdlflsflafjlkfjldfjlfkljfjlsfjlasjflafkj */}
      <Box>
        {projects.map((project) => (
          <Box
            borderBottom={"1px solid #3182ce"}
            p={"10px"}
            pb="70px"
            mb="20px"
            className="eachProjectDiv MailChimp"
            key={project.name}
          >
            <Heading
              className="ProjectName"
              size={"lg"}
              textAlign={"center"}
              p={5}
            >
              {project.name}
            </Heading>
            <Flex
              className="ProjectContainer"
              gap="3%"
              direction={["column", "column", "column", "column", "row"]}
            >
              <Box
                className="ProjectImage"
                w={["100%", "100%", "100%", "100%", "60%"]}
              >
                <Image
                  objectFit={"contain"}
                  w="100%"
                  src={project.imageSrc}
                  alt="notfound"
                />
              </Box>
              <Box
                className="projectDescription"
                w={["100%", "100%", "100%", "100%", "37%"]}
                fontSize="18px"
                letterSpacing={"normal"}
                textAlign={"left"}
                lineHeight={"25px"}
              >
                <Text>
                  Developed a lookalike of{" "}
                  <Link
                    href={project.websiteUrl}
                    style={{ color: "#FFF", textDecoration: "underline" }}
                    target="_blank"
                  >
                    {project.name}
                  </Link>
                </Text>
                <Text>{project.description}</Text>
                <br />
                <Text></Text>
                <UnorderedList className="projectDetailsBullets">
                  {project.bullets.map((bullet, index) => (
                    <ListItem key={index}>{bullet}</ListItem>
                  ))}
                </UnorderedList>
                <br />
                <Text>
                  <u style={{ textDecoration: "underline" }}>TechStack :-</u>
                </Text>
                <Flex flexWrap={"wrap"} gap="10px" mt="2">
                  {project.techStack.map((e) => (
                    <Flex
                      key={e.name + e.icon}
                      className="techStackProject"
                      gap={"5px"}
                    >
                      <Icon as={e.icon} boxSize={6} />
                      <Text>{e.name}</Text>
                    </Flex>
                  ))}
                </Flex>

                <Flex className="ProjectLinks" gap="30px" mt="4">
                  <Link href={project.githubUrl} target="_blank">
                    <Button bg={"blue.500"} w="100px">
                      Github
                    </Button>
                  </Link>
                  <Link href={project.demoUrl} target="_blank">
                    <Button bg={"blue.500"} w="100px">
                      Demo
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
