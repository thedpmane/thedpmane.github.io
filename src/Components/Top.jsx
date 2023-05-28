import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from "react-scroll";

import { IoIosArrowUp } from "react-icons/io";
import { Button } from "@chakra-ui/react";

const Top = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 1600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <Button
          onClick={() => scrollToTop()}
          bg="blue.500"
          _hover={{ bg: "blue.300" }}
          color="white"
          w="12"
          h="12"
          rounded="full"
          pos="fixed"
          right="72px"
          bottom="8"
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
          transition="all"
          visibility={{ base: "hidden", md: "visible" }}
        >
          <IoIosArrowUp w="6" h="6" />
        </Button>
      )
    );
  }
};

export default Top;
