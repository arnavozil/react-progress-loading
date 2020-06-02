import React, {useRef} from 'react'

const s = {
  master: {
      position: 'relative',
      width: '100vw',
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      borderRadius: '.25rem',
      height: '100vh',
      overflow: 'hidden',
      display: 'inline-block',
      border: '1px solid #00000000',
  },

  smallImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      transition: 'all 5s ease',
      filter: 'blur(2rem)',
      webkitFilter: 'blur(2rem)',
  },

  bigImage: {
      position: 'absolute',
      margin: 0,
      transition: 'all 1s ease',
      padding: 0,
      opacity: 0,
      width: '100%',
      height: '100%',
  }
}
const ProgressiveImage = ({originalImageSrc, smallImageSrc, containerDivStyles, smallImageStyles, originalImageStyles}) => {
  const imageRef = useRef(null);
  const smallRef = useRef(null);
  const onImageLoad = () => {
      imageRef.current.style.opacity=1;
      smallRef.current.style.opacity=0;
  }

  return(
      <React.Fragment>
          <div style={{...s.master, ...containerDivStyles}}>
              <img style={{...s.smallImage, ...smallImageStyles}} ref={smallRef} src={smallImageSrc} />
              <img style={{...s.bigImage, ...originalImageStyles}} ref={imageRef} onLoad={onImageLoad} src={originalImageSrc} />
          </div>
      </React.Fragment>
  )
};

export default ProgressiveImage;
