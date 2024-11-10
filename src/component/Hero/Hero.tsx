import React from "react";
import Image from "next/image";
import style from "./Hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSide} data-aos="fade-right">
        <h1>I am Arfa Shoaib</h1>
        <p>I am Front-End Developer</p>
      </div>
      <div className={style.rightSide} data-aos="fade-left">
        <Image src={"/image.png"} alt="img" width={700} height={400}></Image>
      </div>
      <div className={style.button}>
        <Link href="#Projects">
          <button data-aos="fade-right">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
