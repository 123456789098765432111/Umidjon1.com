import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import imageByIndex from './imageByIndex'
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import {Media, Video } from '@vidstack/player-react';
const EmblaCarouselVideo = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  useEffect(()=>{
    slides.push()
  },[])
  return (
    <div className="embla1" dir="rtl" data-aos="fade-up"
    data-aos-duration="2000">
      <div className="embla__viewport1 " ref={emblaRef}>
        <div className="embla__container1 ">
          {slides.map((index) => (
            <div className="embla__slide1" key={index}>
             
             <div className=" d-flex h-100"  style={{backgroundColor:"#222"}}>
                  <div className='border w-50' style={{height:"390px",alignItems:"center",color:"#222",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                   <div className='d-flex justify-content-between w-75 '>
                    <a href="" style={{fontSize:"20px",lineHeight:"30px"}}>
                    Все блоги
                    </a>
                    <h5 style={{fontSize:"20px",lineHeight:"30px",color:"#fff"}}>Блоги</h5>

                   </div>
                   <div className='d-flex justify-content-center p_page'>
                    <p className='text-start w-75' style={{color:" var(--828282, #828282)",fontSize:"15px",lineHeight:"25px"}}>
                    Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому. 
                    Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому...
                    </p>
                   </div>
                   <div className=' w-75 text-start'>
                    <a href="" style={{fontSize:"15px",textAlign:"start"}}>
                    Читать продолжение
                    </a>
                   </div>
                  </div>
                  <div className='border w-50' style={{height:"390px"}}>
                  <Media >
                <Video loading="visible" poster="https://media-files.vidstack.io/poster.png" controls preload="true">
                  <video loading="visible" poster="https://media-files.vidstack.io/poster-seo.png" src="https://media-files.vidstack.io/720p.mp4" preload="none" data-video="0" controls />
                </Video>
              </Media>
                  </div>
             </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons1 position-relative">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}    />
      </div>
    </div>
  )
}

export default EmblaCarouselVideo
