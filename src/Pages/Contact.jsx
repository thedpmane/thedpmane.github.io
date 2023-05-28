// import contactImage from "../images/contactImage.svg";
// import React from "react";
// import {
//   Box,
//   Text,
//   Divider,
//   Flex,
//   Heading,
//   Grid,
//   Icon,
// } from "@chakra-ui/react";

// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaGithub,
//   FaLinkedin,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const Contact = () => {
//   const contactData = [
//     {
//       icon: <Icon as={FaUser} boxSize={7} color="blue.500" />,
//       heading: "Name",
//       subheading: "Deepak Mane",
//     },
//     {
//       icon: <Icon as={FaEnvelope} boxSize={7} color="blue.500" />,
//       heading: "Email",
//       subheading: (
//         <a className="socialMediaLinksToPage" href="mailto:thedpmane@gmail.com">
//           thedpmane@gmail.com
//         </a>
//       ),
//     },
//     {
//       icon: <Icon as={FaPhone} boxSize={7} color="blue.500" />,
//       heading: "Phone",
//       subheading: (
//         <a className="socialMediaLinksToPage" href="tel:7767874237">
//           +91-7767874237
//         </a>
//       ),
//     },
//     {
//       icon: <Icon as={FaGithub} boxSize={7} color="blue.500" />,
//       heading: "Github",
//       subheading: (
//         <a
//           className="socialMediaLinksToPage"
//           href="https://github.com/thedpmane"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           thedpmane
//         </a>
//       ),
//     },
//     {
//       icon: <Icon as={FaLinkedin} boxSize={7} color="blue.500" />,
//       heading: "Linkedin",
//       subheading: (
//         <a
//           className="socialMediaLinksToPage"
//           href="https://www.linkedin.com/in/manedeepak/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           manedeepak
//         </a>
//       ),
//     },
//     {
//       icon: <Icon as={FaMapMarkerAlt} boxSize={7} color="blue.500" />,
//       heading: "Address",
//       subheading: "Parbhani, Maharashtra",
//     },
//   ];
//   return (
//     <Box id="contact" ml={{ base: 0, md: 60 }} p={{ base: "80px 20px", md: 8 }}>
//       <Heading fontWeight="bold" textAlign="center">
//         Contact me
//       </Heading>
//       <Divider
//         borderColor="blue.500"
//         w="180px"
//         borderWidth="2.5px"
//         m="20px auto"
//       />
//       <Flex
//         p={["4", "40px"]}
//         gap={["4", "1"]}
//         direction={["column", "row"]}
//         justify="space-evenly"
//       >
//         <Grid gap="4">
//           {contactData.slice(0, 3).map((data, index) => (
//             <Flex key={index} alignItems="center" gap={4}>
//               {data.icon}
//               <Grid>
//                 <Text fontWeight="semibold" fontSize="lg">
//                   {data.heading}
//                 </Text>
//                 <Text>{data.subheading}</Text>
//               </Grid>
//             </Flex>
//           ))}
//         </Grid>
//         <Grid gap="4">
//           {contactData.slice(3).map((data, index) => (
//             <Flex key={index} alignItems="center" gap={4}>
//               {data.icon}
//               <Grid>
//                 <Text fontWeight="semibold" fontSize="lg">
//                   {data.heading}
//                 </Text>
//                 <Text>{data.subheading}</Text>
//               </Grid>
//             </Flex>
//           ))}
//         </Grid>
//       </Flex>
//     </Box>
//   );
// };
// export default Contact;
import contactImage from "../images/contactImage.svg";
import React from "react";
import {
  Box,
  Text,
  Divider,
  Flex,
  Heading,
  Grid,
  Icon,
  Image,
  Button,
} from "@chakra-ui/react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  const contactData = [
    {
      icon: <Icon as={FaUser} boxSize={7} color="blue.500" />,
      heading: "Name",
      subheading: "Deepak Mane",
    },
    {
      icon: <Icon as={FaEnvelope} boxSize={7} color="blue.500" />,
      heading: "Email",
      subheading: (
        <a className="socialMediaLinksToPage" href="mailto:thedpmane@gmail.com">
          thedpmane@gmail.com
        </a>
      ),
    },
    {
      icon: <Icon as={FaPhone} boxSize={7} color="blue.500" />,
      heading: "Phone",
      subheading: (
        <a className="socialMediaLinksToPage" href="tel:7767874237">
          +91-7767874237
        </a>
      ),
    },
    {
      icon: <Icon as={FaGithub} boxSize={7} color="blue.500" />,
      heading: "Github",
      subheading: (
        <a
          className="socialMediaLinksToPage"
          href="https://github.com/thedpmane"
          target="_blank"
          rel="noopener noreferrer"
        >
          thedpmane
        </a>
      ),
    },
    {
      icon: <Icon as={FaLinkedin} boxSize={7} color="blue.500" />,
      heading: "Linkedin",
      subheading: (
        <a
          className="socialMediaLinksToPage"
          href="https://www.linkedin.com/in/manedeepak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          manedeepak
        </a>
      ),
    },
    {
      icon: <Icon as={FaMapMarkerAlt} boxSize={7} color="blue.500" />,
      heading: "Address",
      subheading: "Parbhani, Maharashtra",
    },
  ];
  return (
    <Box
      id="contact"
      ml={{ base: 0, md: 60 }}
      p={{ base: "80px 20px", md: 8 }}
      // h={"90vh"}
    >
      <Heading fontWeight="bold" textAlign="center">
        Contact me
      </Heading>
      <Divider
        borderColor="blue.500"
        w="180px"
        borderWidth="2.5px"
        m="20px auto"
      />

      <Flex direction={["column", "column", "column", "row"]}>
        <Box flex={1} p={[2, 2, 2, 4]} mt={[0, 0, 0, "40px"]}>
          <Grid gap="4" justifyContent={"center"}>
            {contactData.slice(0, 3).map((data, index) => (
              <Flex key={index} alignItems="center" gap={4}>
                {data.icon}
                <Grid>
                  <Text fontWeight="semibold" fontSize="lg">
                    {data.heading}
                  </Text>
                  <Text>{data.subheading}</Text>
                </Grid>
              </Flex>
            ))}
          </Grid>
        </Box>
        <Box flex={1} p={[2, 2, 2, 4]} mt={[0, 0, 0, "40px"]}>
          <Grid gap="4" justifyContent={"center"}>
            {contactData.slice(3).map((data, index) => (
              <Flex key={index} alignItems="center" gap={4}>
                {data.icon}
                <Grid>
                  <Text fontWeight="semibold" fontSize="lg">
                    {data.heading}
                  </Text>
                  <Text>{data.subheading}</Text>
                </Grid>
              </Flex>
            ))}
          </Grid>
        </Box>
        <Box flex={1} p={4} position="relative">
          <Image
            objectFit={"contain"}
            w="100%"
            src={contactImage}
            alt="contact image not found"
          />

          <ContactForm />
        </Box>
      </Flex>
    </Box>
  );
};
export default Contact;
