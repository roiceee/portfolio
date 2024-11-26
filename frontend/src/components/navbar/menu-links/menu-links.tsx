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
      if (!element) {
        return;
      }
      if (element.id === "/") {
        if (pathname === element.id) {
          element.classList.add("nav-active", "underline");
        } else {
          element.classList.remove("nav-active", "underline");
        }
      } else if (pathname.includes(element.id)) {
        element.classList.add("nav-active", "underline");
      } else {
        element.classList.remove("nav-active", "underline");
      }
      element.blur();
    });
  }, [pathname]);

  useEffect(() => {
    addActive();
  }, [addActive]);
  return (
    <>
      <li onClick={onClick}>
        <Link
          className="font-bold text-lg active:bg-accent active:text-white "
          href={"/"}
          ref={(element) => items.current.push(element)}
          id="/"
        >
          Home
        </Link>
      </li>
      <li onClick={onClick}>
        <Link
          className="font-bold text-lg active:bg-accent active:text-white"
          href={"/skills-and-experience"}
          ref={(element) => items.current.push(element)}
          id="/skills-and-experience"
        >
          Skills &amp; Exp
        </Link>
      </li>
      <li onClick={onClick}>
        <Link
          className="font-bold text-lg active:bg-accent active:text-white"
          href={"/blog/page/1"}
          ref={(element) => items.current.push(element)}
          id="/blog"
        >
          Blog
        </Link>
      </li>
      <li onClick={onClick}>
        <Link
          className="font-bold text-lg active:bg-accent active:text-white"
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
