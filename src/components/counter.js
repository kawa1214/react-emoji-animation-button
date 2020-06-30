import React from 'react'
import styles from '../styles.module.css'

export const Counter = ({ count }) => {
  return (
    <div className={styles.counterContainer}>
      {count}
    </div>
  )
}