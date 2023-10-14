import React, { useEffect, useState } from 'react';
import { Container_Images, Footer, Header, Header2, Navbar, Section, Section1 } from "../index";
import EmblaCarousel from '../Main/js/EmblaCarousel';
import '../Main/css/base.css';
import '../Main/css/sandbox.css';
import '../Main/css/embla.css';
import EmblaCarousel1 from '../CarouselComponent/js/EmblaCarousel1';
import EmblaCarousel3 from '../CaruselComponent2/CarouselComponent/js/EmblaCarousel3';
import EmblaCarouselVideo from '../CaruselVideo/js/EmblaCarouselVideo';
import Section3 from '../Section3/Section3';
import Сноуборд from "../Сноуборд/Сноуборд";
import Лыжи from "../Лыжи/Лыжи"
import { Route, Routes, useLocation, useParams } from 'react-router-dom';

const OPTIONS = { dragFree: true, direction: 'rtl', loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const OPTIONS1 = { containScroll: 'trimSnaps' };
const SLIDE_COUNT1 = 8;
const SLIDES1 = Array.from(Array(SLIDE_COUNT1).keys());

const OPTIONS2 = { containScroll: 'trimSnaps' };
const SLIDE_COUNT2 = 8;
const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys());

const OPTIONS3 = { dragFree: true, direction: 'rtl', loop: true };
const SLIDE_COUNT3 = 3;
const SLIDES3 = Array.from(Array(SLIDE_COUNT3).keys());

const App = () => {
  const location = useLocation();
  const { param } = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
console.log(location);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <Header2 />
      <Navbar />

      <Routes>
        <Route path='/Сноуборд' element={<Сноуборд />} />
        <Route path='/Лыжи' element={<Лыжи/>} />
      </Routes>

      {location.pathname !== '/%D0%A1%D0%BD%D0%BE%D1%83%D0%B1%D0%BE%D1%80%D0%B4'&& location.pathname !== "/%D0%9B%D1%8B%D0%B6%D0%B8" ? (
        <>
          <main style={{ zIndex: "0" }} className='sandbox1'>
            <section className='sandbox__carousel1 Component_Container1'>
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
          </main>
          <Section />
          <Section1 />
          <main className='sandbox'>
            <section className='sandbox__carousel Component_Container2'>
              <EmblaCarousel1 slides={SLIDES1} options={OPTIONS1} />
            </section>
          </main>
          <Container_Images />
          <main className='sandbox'>
            <section className='sandbox__carousel Component_Container2'>
              <EmblaCarousel3 slides={SLIDES2} options={OPTIONS2} />
            </section>
          </main>
          <main className='sandbox2'>
            <section className='sandbox__carousel2 Component_Container1'>
              <EmblaCarouselVideo slides={SLIDES3} options={OPTIONS3} />
            </section>
          </main>
          <Section3 />
          <Footer />
        </>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default App;
