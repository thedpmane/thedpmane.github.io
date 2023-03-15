import { background, Box } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import image from "./deepak.jpg";
const Home = () => {
  return (
    <Box
      id="home"
      ml={{ base: 0, md: 60 }}
      w="100%"
      borderLeft="solid 2px #357EC7"
      // border="solid red"
    >
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content homemaindiv">
            <div>
              <div className="text-1">Hello, my name is</div>
              <div className="text-2">Deepak Mane</div>
              <div className="text-3">
                And I'm a{" "}
                <span className="typing">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Web Developer",
                        "Passionate Programmer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="dimagediv">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};
export { Home };
