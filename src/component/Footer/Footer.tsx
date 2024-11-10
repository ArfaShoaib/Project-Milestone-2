import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <Image
            src={"/vector.png"}
            alt="About Me"
            width={500}
            height={500}
            priority
            className={styles.Footer}
          />
    </div>
  )
}

export default Footer
