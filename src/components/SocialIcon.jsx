import "../components/Socialicon.css";
import Resume from "../images/Deepak_Mane_Resume.pdf";
const SocialIcon = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/manedeepak/" target="blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/thedpmane" target="blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="mailto:thedpmane@gmail.com">
            <i class="fa fa-envelope"></i>
          </a>
        </li>
        <li>
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
            <i class="far fa-address-book"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export { SocialIcon };
