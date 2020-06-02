import React from 'react'

import ProgressiveImage from 'react-progress-loading'
// import 'react-progress-loading/dist/index.css'

import originalImage from './assets/original';
import smallImage from './assets/small';

const App = () => {
  return (
    <ProgressiveImage
     originalImageSrc={originalImage}
     smallImageSrc={smallImage}
     containerDivStyles={{}}
     smallImageStyles={{}}
     originalImageStyles={{}}
    />
  )
}

export default App
