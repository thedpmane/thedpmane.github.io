const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky">
        <div className="max-width">
          <div className="logo">
            <a href="#" display="flex">
              <p id="partOneName"></p>
              <span id="userName">Deepak Mane</span>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#home" className="menu-btn">
                <i className="fas fa-home"></i>&nbsp;Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn">
                <i className="fas fa-user-alt"></i>&nbsp; About
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-btn">
                <i className="fas fa-cogs"></i>&nbsp; Skills
              </a>
            </li>
            <li>
              <a href="#services" className="menu-btn">
                <i className="fas fa-project-diagram"></i> Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                <i className="fas fa-phone-alt"></i> Contact
              </a>
            </li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
      ljsldkfjdslfjdslkfj
      <div height="1000000px" width="50%" border="solid grey">
        helooljljfs
      </div>
    </div>
  );
};
export { Navbar };
