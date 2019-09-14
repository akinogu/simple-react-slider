import React from 'react'
import ReactDom from 'react-dom'
import Slider from '../dist/index.js'
import image1 from './images/sample_image.jpg'
import image2 from './images/sample_image2.jpg'
import image3 from './images/sample_image3.jpg'

function App () {
  return (
    <>
      <h2>Examples</h2>
      <h4>Scroll</h4>
      <Slider
        width={800}
      >
        <img src={image1} height='200px' />
        <img src={image2} height='200px' />
        <img src={image3} height='200px' />
        <img src={image1} height='200px' />
        <img src={image2} height='200px' />
      </Slider>

      <h4>with Prev, Next</h4>
      <Slider
        width={800}
        type='manual'
        itemWidth={356}
        onClickPrevButton={() => console.log('prev')}
        onClickNextButton={() => console.log('next')}
      >
        <img src={image1} height='200px' />
        <img src={image2} height='200px' />
        <img src={image3} height='200px' />
        <img src={image1} height='200px' />
        <img src={image2} height='200px' />
      </Slider>
    </>
  )
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
