function Header() {
  return (
    <div className="header fixed top-0 z-10 w-[100vw]">
      <ul className="nav flex bg-black">
        <li className="nav-item group hover:bg-[#cccccc]">
          <a href="#" className="nav-link btn group-hover:text-black">
            HOME
          </a>
        </li>
        <li className="nav-item group hover:bg-[#cccccc]">
          <a href="#" className="nav-link btn group-hover:text-black">
            BAND
          </a>
        </li>
        <li className="nav-item group hover:bg-[#cccccc]">
          <a href="#" className="nav-link btn group-hover:text-black">
            TOUR
          </a>
        </li>
        <li className="nav-item group hover:bg-[#cccccc]">
          <a href="#" className="nav-link btn group-hover:text-black">
            CONTACT
          </a>
        </li>
        <li className="nav-item btn group relative hover:bg-[#cccccc] hover:text-black">
          MORE <i className="fa-solid fa-caret-down"></i>
          <div className="absolute bottom-[-116px] left-0 hidden w-[150px] bg-white text-black group-hover:block">
            <div className="flex flex-col">
              {" "}
              <a
                href="#"
                className="px-[16px] py-[8px] text-[15px] leading-[22.5px]"
              >
                Merchandise
              </a>
              <a
                href="#"
                className="px-[16px] py-[8px] text-[15px] leading-[22.5px]"
              >
                Extras
              </a>
              <a
                href="#"
                className="px-[16px] py-[8px] text-[15px] leading-[22.5px]"
              >
                Media
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
