import React from 'react'

import { EmojiAnimationButton } from 'react-emoji-animation-button'
import 'react-emoji-animation-button/dist/index.css'

const App = () => {
  return (
    <div style={{ padding: "3em" }}>
      <EmojiAnimationButton
        text="😱"
        complete="👍"
        count={5}
        initClicked={false}
      />
    </div>
  )
}

export default App
