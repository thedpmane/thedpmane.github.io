import { Box, Icon, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import {
  FaAddressBook,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Resume from "../../images/Deepak_Mane_Resume.pdf";
const socialIcons = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/manedeepak/" },
  { icon: FaGithub, href: "https://github.com/thedpmane" },
  { icon: FaEnvelope, href: "mailto:thedpmane@gmail.com" },
];

const SocialIcon = () => {
  return (
    <Box position="fixed" bottom={30} right={0} zIndex={2}>
      <UnorderedList listStyleType="none" textAlign="center">
        {socialIcons.map((socialIcon, index) => (
          <ListItem
            key={index}
            display="block"
            color="#357ec7"
            fontSize="24px" // Increase the font size
            height="40px" // Increase the height
            width="40px" // Increase the width
            background="#171515"
            lineHeight="40px"
            borderRadius="50%"
            marginBottom="3px"
            cursor="pointer"
            transition="0.5s"
            _before={{
              borderRadius: "50%",
              transform: "scale(0.9)",
              transition: "0.5s",
              background: "#357ec7",
            }}
            _hover={{
              _before: { filter: "blur(1px)", transform: "scale(1)" },
              boxShadow: "0 0 15px #357ec7",
            }}
          >
            <Link
              href={socialIcon.href}
              target="_blank"
              download={socialIcon.download}
              onClick={(e) => e.stopPropagation()}
            >
              <Icon as={socialIcon.icon} />
            </Link>
          </ListItem>
        ))}

        <ListItem
          display="block"
          color="#357ec7"
          fontSize="24px"
          height="40px"
          width="40px"
          background="#171515"
          lineHeight="40px"
          borderRadius="50%"
          marginBottom="3px"
          cursor="pointer"
          transition="0.5s"
          _before={{
            borderRadius: "50%",
            transform: "scale(0.9)",
            transition: "0.5s",
            background: "#357ec7",
          }}
          _hover={{
            _before: { filter: "blur(1px)", transform: "scale(1)" },
            boxShadow: "0 0 15px #357ec7",
          }}
        >
          <Link
            href={Resume}
            download="Deepak_Mane_Resume.pdf"
            target="_blank"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1YUqTttdRqqoFk9aSiAfwxXpralLuIpBC/view?usp=sharing"
              )
            }
          >
            <Icon as={FaAddressBook} />
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export { SocialIcon };
