import "../css/ResumeBtn.css";
import { Box } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

import Resume from "../images/Deepak_Mane_Resume.pdf";
//console.log(Resume);
const About = () => {
  return (
    <Box
      id="about"
      bg="black"
      ml={{ base: 0, md: 60 }}
      borderLeft="solid 2px #357EC7"
    >
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img
                src="https://camo.githubusercontent.com/3997f3b27a68e19c31e2d1c378d77303735faa42e7d18a8018f7510d66aaa83e/68747470733a2f2f7777772e77696e677374656368736f6c7574696f6e732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f66756c6c2d737461636b2d646576656c6f706d656e742e676966"
                alt=""
              />
            </div>
            <div className="column right" display="flex">
              <div className="text">
                I'm Deepak and I'm a
                <span className="typing-2">
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
              <p style={{ color: "white" }}>
                Aspiring Full StackWeb Developer, a passionate coder, and
                capable of writing efficient code using MERN Stack. Ambitious to
                work and collaborate with other dedicated and enterprising
                developers. Eager to take up a responsible role within an
                exciting and inspiring organization, and deliver products that
                offer a great user experience.
              </p>
              <div className="mediaLinksAbout">
                <a
                  href="https://www.linkedin.com/in/manedeepak/"
                  target="blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/thedpmane" target="blank">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p className="iconsAboutSection">
                {" "}
                <i className="fas fa-phone"></i>{" "}
                <a
                  className="socialMediaLinksToPage"
                  href="tel:7767874237"
                  style={{ color: "white" }}
                >
                  +91-7767874237
                </a>
              </p>
              <p className="iconsAboutSection">
                <i className="fas fa-envelope"></i>{" "}
                <a
                  className="socialMediaLinksToPage"
                  href="mailto:guessme.thedpmane@gmail.com"
                  style={{ color: "white" }}
                >
                  thedpmane@gmail.com
                </a>
              </p>
              <a
                href={Resume}
                download="Deepak_Mane_Resume.pdf"
                className="resumebtn"
                target="_blank"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1YUqTttdRqqoFk9aSiAfwxXpralLuIpBC/view?usp=sharing"
                  )
                }
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};
export { About };
