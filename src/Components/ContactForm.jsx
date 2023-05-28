import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import contactImage from "../images/contactImage.svg";
// function ContactForm() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <VStack maxW={"500px"}>
//         <FormControl id="name" isRequired>
//           <FormLabel>Name</FormLabel>
//           <Input type="text" placeholder="Enter your name" />
//         </FormControl>

//         <FormControl id="email" mt={4} isRequired>
//           <FormLabel>Email</FormLabel>
//           <Input type="email" placeholder="Enter your email" />
//         </FormControl>

//         <FormControl id="message" mt={4} isRequired>
//           <FormLabel>Message</FormLabel>
//           <Textarea placeholder="Enter your message" />
//         </FormControl>

//         <Button mt={4} colorScheme="blue" type="submit">
//           Submit
//         </Button>
//       </VStack>
//     </form>
//   );
// }
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function ContactForm() {
  const form = useRef();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sendEmail = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    emailjs
      .sendForm(
        "service_v82bn1d",
        "template_04h47im",
        form.current,
        "gaC2_HY8tvSTpbg-w"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast({
              title: "Message Sent",
              description: "Thanks You",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
          onClose();
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Message Not Sent.",
            description: error?.text,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <>
      <Button
        onClick={onOpen}
        position="absolute"
        bottom="3%"
        left="48%"
        color={"white"}
        transform="translate(-50%, -50%)"
        colorScheme={"blue"}
        bg={"transparent"}
      >
        Click Here
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Message Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form ref={form} onSubmit={sendEmail}>
              <VStack>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    border="1px solid"
                    type="text"
                    placeholder="Enter your name"
                    name="user_name"
                    _placeholder={{ color: "blue.500" }}
                  />
                </FormControl>

                <FormControl id="email" mt={4} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    border="1px solid"
                    type="email"
                    placeholder="Enter your email"
                    name="user_email"
                    _placeholder={{ color: "blue.500" }}
                  />
                </FormControl>

                <FormControl id="message" mt={4} isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    border="1px solid"
                    placeholder="Enter your message"
                    name="message"
                    _placeholder={{ color: "blue.500" }}
                  />
                </FormControl>

                <Button mt={4} colorScheme="blue" type="submit">
                  Let's talk
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ContactForm;
