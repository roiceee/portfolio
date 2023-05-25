import MenuItems from "./menu-links";
import logo from "public/roice-logo.png";
import Image from "next/image";
import NavbarDropdown from "./navbar-dropdown";

function Navbar() {

 
  return (
    
      <div className="navbar bg-base-100 px-4 lg:px-24 sticky top-0 z-50 backdrop-blur-sm bg-opacity-75">
        <div className="navbar-start">
          <a>
            <Image
              src={logo}
              alt={"logo"}
              height={40}
              width={40}
              placeholder="blur"
            />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <MenuItems />
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <NavbarDropdown/>
        </div>
      </div>
    
  );
}

export default Navbar;
