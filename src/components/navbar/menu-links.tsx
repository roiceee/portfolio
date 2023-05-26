"use client";

import Link from "next/link";

interface MenuItemsProps {
  onClick?: () => void;
}

function MenuItems({ onClick }: MenuItemsProps) {
  return (
    <>
      <li onClick={onClick}>
        <Link href={"/"}>Home</Link>
      </li>
      <li onClick={onClick}>
        <Link href={"/contact"}>Contact me</Link>
      </li>
    </>
  );
}

export default MenuItems;
