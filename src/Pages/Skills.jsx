import { Box } from "@chakra-ui/react";
import { MdOutlineOfflineBolt } from "react-icons/md";
import { SiCypress, SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <Box
      id="skills"
      ml={{ base: 0, md: 60 }}
      borderLeft="solid 2px #357EC7"
      bg="black"
    >
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title" id="myskills">
            Skills
          </h2>
          <div className="SkillsContent">
            <div>
              <i className="fab fa-html5"></i>
              <p>Html</p>
            </div>
            <div>
              <i className="fab fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div>
              <i className="fab fa-js-square"></i>
              <p>JavaScript</p>
            </div>
            <div>
              <i className="fab fa-github"></i>
              <p>Github</p>
            </div>
            <div>
              <i className="fab fa-node-js"></i>
              <p>ExpressJs</p>
            </div>
            <div>
              <i className="fab fa-node-js"></i>
              <p>NodeJs</p>
            </div>
            <div>
              {/* <i className="fas fa-database"></i> */}
              <i>
                <SiCypress />
              </i>
              <p>Cypress</p>
            </div>
            <div>
              <i className="fas fa-database"></i>
              <p>MongoDb</p>
            </div>
            <div>
              <i className="fab fa-react"></i>
              <p>React</p>
            </div>
            <div>
              <i className="fab fa-react"></i>
              <p>Redux</p>
            </div>
            <div>
              <i>
                <SiTypescript />
              </i>
              <p>Typescript</p>
            </div>
            <div>
              {/* <i class="fa-regular fa-circle-bolt" style={{ color: "red" }}></i> */}
              <MdOutlineOfflineBolt />
              <p>Chakra UI</p>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};
export { Skills };
