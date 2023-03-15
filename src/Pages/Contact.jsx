import { Box } from "@chakra-ui/react";
const Contact = () => {
  return (
    <Box
      id="contact"
      ml={{ base: 0, md: 60 }}
      borderLeft="solid 2px #357EC7"
      bg="black"
    >
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content reachMe">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Deepak Mane</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">
                      <a
                        className="socialMediaLinksToPage"
                        href="mailto:thedpmane@gmail.com"
                      >
                        thedpmane@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-phone"></i>
                  <div className="info">
                    <div className="head">Phone</div>
                    <div className="sub-title">
                      <a
                        className="socialMediaLinksToPage"
                        href="tel:7767874237"
                      >
                        +91-7767874237
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right contact-part-2">
              <div className="row">
                <i className="fab fa-github"></i>
                <div className="info">
                  <div className="head">Github</div>
                  <div className="sub-title">
                    <a
                      className="socialMediaLinksToPage"
                      href="https://github.com/thedpmane"
                      target="blank"
                    >
                      thedpmane
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <i className="fab fa-linkedin"></i>
                <div className="info">
                  <div className="head">Linkedin</div>
                  <div className="sub-title">
                    <a
                      className="socialMediaLinksToPage"
                      href="https://www.linkedin.com/in/manedeepak/"
                      target="blank"
                    >
                      manedeepak
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Parbhani, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};
export { Contact };
