const Header = ({ logo }) => {

  return (
    <div className="dizme_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">{/* Your logo component or content goes here */}</div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="download_cv">
                <a href="https://drive.google.com/file/d/1l0FCM4EYQqYcfVCCQOAB-EELYkOFzzuP/view?usp=drive_link" >
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
