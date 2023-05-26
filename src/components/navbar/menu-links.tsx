"use client";

import Link from "next/link";

interface MenuItemsProps {
  onClick?: () => void;
}

function MenuItems({onClick}: MenuItemsProps) {

  return (
    <>
      <Link href={"/"}>
        <li onClick={onClick}>
          <a>Home</a>
        </li>
      </Link>
      <Link href={"/contact"}>
        <li onClick={onClick}>
          <a>Contact me</a>
        </li>
      </Link>
    </>
  );
}

export default MenuItems;
