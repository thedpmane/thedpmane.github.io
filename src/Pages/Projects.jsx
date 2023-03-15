import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import image from "../images/lifesylestore.png";
import skinstoreimg from "../images/Skinstore.png";
import meanbuy from "../images/meanbuy.png";
import licious from "../images/Licious.png";
import { SiRedux, SiChakraui } from "react-icons/si";
import AdvanceAutoParts from "../images/advanceautoparts.png";
import { MdOutlineOfflineBolt } from "react-icons/md";
const Projects = () => {
  return (
    <Box
      id="projects"
      ml={{ base: 0, md: 60 }}
      borderLeft="solid 2px #357EC7"
      bg="red"
    >
      <section class="services" id="services">
        <h2 class="title">My Projects</h2>

        <div class="ProjectMainDiv" id="mainDivProjectsSection">
          {/* <!-- AdvanceAutoParts.com --> */}
          <div class="eachProjectDiv MailChimp">
            <p class="ProjectName " style={{ marginTop: "40px" }}>
              AdvanceAutoParts
            </p>
            <div class="ProjectContainer">
              <div class="ProjectImage">
                <img src={AdvanceAutoParts} alt="notfound" />
              </div>
              <div class="projectDescription">
                <p>
                  Developed a lookalike of{" "}
                  <a
                    href="https://shop.advanceautoparts.com/"
                    style={{ color: "#FFF", textDecoration: "underline" }}
                    target="blank"
                  >
                    AdvanceAutoParts
                  </a>
                </p>
                <p>
                  AdvanceAutoParts is your source for quality auto parts, advice
                  and accessories. View car care tips, shop online for home
                  delivery
                </p>
                <br />
                <p></p>
                <li class="projectDetailsBullets">
                  Group of Five members, build the application in 5 days, where
                  I have developed the Cart page,Checkout page of the website.
                </li>
                <li>
                  Built functionality till checkhout page such as adding and
                  reomve item from cart increase and decrease quantity of the
                  product which reflects to total price
                </li>

                <p></p>
                <br />
                <u style={{ textDecoration: "underline" }}>TechStack :- </u>
                <br />
                <div class="techStackProject">
                  <p>
                    <i class="fab fa-react"></i> React
                  </p>
                  <p>
                    <ChakraProvider>
                      <Flex>
                        <Box mt="2px">
                          <SiRedux />
                        </Box>
                        <Box ml="5px"> React Redux</Box>
                      </Flex>
                    </ChakraProvider>
                  </p>
                  <p>
                    {" "}
                    <i class="fab fa-node-js"></i>NodeJs
                  </p>
                  <p>
                    {" "}
                    <i class="fab fa-node-js"></i>ExpressJs
                  </p>
                  <p>
                    {" "}
                    <i class="fas fa-database"></i> MongoDb
                  </p>
                  <p>
                    <ChakraProvider>
                      <Flex>
                        <Box mt="2px">
                          <SiChakraui />
                        </Box>
                        <Box ml="5px"> Chakra UI</Box>
                      </Flex>
                    </ChakraProvider>
                  </p>
                </div>
                <div class="ProjectLinks">
                  <a
                    href="https://github.com/darshancoder/Advance-auto-Parts-Clone"
                    target="blank"
                  >
                    <button>Github</button>
                  </a>
                  <a href="https://advanceautoparts.vercel.app" target="blank">
                    <button>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Lifestore.com --> */}
          <div class="eachProjectDiv MailChimp">
            <p class="ProjectName " style={{ marginTop: "40px" }}>
              Lifestyle Stores
            </p>
            <div class="ProjectContainer">
              <div class="ProjectImage">
                <img src={image} alt="notfound" />
              </div>
              <div class="projectDescription">
                <p>
                  Developed a lookalike of{" "}
                  <a
                    href="https://www.lifestylestores.com/in/en/"
                    style={{ color: "#FFF", textDecoration: "underline" }}
                    target="blank"
                  >
                    Lifestyle Stores
                  </a>
                </p>
                <p>
                  LifestyleStores is one of the most trusted purveyors of
                  unique, designer products in India. It provides you an
                  exquisite range of Branded Clothes and Fashion related
                  Products
                </p>
                <br />
                <p></p>
                <li class="projectDetailsBullets">
                  Group of Five members, build the application in 4 days, where
                  I was leading the team, have developed the Products
                  page,Single product page and the All functionality till
                  checkhout page of the website.
                </li>
                <li>
                  Developed both frontend and backend setup, and manage workload
                  of each member to built this fully resposive website.
                </li>

                <p></p>
                <br />
                <u style={{ textDecoration: "underline" }}>TechStack :- </u>
                <br />
                <div class="techStackProject">
                  <p>
                    {" "}
                    <i class="fab fa-js-square"></i> JS{" "}
                  </p>
                  <p>
                    <i class="fab fa-html5"></i> HTML
                  </p>
                  <p>
                    <i class="fab fa-css3-alt"></i> CSS
                  </p>
                </div>
                <div class="ProjectLinks">
                  <a
                    href="https://github.com/thedpmane/clone-lifestore.com"
                    target="blank"
                  >
                    <button>Github</button>
                  </a>
                  <a
                    href="https://clone-lifestylestore-com.vercel.app/index.html"
                    target="blank"
                  >
                    <button>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Licious.com --> */}
          <div class="eachProjectDiv MailChimp">
            <p class="ProjectName " style={{ marginTop: "40px" }}>
              Licious
            </p>
            <div class="ProjectContainer">
              <div class="ProjectImage">
                <img src={licious} alt="notfound" />
              </div>
              <div class="projectDescription">
                <p>
                  Developed a lookalike of {""}
                  <a
                    href="https://www.licious.in/"
                    style={{ color: "#FFF", textDecoration: "underline" }}
                    target="blank"
                  >
                    Licious.in
                  </a>
                </p>
                <p>
                  Licious is your one-stop fresh meat delivery shop. In here,
                  you get nothing but the freshest meat & seafood, delivered
                  straight to your doorstep.
                </p>
                <br />
                <p></p>
                <li class="projectDetailsBullets">
                  Group of Five members, build the application in 4 days, where
                  I have developed the Products page,Single product page,Cart
                  page,Login & SignUp page and the All functionality till
                  checkhout page of the website.
                </li>
                <li>
                  Built functionality till checkhout page such as adding and
                  reomve item from cart increase and decrease quantity of the
                  product which reflects to total price and Login and Signup
                </li>

                <p></p>
                <br />
                <u style={{ textDecoration: "underline" }}>TechStack :- </u>
                <br />
                <div class="techStackProject">
                  <p>
                    <i class="fab fa-react"></i> React
                  </p>
                  <p>
                    <ChakraProvider>
                      <Flex>
                        <Box mt="2px">
                          <SiRedux />
                        </Box>
                        <Box ml="5px"> React Redux</Box>
                      </Flex>
                    </ChakraProvider>
                  </p>
                  <p>
                    <ChakraProvider>
                      <Flex>
                        <Box mt="2px">
                          <SiChakraui />
                        </Box>
                        <Box ml="5px"> Chakra UI</Box>
                      </Flex>
                    </ChakraProvider>
                  </p>
                </div>
                <div class="ProjectLinks">
                  <a
                    href="https://github.com/Saif-sk5417/obtainable-expansion-7399"
                    target="blank"
                  >
                    <button>Github</button>
                  </a>
                  <a
                    href="https://clone-licious-com.vercel.app/"
                    target="blank"
                  >
                    <button>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Skin Store --> */}
          <div class="eachProjectDiv MailChimp" style={{ marginTop: "40px" }}>
            <p class="ProjectName ">SkinStore</p>
            <div class="ProjectContainer">
              <div class="ProjectImage">
                <img src={skinstoreimg} alt="notfound" />
              </div>
              <div class="projectDescription">
                <p>
                  Developed a lookalike of{" "}
                  <a
                    href="https://www.skinstore.com/"
                    style={{ color: "#FFF", textDecoration: "underline" }}
                    target="blank"
                  >
                    SkinStore
                  </a>
                </p>
                <p>
                  SkinStore is an authorized retailer to 100s of premium beauty
                  brands across skin, makeup and hair including SkinCeuticals,
                  Dermalogica etc website. Your one stop destination for beauty
                  and self-care.
                </p>
                <br />
                <p></p>
                <li class="projectDetailsBullets">
                  It is an Individual Project that Built in 5 days,where I
                  worked on the almost each section such as reponsive as well as
                  working it like original website.
                </li>

                <p></p>
                <br />
                <u style={{ textDecoration: "underline" }}>TechStack :- </u>
                <br />
                <div class="techStackProject">
                  <p>
                    <i class="fab fa-react"></i> REACT
                  </p>
                  <p>
                    <i class="fab fa-react"></i> Context API
                  </p>
                  <p
                    style={{
                      display: "flex",
                      gap: "2px",
                    }}
                  >
                    <MdOutlineOfflineBolt
                      style={{
                        fontSize: "25px",
                      }}
                    />
                    CHAKRA UI
                  </p>
                </div>
                <div class="ProjectLinks">
                  <a
                    href="https://github.com/thedpmane/clone-skinstore"
                    target="blank"
                  >
                    <button>Github</button>
                  </a>
                  <a href="https://clone-skinstore.vercel.app/" target="blank">
                    <button>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- meanbuy project --> */}
          <div class="eachProjectDiv MailChimp" style={{ marginTop: "40px" }}>
            <p class="ProjectName ">MeanBuy</p>
            <div class="ProjectContainer">
              <div class="ProjectImage">
                <img
                  src={meanbuy}
                  alt="Meanbuyimg not found wait until project end"
                />
              </div>
              <div class="projectDescription">
                <p>
                  Developed a lookalike of
                  <a
                    href="https://www.meanbuy.com/"
                    style={{ color: "#FFF", textDecoration: "underline" }}
                    target="blank"
                  >
                    MeanBuy
                  </a>
                </p>
                <p>
                  MeanBuy is Online Shopping Is Made Easier with Various
                  Categories and Filters. Best Online Shopping for International
                  Branded Products.
                </p>
                <br />
                <p></p>
                <li class="projectDetailsBullets">
                  It is an Individual Project that Built in 5 days,where I
                  worked on the almost each section and functionality like
                  original website such as adding product to cart.
                </li>
                {/* <li>
                  Developed both frontend and backend setup, and manage workload
                  of each member to built this fully resposive website.
                </li> */}

                <p></p>
                <br />
                <u style={{ textDecoration: "underline" }}>TechStack :- </u>
                <br />
                <div class="techStackProject">
                  <p>
                    {" "}
                    <i class="fab fa-js-square"></i> JS{" "}
                  </p>
                  <p>
                    <i class="fab fa-html5"></i> HTML
                  </p>
                  <p>
                    <i class="fab fa-css3-alt"></i> CSS
                  </p>
                </div>
                <div class="ProjectLinks">
                  <a
                    href="https://github.com/thedpmane/clone-meanbuy.com"
                    target="blank"
                  >
                    <button>Github</button>
                  </a>
                  <a
                    href="https://clone-meanbuy-com.vercel.app/"
                    target="blank"
                  >
                    <button>Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};
export { Projects };
