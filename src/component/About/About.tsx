'use client';
import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";



const About = () => {
    useEffect(()=>{
        AOS.init({
          duration:1000,
        })
        }, [])
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.leftSide}data-aos="fade-right">
        <div className={styles.imageWrapper} >
          <Image
            src={"/bg-2.png"}
            alt="About Me"
            width={500}
            height={500}
            priority
            className={styles.aboutImage}
          />
          <div className={styles.imageBg}></div>
          <div className={styles.imageShape}></div>
        </div>
      </div>
      
      <div className={styles.rightSide} data-aos="zoom-in">
        <h2>About Me</h2>
        <div className={styles.content}>
          <p className={styles.mainText}>
            Hi! I&apos;m Arfa Shoaib, a passionate Front-End Developer with a keen eye for creating 
            beautiful and functional web experiences. With expertise in modern web technologies, 
            I transform ideas into reality through clean and efficient code.
          </p>
          
          <div className={styles.skillsSection}>
            <h3>My Skills</h3>
            <div className={styles.skills}>
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind</span>
            </div>
          </div>

          <div className={styles.statsSection}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;