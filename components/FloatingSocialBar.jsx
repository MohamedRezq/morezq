const FloatingSocialBar = () => {
  return (
    <div className="fixed hidden md:block" style={{zIndex: 1000, left: 0, top: "20vh"}}>
      <nav className="socialBar">
        <ul>
          <li >
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100077341370475">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/morezq_dev/">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohamed-rezq-2021/">
              <i className="fab fa-linkedin-in"></i>
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/MohamedRezq">
              <i className="fab fa-github"></i>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCsrUFJVyzJdNOKpIb2OwlUw">
              <i className="fab fa-youtube"></i>
              <span>Youtube</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FloatingSocialBar;
