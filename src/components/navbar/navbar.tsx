import MenuItems from "./menu-links";
import logo from "public/roice-logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className="md:container">
      <div className="navbar bg-base-100 px-4">
        <div className="navbar-start">
          <a>
            <Image src={logo} alt={"logo"} height={40} width={40} placeholder="blur"/>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <MenuItems />
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <MenuItems />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
