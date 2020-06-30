import React from 'react'
import styles from '../styles.module.css'

export const Button = ({ text }) => {
  return (
    <div className={styles.buttonContainer}>
      <a className={styles.button}>{text}</a>
    </div>
  )
}