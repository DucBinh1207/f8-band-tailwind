function Header() {
  return (
    <div className="header fixed top-0 z-10 w-[100vw]">
      <ul className="nav flex bg-black">
        <li className="nav-item">
          <a href="#" className="nav-link btn">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link btn">
            BAND
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link btn">
            TOUR
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link btn">
            CONTACT
          </a>
        </li>
        <li className="nav-item btn">
          MORE <i className="fa-solid fa-caret-down"></i>
        </li>
      </ul>
    </div>
  );
}

export default Header;
