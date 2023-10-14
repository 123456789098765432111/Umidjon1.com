import React, { useCallback, useEffect, useState } from 'react'
import "../css/base.css"
import "../css/embla.css"
import "../css/sandbox.css"
export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button12 embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="31" viewBox="0 0 16 31" fill="none">
  <path d="M14.7144 29.8944L1.00007 15.4103L14.7144 0.926147" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="31" viewBox="0 0 16 31" fill="none">
  <path d="M1 29.8944L14.7142 15.4103L1 0.926147" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      {children}
    </button>
  )
}
