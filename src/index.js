import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import mojs from "@mojs/core";

import { Counter } from './components/counter'
import { Button } from './components/button'

export const EmojiAnimationButton = ({ text, complete, count, initClicked }) => {

  const [buttonText, setButtonText] = useState(null)
  const [buttonCount, setButtonCount] = useState(count)
  const [buttonClicked, setButtonClicked] = useState(initClicked)

  const [animationTimeline, setAnimationTimeline] = useState(null)
  const [buttonBurst, setButtonBurst] = useState(null)
  const [buttonCircleBurst, setButtonCircleBurst] = useState(null)

  const buttonRef = useRef()

  useEffect(() => {
    if (buttonClicked) {
      setButtonText(complete)
    } else {
      setButtonText(text)
    }
  }, [buttonClicked])

  useEffect(() => {
    setButtonBurst(
      new mojs.Burst({
        parent: buttonRef.current,
        radius: { 50: 95 },
        count: 5,
        angle: 30,
        children: {
          shape: 'polygon',
          radius: { 6: 0 },
          scale: 1,
          stroke: 'rgba(211,84,0 ,0.5)',
          strokeWidth: 2,
          angle: 210,
          delay: 30,
          speed: 0.2,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
          duration: 300,
        }
      })
    )

    setButtonCircleBurst(
      new mojs.Burst({
        parent: buttonRef.current,
        radius: { 50: 75 },
        angle: 25,
        duration: 300,
        children: {
          shape: 'circle',
          fill: 'rgba(149,165,166 ,0.5)',
          delay: 30,
          speed: 0.2,
          radius: { 3: 0 },
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        }
      })
    )

    new mojs.Html({
      el: buttonRef.current,
      x: {
        0: 50
      },
    })

    setAnimationTimeline(new mojs.Timeline())
  }, [])


  const onClick = () => {
    if (buttonClicked) {
      setButtonCount(buttonCount - 1)
    } else {
      setButtonCount(buttonCount + 1)
      animationTimeline.add([
        buttonBurst,
        buttonCircleBurst,
      ])
      animationTimeline.replay()
    }
    setButtonClicked(!buttonClicked)
  }

  return (
    <div className={styles.container}>
      <Counter count={buttonCount} />
      <div ref={buttonRef} onClick={onClick}>
        <Button text={buttonText} />
      </div>
    </div>
  )
}