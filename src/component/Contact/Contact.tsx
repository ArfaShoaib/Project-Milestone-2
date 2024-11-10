"use client";
import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container} id="Contacts">
      <section className={styles.section}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Contact Me</h1>
          <p className={styles.subtitle}>Feel Free To Contact Me.</p>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <div className={styles.inputContainer}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.inputContainer}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.formGroupFull}>
              <div className={styles.inputContainer}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.messageBox}
                  placeholder="Write your message here..."
                  rows={6}
                ></textarea>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Send Message</button>
            </div>
            <div className={styles.contactInfo}>
              <a className={styles.email}>example@email.com</a>
              <p className={styles.address}>
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
              <span className={styles.socialLinks}>
                <a className={styles.socialLink}>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className={styles.icon}
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className={styles.socialLink}>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className={styles.icon}
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className={styles.socialLink}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className={styles.icon}
                    viewBox="0 0 24 24"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a className={styles.socialLink}>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className={styles.icon}
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;