import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Resume from "../images/Deepak_Mane_Resume.pdf";
import Logo from "../images/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import {
  FaHome,
  FaUser,
  FaCogs,
  FaProjectDiagram,
  FaPhoneAlt,
  FaDownload,
  FaCalendarAlt,
} from "react-icons/fa";
import { useMediaQuery } from "@chakra-ui/react";
import WebFont from "webfontloader";
const LinkItems = [
  { name: "Home", icon: FaHome, path: "home" },
  { name: "About", icon: FaUser, path: "about" },
  { name: "Skills", icon: FaCogs, path: "skills" },
  { name: "Projects", icon: FaProjectDiagram, path: "projects" },
  { name: "GitHub Calendar", icon: FaCalendarAlt, path: "githubcalender" },
  { name: "Contact", icon: FaPhoneAlt, path: "contact" },
];

function Navbar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav
        pos="fixed"
        w="full"
        display={{ base: "flex", md: "none" }}
        onOpen={onOpen}
        borderBottom="solid 1px #357EC7"
      />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");
  WebFont.load({
    google: {
      families: ["Bad Script", "Parisienne"],
    },
  });
  return (
    <Box
      borderRight="solid 1px #357EC7"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      fontWeight={"semibold"}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          activeClass={"blue"}
        >
          <Text
            fontSize="4xl"
            fontWeight="semibold"
            color="#357EC7"
            fontFamily="Parisienne"
            ml="40px"
            _hover={{ cursor: "pointer" }}
          >
            Deepak
          </Text>
        </Link>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box ml="20px">
        {LinkItems.map((link, i) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            path={link.path}
            onClick={onClose}
          >
            {link.name}
          </NavItem>
        ))}
        <a
          href={Resume}
          download="Deepak_Mane_Resume.pdf"
          target="_blank"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1YUqTttdRqqoFk9aSiAfwxXpralLuIpBC/view?usp=sharing"
            )
          }
        >
          <Box
            align="left"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "#357EC7",
              color: "black",
            }}
          >
            <Icon
              mr="4"
              fontSize="16"
              color="#357EC7"
              _groupHover={{
                color: "white",
              }}
              as={FaDownload}
            />
            Resume
          </Box>
        </a>
        {!isSmallerScreen && (
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{ bg: "#357EC7", color: "black" }}
            onClick={toggleColorMode}
          >
            <Icon
              mr="4"
              fontSize="16"
              color="#357EC7"
              _groupHover={{ color: "white" }}
              as={colorMode === "light" ? FaMoon : FaSun}
            />
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Flex>
        )}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, path, ...rest }) => {
  return (
    <Link
      to={path}
      spy={true}
      smooth={true}
      offset={0}
      duration={800}
      activeClass={"blue"}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#357EC7",
          color: "black",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            color="#357EC7"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mnavbg, setMnavbg] = useState(false);

  const ChangeMnavbg = () => {
    if (window.scrollY >= 430) {
      setMnavbg(false);
    } else {
      setMnavbg(false);
    }
  };

  window.addEventListener("scroll", ChangeMnavbg);

  return (
    <Flex
      bg={colorMode === "light" ? "white" : "black"}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      zIndex={"100"}
      id={mnavbg ? "navbglight" : "navbgdark"}
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent="space-between"
      {...rest}
    >
      <Link
        to={"home"}
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
        activeClass={"blue"}
      >
        <Text
          color="#357EC7"
          fontSize="2xl"
          ml="8"
          fontFamily="monospace"
          fontWeight="bold"
          _hover={{ cursor: "pointer" }}
        >
          <Image
            borderRadius={"100%"}
            maxW={"50px"}
            className="logoimage"
            src={Logo}
          />
        </Text>
      </Link>

      <Flex gap={"10px"}>
        <IconButton
          variant="outline"
          onClick={toggleColorMode}
          bg="#357EC7"
          borderColor="#357EC7"
          borderRadius={"100%"}
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        />
        <IconButton
          variant="outline"
          onClick={onOpen}
          borderRadius={"100%"}
          bg="#357EC7"
          borderColor="#357EC7"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Flex>
    </Flex>
  );
};

export { Navbar };
