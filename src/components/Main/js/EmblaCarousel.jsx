import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import imageByIndex from './imageByIndex'
import { useMediaQuery } from "react-responsive";
const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  const isSmallScreen = useMediaQuery({ query: "(max-width: 480px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 890px)" });
  const isLargeScreen = useMediaQuery({ query: "(max-width: 1274px)" });

  return (
    <div
      className="embla1"
      dir="rtl"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ zIndex: "0" }}
    >
      <div className="embla__viewport1" ref={emblaRef}>
        <div className="embla__container1">
          {slides.map((index) => (
            <div className="embla__slide1" key={index}>
              <div className="embla__slide__number1"></div>
              <img
                className="embla__slide__img1"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="embla__buttons1 position-relative"
        // Hide the buttons on small screens
  
      >
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

    </div>
  )
}

export default EmblaCarousel
