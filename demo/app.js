import React from 'react'
import ReactDom from 'react-dom'
import Slider from '../src'

function App () {
  return (
    <>
      <h2>Examples</h2>
      <h4>Scroll</h4>
      <Slider
        width={800}
      >
        <img src='./images/sample_image.jpg' height='200px' />
        <img src='./images/sample_image2.jpg' height='200px' />
        <img src='./images/sample_image3.jpg' height='200px' />
        <img src='./images/sample_image.jpg' height='200px' />
        <img src='./images/sample_image2.jpg' height='200px' />
      </Slider>

      <h4>with Prev, Next</h4>
      <Slider
        width={800}
        type='manual'
        itemWidth={356}
        onClickPrevButton={() => console.log('prev')}
        onClickNextButton={() => console.log('next')}
      >
        <img src='./images/sample_image.jpg' height='200px' />
        <img src='./images/sample_image2.jpg' height='200px' />
        <img src='./images/sample_image3.jpg' height='200px' />
        <img src='./images/sample_image.jpg' height='200px' />
        <img src='./images/sample_image2.jpg' height='200px' />
      </Slider>
    </>
  )
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
