"use client";
import React, { useEffect } from "react";
import style from "./Project.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={style.pro} id="Projects">
      <div>
        <h1 className={style.heading}>Project</h1>
        <hr className={style.horizontol} />
      </div>
      <div
        className={style.cardContainer}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {/* Project 1 */}
        <div className={style.leftside}>
          <Image
            src="/dynamicresume.png"
            alt="Project 1 Image"
            width={500}
            height={300}
            className={style.projectImage}
          />
        </div>
        <div className={style.rightside}>
          <h1 className={style.projecttitle}>Static And Dynamic Editable Resume</h1>
          <p className={style.description}>
            Dynamic Resume Building With HTML,CSS,TYPESCRIPT/JAVASCRIPT.
          </p>
          <div className={style.techStack}>
            <span>HTML</span>
            <span>CSS</span>
            <span>Typescript/Javascript</span>
          </div>
          <div className={style.buttons}>
            <Link href="https://mileston-3-sigma.vercel.app/" target="_blank">
              <button className={style.liveBtn}>Live Demo</button>
            </Link>
            <Link href="https://github.com/ArfaShoaib/HACKATHONS" target="_blank">
              <button className={style.codeBtn}>View Code</button>
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className={style.leftside}>
          <Image
            src="/coffeeweb.png"
            alt="Project 2 Image"
            width={500}
            height={300}
            className={style.projectImage}
          />
        </div>
        <div className={style.rightside}>
          <h1 className={style.projecttitle}>Animated Coffee Website</h1>
          <p className={style.description}>
            Coffee Websit Built With Nextjs , TailwindCSS , Framer Motion
          </p>
          <div className={style.techStack}>
            <span>Next.js</span>
            <span>Tailwind CSS</span>
            <span>Framer Motion</span>
          </div>
          <div className={style.buttons}>
            <Link href="https://assigment-nextjs-3.vercel.app/" target="_blank">
              <button className={style.liveBtn}>Live Demo</button>
            </Link>
            <Link href="https://github.com/ArfaShoaib/ASSIGMENT-NEXTJS-3" target="_blank">
              <button className={style.codeBtn}>View Code</button>
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className={style.leftside}>
          <Image
            src="/cssprot.png"
            alt="Project 3 Image"
            width={500}
            height={300}
            className={style.projectImage}
          />
        </div>
        <div className={style.rightside}>
          <h1 className={style.projecttitle}>Portfolio</h1>
          <p className={style.description}>
            Portfolio Built With HTML , CSS, Bootstarp
          </p>
          <div className={style.techStack}>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
          </div>
          <div className={style.buttons}>
            <Link href="https://portfolio-kappa-hazel-11.vercel.app/" target="_blank">
              <button className={style.liveBtn}>Live Demo</button>
            </Link>
            <Link href="https://github.com/ArfaShoaib/PORTFOLIO" target="_blank">
              <button className={style.codeBtn}>View Code</button>
            </Link>
          </div>
        </div>

        {/* Project 4 */}
        <div className={style.leftside}>
          <Image
            src="/nextjsport.png"
            alt="Project 4 Image"
            width={500}
            height={300}
            className={style.projectImage}
          />
        </div>
        <div className={style.rightside}>
          <h1 className={style.projecttitle}>Second Portfolio</h1>
          <p className={style.description}>
            Second Portfolio Built With Next.js , TailwindCSS
          </p>
          <div className={style.techStack}>
            <span>Next.js</span>
            <span>TailwindCSS</span>
          </div>
          <div className={style.buttons}>
            <Link href="https://portfolio-2-swart-nine.vercel.app/" target="_blank">
              <button className={style.liveBtn}>Live Demo</button>
            </Link>
            <Link href="https://github.com/ArfaShoaib/PORTFOLIO2" target="_blank">
              <button className={style.codeBtn}>View Code</button>
            </Link>
          </div>
        </div>
        {/* Project 4 */}
        <div className={style.leftside}>
          <Image
            src="/Assignment-5.png"
            alt="Project 4 Image"
            width={500}
            height={300}
            className={style.projectImage}
          />
        </div>
        <div className={style.rightside}>
          <h1 className={style.projecttitle}>Figma/Design To Code</h1>
          <p className={style.description}>
            Develop Header From Figma To Nextjs .
          </p>
          <div className={style.techStack}>
            <span>Next.js</span>
            <span>TailwindCSS</span>
            <span>Figma</span>
          </div>
          <div className={style.buttons}>
            <Link href="https://assignment-5-next-js.vercel.app/" target="_blank">
              <button className={style.liveBtn}>Live Demo</button>
            </Link>
            <Link href="https://github.com/ArfaShoaib/Assignment-5-Next.js" target="_blank">
              <button className={style.codeBtn}>View Code</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
