import MenuItems from "./menu-links";
import logo from "public/roice-logo.png";
import Image from "next/image";
import NavbarDropdown from "./navbar-dropdown";
import Link from "next/link";

function Navbar() {

 
  return (
    
      <div className="navbar px-4 lg:px-24 sticky top-0 z-50 backdrop-blur-sm outline-1" style={{borderBottom: "1px solid #063650"}}>
        <div className="navbar-start">
          <Link href={"/"}>
            <Image
              src={logo}
              alt={"logo"}
              height={40}
              width={40}
              placeholder="blur"
            />
          </Link>
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
