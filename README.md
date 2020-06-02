# react-progress-loading

>Light weight react library to progressively load images using a medium like blur effect.

[![NPM](https://img.shields.io/npm/v/react-progress-loading.svg)](https://www.npmjs.com/package/react-progress-loading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-progress-loading
yarn add react-progress-loading
```

## Example

![alt text](https://drive.google.com/file/d/172pPev0MhvAM3R1oOzwV2wsWmjQgB6NH/view?usp=sharing)

## Usage

```jsx
import React, { Component } from 'react'

import ProgressiveImage from 'react-progress-loading'

class Example extends Component {
  render() {
    return (<ProgressiveImage
          originalImageSrc={originalImage} //requied
          smallImageSrc={smallImage} //required
          containerDivStyles={{}}
          smallImageStyles={{}}
          originalImageStyles={{}}
    />)
  }
}
```

## License

MIT © [arnavozil](https://github.com/arnavozil)
