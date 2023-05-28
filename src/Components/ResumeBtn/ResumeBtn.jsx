import React from "react";
import "./ResumeBtn.css";
import Resume from "../../images/Deepak_Mane_Resume.pdf";
const ResumeBtn = () => {
  return (
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
  );
};

export default ResumeBtn;
