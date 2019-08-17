import React, { useState } from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

function Slider ({
  width = '100%',
  itemWidth = 200,
  lastDisplayItemCounts = 1,
  type = 'scroll',
  onClickPrevButton,
  onClickNextButton,
  children
}) {
  const [visibleFirstItemIndex, setVisibleFirstItemIndex] = useState(0)
  const sliderItems = (
    <div
      className={classnames(styles.slider,{
        [styles.scrollSlider]: type === 'scroll',
        [styles.manualSlider]: type === 'manual'
      })}
      style={{ width, transform: `translateX(-${type === 'scroll' ? 0 : itemWidth * visibleFirstItemIndex}px)` }}
    >
      {children}
    </div>
  )

  return type === 'scroll' ? sliderItems : (
    <div
      className={styles.sliderWrapper}
      style={{ width }}
    >
      {onClickPrevButton &&
        <button className={styles.prevButton} onClick={(e) => {
          if (visibleFirstItemIndex < 1) return
          setVisibleFirstItemIndex(visibleFirstItemIndex - 1)
          onClickPrevButton(e)
        }} />
      }
      {sliderItems}
      {onClickNextButton &&
        <button className={styles.nextButton} onClick={(e) => {
          if ((children.length - visibleFirstItemIndex) < lastDisplayItemCounts + 1) return
          setVisibleFirstItemIndex(visibleFirstItemIndex + 1)
          onClickNextButton(e)
        }} />
      }
    </div>
  )
}

export default Slider
