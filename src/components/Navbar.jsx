import React, { useState } from "react";
import { Link } from "react-scroll";
import Resume from "../images/Deepak_Mane_Resume.pdf";
import Logo from "../images/logo.png";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import {
  FaHome,
  FaUser,
  FaCogs,
  FaProjectDiagram,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { ReactText } from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FaHome, path: "home" },
  { name: "About", icon: FaUser, path: "about" },
  { name: "Skills", icon: FaCogs, path: "skills" },
  { name: "Projects", icon: FaProjectDiagram, path: "projects" },
  { name: "Contact", icon: FaPhoneAlt, path: "contact" },
];

function Navbar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
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

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("black", "black")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      backgroundColor="black"
      color="white"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="#357EC7"
        >
          Deepak Mane
        </Text>
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
            backgroundColor="black"
            color="white"
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
      </Box>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
  return (
    <Link
      to={path}
      spy={true}
      smooth={true}
      offset={9}
      duration={100}
      activeClass="underline"
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        backgroundColor="black"
        color="white"
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

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
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
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      id={mnavbg ? "navbglight" : "navbgdark"}
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      {" "}
      <Text
        color="#357EC7"
        fontSize="2xl"
        ml="8"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <Image maxW={"50px"} className="logoimage" src={Logo} />
      </Text>
      <IconButton
        variant="outline"
        onClick={onOpen}
        bg="#357EC7"
        borderColor="#357EC7"
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};

export { Navbar };
