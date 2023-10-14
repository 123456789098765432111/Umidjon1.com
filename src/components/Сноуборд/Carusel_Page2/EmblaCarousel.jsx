import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import imageByIndex from './imageByIndex'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,  
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  const [soz,setSoz] = useState([
    {
      title:"Сноуборды"
    },
    {
      title:"Крепления"
    },
    {
      title:"Обувь"
    },
    {
      title:"Наборы"
    },
    {
      title:"Куртки"
    },
    {
      title:"Штаны"
    },
    {
      title:"Шлемы"
    },
    {
      title:"Очки"
    },
    {
      title:"Перчатки"
    },
  ])
  useEffect(()=>{
    slides.push(soz)
    console.log(slides[9]);
  },[])
  return (
    <div className="embla45 Component_Container12 mt-5" style={{color:"#222"}}>
      <div className="embla__viewport45" ref={emblaRef}>
        <div className="embla__container45">
          {slides.map((item,index) => (
            <div className="embla__slide45" key={index}>
              <img
                className="embla__slide__img45"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
              <div style={{color:"#222"}}>
              {console.log(item.title)}
              </div>
              <div>
               
              </div>
                  
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons45">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}

export default EmblaCarousel
