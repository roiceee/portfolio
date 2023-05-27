"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

interface MenuItemsProps {
  onClick?: () => void;
}

function MenuItems({ onClick }: MenuItemsProps) {
  const items = useRef<Array<HTMLAnchorElement | null>>(new Array());

  const pathname = usePathname();

  const addActive = useCallback(() => {
    items.current.forEach((element) => {
      if (element) {
        if (pathname === element.id) {
          element.classList.add("nav-active");
        } else {
          element.classList.remove("nav-active");
        }
        element.blur();
      }
    });
  }, [pathname]);

  useEffect(() => {
    addActive();
  }, [addActive]);
  return (
    <>
      <li onClick={onClick}>
        <Link href={"/"} ref={(element) => items.current.push(element)} id="/">
          Home
        </Link>
      </li>
      <li onClick={onClick}>
        <Link
          href={"/contact"}
          ref={(element) => items.current.push(element)}
          id="/contact"
        >
          Contact me
        </Link>
      </li>
    </>
  );
}

export default MenuItems;
