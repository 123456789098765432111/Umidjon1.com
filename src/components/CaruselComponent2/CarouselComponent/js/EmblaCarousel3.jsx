import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import imageByIndex from './imageindex'
import "../css/base.css"
import "../css/embla.css"
import "../css/sandbox.css"

const EmblaCarousel3 = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla"   data-aos="fade-up"
    data-aos-duration="2000">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
             <div className='Background_img'>
               <div className="embla__slide__number">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                 <circle cx="20" cy="20" r="20" fill="black"/>
                 <path d="M20 25.0737L26.18 29L24.54 21.6L30 16.6211L22.81 15.9684L20 9L17.19 15.9684L10 16.6211L15.45 21.6L13.82 29L20 25.0737Z" fill="#F2F2F2"/>
               </svg>
               </div>
               <img
                 className="embla__slide__img"
                 src={imageByIndex(index)}
                 alt="Your alt text"
               />
             </div>
             {/* <div className='Page_box_text'>
              <h4 >
              LIB TECH
              </h4>
              <p className='p_img'>
              Мужской Сноуборд
              </p>
              <p>
              34392 ₽
              </p>

             </div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
      <button className='btn_page'>Показать больше</button>
    </div>
  )
}

export default EmblaCarousel3
