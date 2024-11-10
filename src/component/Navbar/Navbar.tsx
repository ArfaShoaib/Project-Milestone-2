"use client";
import React from "react";
import style from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Link href={"/"} className={style.link}>
          Home
        </Link>
        <Link href={"#Projects"} className={style.link}>
          Project
        </Link>
        <Link href={"#Contacts"} className={style.link}>
          Contact
        </Link>
       
      </div>
    </div>
  );
};

export default Navbar;
