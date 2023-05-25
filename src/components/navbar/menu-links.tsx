"use client";
import { useCallback } from "react";

interface MenuItemsProps {
  onClick?: () => void;
}

function MenuItems({onClick}: MenuItemsProps) {

  return (
    <>
      <li onClick={onClick}>
        <a>Home</a>
      </li>
      <li onClick={onClick}>
        <a>Contact me</a>
      </li>
    </>
  );
}

export default MenuItems;
