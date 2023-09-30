import Link from "next/link";
import React from "react";
import { RiChromeFill, RiUserFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div
      style={{ height: "7vh" }}
      className="px-10 flex items-center justify-center "
    >
      <ul className="flex text-center ">
        <li className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://calestial.site">
            <a target="_blank" rel="noreferrer noopener" aria-label="chrome">
              <RiChromeFill size={20} className="hover:text-third" />
            </a>
          </Link>
        </li>
        <li className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://wa.me/6283117436733?text=Hai%20Owner%20Bisa%20Bantu%20Saya?">
            <a target="_blank" rel="noreferrer noopener" aria-label="User">
              <RiUserFill size={20} className="hover:text-third" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
