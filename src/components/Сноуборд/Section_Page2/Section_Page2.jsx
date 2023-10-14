import axios from 'axios';
import React, { useState } from 'react'
import 'rodal/lib/rodal.css';
import "./Section_page2.css"
import img1 from "./img/image 9 (4).jpg"
import img2 from "./img/image 9 (3).jpg"
import img3 from "./img/Rectangle 440.jpg"
import img4 from "./img/image 9 (2).jpg"
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
// Крепления

import img5 from "./img_page/Сноуборды navbor/img1.webp"
import img6 from "./img_page/Сноуборды navbor/img4.webp"
import img7 from "./img_page/Сноуборды navbor/img3.webp"
import img8 from "./img_page/Сноуборды navbor/img4.webp"
import img9 from "./img_page/Сноуборды navbor/img5.jpg"
import img10 from "./img_page/Сноуборды navbor/img6.jpeg"
import img11 from "./img_page/Сноуборды navbor/img7.jpeg"
import img12 from "./img_page/Сноуборды navbor/img8.jpg"

// obi
import img13 from "./img_page/Snowbord obuv/img1.webp"
import img14 from "./img_page/Snowbord obuv/img2.jpg"
import img15 from "./img_page/Snowbord obuv/img3.jpg"
import img16 from "./img_page/Snowbord obuv/img4.webp"
import img17 from "./img_page/Snowbord obuv/img6.jpg"
import img18 from "./img_page/Snowbord obuv/img7.jpg"
import img19 from "./img_page/Snowbord obuv/img8.jpg"

// navbor
import img20 from "./img_page/Сноуборды navbor/img1.webp"
import img21 from "./img_page/Сноуборды navbor/img3.jpg"
import img22 from "./img_page/Сноуборды navbor/img3.webp"
import img23 from "./img_page/Сноуборды navbor/img4.webp"
import img24 from "./img_page/Сноуборды navbor/img5.jpg"
import img25 from "./img_page/Сноуборды navbor/img6.jpeg"
import img26 from "./img_page/Сноуборды navbor/img7.jpeg"
import img27 from "./img_page/Сноуборды navbor/img8.jpg"

// oyoq
import img28 from "./img_page/Snowbord obuv/img1.webp"
import img29 from "./img_page/Snowbord obuv/img2.jpg"
import img30 from "./img_page/Snowbord obuv/img3.jpg"
import img31 from "./img_page/Snowbord obuv/img4.webp"
import img32 from "./img_page/Snowbord obuv/img6.jpg"
import img33 from "./img_page/Snowbord obuv/img7.jpg"
import img34 from "./img_page/Snowbord obuv/img8.jpg"

// ishtan
import img35 from "./img_page/Штаны/img1.jpg"
import img36 from "./img_page/Штаны/img2.jpg"
import img37 from "./img_page/Штаны/img3.jpg"
import img38 from "./img_page/Штаны/img4.jpg"
import img39 from "./img_page/Штаны/img5.jpg"
import img40 from "./img_page/Штаны/img5.webp"
import img41 from "./img_page/Штаны/img6.avif"
import img42 from "./img_page/Штаны/img7.jpg"
import img43 from "./img_page/Штаны/img8.jpg"


// 
import img44 from "./img_page/shelem/img1.webp"
import img45 from "./img_page/shelem/img2.avif"
import img46 from "./img_page/shelem/img3.jpg"
import img47 from "./img_page/shelem/img4.jpg"
import img48 from "./img_page/shelem/img6.jpg"
import img49 from "./img_page/shelem/img7.jpg"
import img50 from "./img_page/shelem/img8.jpg"
import img51 from "./img_page/shelem/img9.webp"

// ochki
import img52 from "./img_page/ochki/img1.jpg"
import img53 from "./img_page/ochki/img2.jpg"
import img54 from "./img_page/ochki/img3.jpg"
import img55 from "./img_page/ochki/img4.jpg"
import img56 from "./img_page/ochki/img5.jpg"
import img57 from "./img_page/ochki/img6.jpg"
import img58 from "./img_page/ochki/img7.jpg"
import img59 from "./img_page/ochki/img8.jpg"


// perchatki 

import img60 from "./img_page/perchatki/img1.jpg"
import img61 from "./img_page/perchatki/img2.jpg"
import img62 from "./img_page/perchatki/img3.jpg"
import img63 from "./img_page/perchatki/img4.jpg"
import img64 from "./img_page/perchatki/img5.jpg"
import img65 from "./img_page/perchatki/img6.jpg"
import img66 from "./img_page/perchatki/img7.jpg"
import img67 from "./img_page/perchatki/img8.jpg"

// kurtki 

import img68 from "./img_page/Сноуборды Куртки/Сноуборды Куртки/i (1).webp"
import img69 from "./img_page/Сноуборды Куртки/Сноуборды Куртки/i (2).webp"
import img70 from "./img_page/Сноуборды Куртки/Сноуборды Куртки/i (3).webp"
import img71 from "./img_page/Сноуборды Куртки/Сноуборды Куртки/i (4).webp"
import img72 from "./img_page/Сноуборды Куртки/Сноуборды Куртки/i (5).webp"
import img73 from "./img_page/Сноуборды Куртки/Сноуборды Куртки/i (6).webp"
import img74 from "./img_page/Сноуборды Куртки/Сноуборды Куртки/i (7).webp"
import img75 from "./img_page/Сноуборды Куртки/Сноуборды Куртки/i (8).webp"
import img76 from "./img_page/Сноуборды Куртки/Сноуборды Куртки/i.webp"


import Pagination from './Pagination ';
function Section_Page2(){
  const [logo ,setLogo] = useState(<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="19.5" fill="white" stroke="#F2F2F2"/>
  <path d="M20.2681 24.6517L20 24.4813L19.7319 24.6517L14.567 27.933L15.9383 21.7076L16.0004 21.4256L15.7872 21.2309L11.1742 17.0165L17.2352 16.4664L17.5395 16.4388L17.6537 16.1554L20 10.3369L22.3463 16.1554L22.4605 16.4388L22.7648 16.4664L28.8244 17.0164L24.2031 21.2305L23.9892 21.4256L24.0518 21.7082L25.4311 27.9319L20.2681 24.6517Z" stroke="black"/>
</svg>)
  const [todos, setTodos] = useState(
     [
      {
        title: "LIB TECH",
        Narx: "34392 ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img1,
        logo:logo,
        group1:"Все товары",
        brend:"DC Shoes",
        brend4:"One Size"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img2,
        logo:logo,
        brend:"DC Shoes",
        brend4:"One Size",

       group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img2,
        logo:logo,
        brend4:"One Size",

         group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img4,
        logo:logo,
        brend4:"One Size",

      group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img2,
        logo:logo,
        brend4:"One Size",

      group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img2,
        logo:logo,
      group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img2,
        brend4:"One Size",
        brend23:"Оранжевый",

        logo:logo,
      group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img2,
        logo:logo,
        brend23:"Оранжевый",

      group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img4,
        logo:logo,
        brend23:"Оранжевый",
      group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img2,
        logo:logo,
        brend23:"Оранжевый",
      group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img2,
        brend4:"One Size",
        brend23:"Оранжевый",

        logo:logo,
      group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img4,
        logo:logo,
        brend23:"Оранжевый",
         group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Сноуборды",
        body:"Мужской Сноуборд",
        img: img2,
        logo:logo,
        brend4:"One Size",
        brend22:"Желтый",

      group1:"Все товары"

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Крепления",
        body:"Мужской Крепления",
        img: img5,
        logo:logo,
        brend2:"BoardRiders",
        brend22:"Желтый",
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Крепления",
        body:"Мужской Крепления",
        img: img6,
        logo:logo,
        brend22:"Желтый",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Крепления",
        body:"Мужской Крепления",
        img: img7,
        logo:logo,
        brend4:"One Size",
        brend22:"Желтый",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Крепления",
        body:"Мужской Крепления",
        img: img8,
        brend22:"Желтый",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Крепления",
        body:"Мужской Крепления",
        img: img9,
        brend4:"One Size",
        brend22:"Желтый",
        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Крепления",
        body:"Мужской Крепления",
        img: img10,
        brend2:"BoardRiders",
        brend21:"Синий",


        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Крепления",
        body:"Мужской Крепления",
        img: img11,
        logo:logo,
        brend2:"BoardRiders",
        brend21:"Синий",


        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Крепления",
        body:"Мужской Крепления",
        img: img12,
        brend2:"BoardRiders",
        brend21:"Синий",


        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской Обувь",
        img: img13,
        brend2:"BoardRiders",
        brend21:"Синий",


        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской Обувь",
        img: img14,
        brend2:"BoardRiders",
        brend21:"Синий",
        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской Обувь",
        img: img15,
        brend2:"BoardRiders",
        brend20:"Красный",


        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской Обувь",
        img: img16,
        brend20:"Красный",


        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской Обувь",
        img: img17,
        brend2:"BoardRiders",
        brend20:"Красный",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской Обувь",
        img: img18,
        logo:logo,
        brend2:"BoardRiders",
        brend20:"Красный",


        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской Обувь",
        img: img19,
        brend2:"BoardRiders",
        brend20:"Красный",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Наборы",
        body:"Мужской Наборы",
        img: img20,
        logo:logo,
        brend19:" Белый",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Наборы",
        body:"Мужской Наборы",
        img: img21,
        logo:logo,
        brend19:" Белый",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Наборы",
        body:"Мужской Наборы",
        brend:"DC Shoes",

        img: img22,
        logo:logo,
        brend19:" Белый",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Наборы",
        body:"Мужской Наборы",
        img: img23,
        logo:logo,
        brend19:" Белый",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Наборы",
        body:"Мужской Наборы",
        img: img24,
        logo:logo,
        brend18:"Черный",
        brend19:" Белый",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Наборы",
        body:"Мужской Наборы",
        img: img25,
        logo:logo,
        brend18:"Черный",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Наборы",
        body:"Мужской Наборы",
        img: img26,
        logo:logo,
        brend18:"Черный",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Наборы",
        body:"Мужской Наборы",
        img: img27,
        brend14:"Recco",
        brend18:"Черный",
        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской  Куртки",
        img: img28,
        logo:logo,
        brend14:"Recco",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской  Куртки",
        img: img29,
        brend14:"Recco",

        logo:logo,
        group1:"Все товары"
      },

      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской  Куртки",
        img: img30,
        brend14:"Recco",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской  Куртки",
        img: img31,
        logo:logo,
        brend14:"Recco",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской  Куртки",
        img: img32,
        brend14:"Recco",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской  Куртки",
        img: img33,
        brend13:"The Channel",
        brend14:"Recco",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Обувь",
        body:"Мужской  Куртки",
        img: img34,
        logo:logo,
        brend13:"The Channel",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img35,
        logo:logo,
        brend13:"The Channel",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img36,
        logo:logo,
        brend13:"The Channel",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img38,
        brend12:"Magne Traction",
        brend13:"The Channel",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img38,
        logo:logo,
        brend12:"Magne Traction",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img39,
        logo:logo,
        brend12:"Magne Traction",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img40,
        logo:logo,
        brend12:"Magne Traction",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img41,
        brend11:"Est",
        brend12:"Magne Traction",
        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img42,
        logo:logo,
        brend11:"Est",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img43,
        brend11:"Est",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img38,
        brend11:"Est",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Штаны",
        body:"Мужской  Куртки",
        img: img43,
        logo:logo,
        brend11:"Est",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img45,
        logo:logo,
        brend11:"Est",

        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img46,
        logo:logo,
        brend11:"Est",

        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img45,
        logo:logo,
        brend3:"Billabong",
        brend11:"Est",

        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img48,
        brend10:"Step On",
        brend11:"Est",
        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img46,
        brend10:"Step On",

        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img45,
        brend10:"Step On",

        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        brend3:"Billabong",
        brend10:"Step On",

        body:"Мужской  Куртки",
        img: img45,
        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img49,
        brend2:"BoardRiders",
        brend10:"Step On",

        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img50,
        brend2:"BoardRiders",
        brend3:"Billabong",
        brend10:"Step On",

        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img51,
        brend2:"BoardRiders",
        brend10:"Step On",

        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Шлемы",
        body:"Мужской  Куртки",
        img: img48,
        brend9:"BOA",
        brend10:"Step On",
        brend2:"BoardRiders",
        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Очки",
        brend9:"BOA",

        body:"Мужской  Куртки",
        img: img52,
        logo:logo,
        brend3:"Billabong",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Очки",
        body:"Мужской  Куртки",
        img: img53,
        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Очки",
        body:"Мужской  Куртки",
        img: img54,
        brend3:"Billabong",

        logo:logo,
        brend1:"Quicksilver",
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Очки",
        body:"Мужской  Куртки",
        img: img55,
        logo:logo,
        brend1:"Quicksilver",
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Очки",
        body:"Мужской  Куртки",
        img: img56,
        logo:logo,
        brend3:"Billabong",

        brend1:"Quicksilver",
        group1:"Все товары"
      },
    
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        brend9:"BOA",

        group: "Очки",
        body:"Мужской  Куртки",
        img: img57,
        brend:"DC Shoes",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Очки",
        body:"Мужской  Куртки",
        img: img58,
        logo:logo,
        brend1:"Quicksilver",
        group1:"Все товары"
      },
    
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Очки",
        body:"Мужской  Куртки",
        img: img59,
        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img60,
        brend:"DC Shoes",

        logo:logo,
        group1:"Все товары"
      },
    
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img61,
        logo:logo,
        brend:"DC Shoes",
        brend3:"Billabong",
        brend9:"BOA",
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img62,
        logo:logo,
        brend9:"BOA",

        brend8:"M/L",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        brend9:"BOA",

        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img63,
        brend:"DC Shoes",
        brend8:"M/L",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img64,
        logo:logo,
        brend9:"BOA",

        brend8:"M/L",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img65,
        logo:logo,
        brend9:"BOA",

        brend:"DC Shoes",
        brend8:"M/L",

        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img65,
        brend:"DC Shoes",
        brend8:"M/L",


        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img66,
        logo:logo,
        brend:"DC Shoes",
        brend7:"M",
        brend8:"M/L",
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img66,
        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img67,
        brend:"DC Shoes",
        brend7:"M",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Перчатки",
        body:"Мужской  Куртки",
        img: img66,
        logo:logo,
        brend7:"M",

        brend1:"Quicksilver",
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        body:"Мужской  Куртки",
        img: img68,
        brend:"DC Shoes",
        brend7:"M",

        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        body:"Мужской  Куртки",
        img: img69,
        logo:logo,
        brend1:"Quicksilver",
        group1:"Все товары",
        brend7:"M",

      },
          
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        body:"Мужской  Куртки",
        img: img70,
        logo:logo,
        brend:"DC Shoes",
        brend7:"M",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        body:"Мужской  Куртки",
        img: img71,
        logo:logo,
        brend:"DC Shoes",
        brend3:"Billabong",
        brend7:"M",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        body:"Мужской  Куртки",
        img: img72,
        logo:logo,
        brend1:"Quicksilver",
        brend3:"Billabong",
        brend6:"S/M",
        brend7:"M",
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        body:"Мужской  Куртки",
        img: img73,
        brend:"DC Shoes",
        brend3:"Billabong",
        brend6:"S/M",

        logo:logo,
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        body:"Мужской  Куртки",
        img: img74,
        brend1:"Quicksilver",
        brend3:"Billabong",
        logo:logo,
        brend6:"S/M",

        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        body:"Мужской  Куртки",
        img: img75,
        brend1:"Quicksilver",
        brend6:"S/M",

        logo:logo,
        group1:"Все товары"
      },
      
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        body:"Мужской  Куртки",
        img: img76,
        logo:logo,
        brend5:"XS",
        brend6:"S/M",
        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Куртки",
        brend1:"Quicksilver",
        body:"Мужской  Куртки",
        img: img73,
        logo:logo,
        brend5:"XS",

        group1:"Все товары"
      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Только со скидкой",
        body:"Мужской  Куртки",
        img: img76,
        logo:logo,
        group1:"Все товары",
        brend5:"XS",

      },
      {
        title: "LIB TECH",
        Narx: "17392  ₽",
        group: "Только со скидкой",
        body:"Мужской  Куртки",
        brend:"DC Shoes",
        img: img76,
        logo:logo,
        brend5:"XS",
        group1:"Все товары"
      },
      
    ],
  );


  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };


  const [page,setPage] = useState([
    {
      id:1,
      name:"Категории товаров",
      inp:"radio",
      group:"Сноуборды",
      
    },
    {
      id:2,
      inp:"radio",
      group:"Крепления",

    },
    {
      id:3,
      inp:"radio",
      group:"Обувь",

    },
    {
      id:4,
      inp:"radio",
      group:"Наборы",

    },
    {
      id:5,
      inp:"radio",
      group:"Куртки",

    },
    {
      id:6,
      inp:"radio",
      group:"Штаны",

    },
    {
      id:7,
      inp:"radio",
      group:"Шлемы",

    },
    {
      id:8,
      inp:"radio",
      group:"Очки",

    },
    {
      id:9,
      inp:"radio",
      group:"Перчатки",

    },
    {
      id:10,
      name:"Категории товаров",
      inp:"radio",
      group:"Все товары",

    },
    {
      id:11,
      inp:'radio',
      group:"Только со скидкой",
      
    },
    {
      id:12,
      name:"Бренд",
      inp:"radio",
      group:"DC Shoes"
    },
    {
      id:13,
      inp:"radio",
      group:"Quicksilver"
    },
    {
      id:14,
      inp:"radio",
      group:"BoardRiders"
    },
    {
      id:15,
      inp:"radio",
      group:"Billabong"
    },
   
   
    {
      id:18,
      name:"Размер",
      inp:"radio",
      group:"One Size"
    },
    {
      id:19,
      inp:"radio",
      group:"XS"
    },
    
    {
      id:21,
      inp:"radio",
      group:"S/M"
    },
    {
      id:22,
      inp:"radio",
      group:"M"
    },
    {
      id:23,
    
      inp:"radio",
      group:"M/L"
    },
   
    {
      id:24,

      name:"Технологии",
      inp:"radio",
      group:"BOA"
    },
    {
      id:25,
    
      inp:"radio",
      group:"Step On"
    },
    {
      id:26,

    
      inp:"radio",
      group:"Est"
    },
    {
      id:27,
    
      inp:"radio",
      group:"Magne Traction"
    },
    {
      id:28,
    
      inp:"radio",
      group:"The Channel"
    },
    {
      id:29,
    
      inp:"radio",
      group:"Recco"
    },
    {
      id:30,

      name:"Цвет",
      inp:"radio",
      group:"Черный"
    },
    {
      id:31,

      inp:"radio",
      group:"Белый"
    },
    {
      id:32,

      inp:"radio",
      group:"Красный"
    },
    {
      id:33,

      inp:"radio",
      group:"Синий"
    },
    {
      id:34,

      inp:"radio",
      group:"Желтый"
    },
    {
      id:35,

      inp:"radio",
      group:"Оранжевый"
    },
    {
      id:36,

      name:"Забрать сейчас: Москва",
      inp:"radio",
      group:"Название магазина "
    },
    {
      id:37,

      inp:"radio",
      group:"Название магазина "
    },
    {
      id:38,

      inp:"radio",
      group:"Название магазина "
    },
    {
      id:39,

      inp:"radio",
      group:"Название магазина "
    },
  ]) 
// pageneyshin

  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 6;
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    const [selectedGroups, setSelectedGroups] = useState([
      {
        id:1,
        name:"Категории товаров",
        inp:"radio",
        group:"Сноуборды",
        
      },
      {
        id:2,
        inp:"radio",
        group:"Крепления",

      },
      {
        id:3,
        inp:"radio",
        group:"Обувь",

      },
      {
        id:4,
        inp:"radio",
        group:"Наборы",

      },
      {
        id:5,
        inp:"radio",
        group:"Куртки",

      },
      {
        id:6,
        inp:"radio",
        group:"Штаны",

      },
      {
        id:7,
        inp:"radio",
        group:"Шлемы",

      },
      {
        id:8,
        inp:"radio",
        group:"Очки",

      },
      {
        id:9,
        inp:"radio",
        group:"Перчатки",

      },
      {
        id:10,
        name:"Категории товаров",
        inp:"radio",
        group:"Все товары",

      },
      {
        id:11,
        inp:'radio',
        group:"Только со скидкой",
        
      },
      {
        id:12,
        name:"Бренд",
        inp:"radio",
        group:"DC Shoes"
      },
      {
        id:13,
        inp:"radio",
        group:"Quicksilver"
      },
      {
        id:14,
        inp:"radio",
        group:"BoardRiders"
      },
      {
        id:15,
        inp:"radio",
        group:"Billabong"
      },
    
    
      {
        id:18,
        name:"Размер",
        inp:"radio",
        group:"One Size"
      },
      {
        id:19,
        inp:"radio",
        group:"XS"
      },
     
      {
        id:21,
        inp:"radio",
        group:"S/M"
      },
      {
        id:22,
        inp:"radio",
        group:"M"
      },
      {
        id:23,
      
        inp:"radio",
        group:"M/L"
      },
    
      {
        id:24,

        name:"Технологии",
        inp:"radio",
        group:"BOA"
      },
      {
        id:25,
      
        inp:"radio",
        group:"Step On"
      },
      {
        id:26,

      
        inp:"radio",
        group:"Est"
      },
      {
        id:27,
      
        inp:"radio",
        group:"Magne Traction"
      },
      {
        id:28,
      
        inp:"radio",
        group:"The Channel"
      },
      {
        id:29,
      
        inp:"radio",
        group:"Recco"
      },
      {
        id:30,

        name:"Цвет",
        inp:"radio",
        group:"Черный"
      },
      {
        id:31,

        inp:"radio",
        group:"Белый"
      },
      {
        id:32,

        inp:"radio",
        group:"Красный"
      },
      {
        id:33,

        inp:"radio",
        group:"Синий"
      },
      {
        id:34,

        inp:"radio",
        group:"Желтый"
      },
      {
        id:35,

        inp:"radio",
        group:"Оранжевый"
      },
      {
        id:36,

        name:"Забрать сейчас: Москва",
        inp:"radio",
        group:"Название магазина "
      },
      {
        id:37,

        inp:"radio",
        group:"Название магазина "
      },
      {
        id:38,

        inp:"radio",
        group:"Название магазина "
      },
      {
        id:39,

        inp:"radio",
        group:"Название магазина "
      },
    ]);
      const [group5,setGroup] = useState('')
      const handleGroupClick = (group) => {
        const updatedGroups = [...selectedGroups];
        if (updatedGroups.includes(group)) {
          const index = updatedGroups.indexOf(group);
          updatedGroups.splice(index, 1);
        } else {
          updatedGroups.push(group);
        }
        setSelectedGroups(updatedGroups);
        console.log(selectedGroups);
      };
      
      
    return (
      <div className='Component_Container'>
      <div className='Section_page2_ d-flex gap-2'>
      <div className="d-flex flex-column">
        <button className="btn_filter" onClick={toggleVisibility}>
          <div className="Section_page2_filter">
          {visible? <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M10.59 7.19995L6 2.74604L1.41 7.19995L0 5.82205L6 -4.86374e-05L12 5.82205L10.59 7.19995Z"
                fill="black"
              />
            </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
    <path d="M1.41 0L6 4.45391L10.59 0L12 1.3779L6 7.2L0 1.3779L1.41 0Z" fill="black"/>
  </svg>}
            {/* Изменяем текст кнопки в зависимости от состояния видимости */}
            <span>{visible ? "Скрыть фильтры" : "Показать фильтры"}</span>
          </div>
        </button>
        {/* Рендерим div только если он видим */}
        {visible && (
          <div className=" h-100 box_page_filter_2">
              <div className='mt-2 div'>
                        {page.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <div className='d-flex gap-3 align-items-center' style={{ height: "20px" }}>
                <Box sx={{ display: "flex", gap: 3 }}>
                <Checkbox
                label={item.group}
                checked={  selectedGroups.includes(item.group)  }
                onClick={() => handleGroupClick(item.group)}
                name={item.id.toString()}
                value={item.group}
              />


                </Box>
              </div>
            </div>
          ))}


              </div>

          </div>
        )}
          </div>
          <table className="TAble_box" style={{marginTop:"250px"}}>
            <thead className='table-dark text-center '>
                <div className='Section_page_filter'>
        
                </div>
            </thead>
            <tbody className='d-flex flex-wrap gap-3'>
              {(todos
  .filter((item) => selectedGroups.includes(item.group) || selectedGroups.includes("Все товары") || selectedGroups.includes("Только со скидкой") && selectedGroups.includes(item.sikidki) || selectedGroups.includes("DC Shoes") && selectedGroups.includes(item.brend)|| selectedGroups.includes("Quicksilver") && selectedGroups.includes(item.brend1)||selectedGroups.includes(item.brend2) && selectedGroups.includes("BoardRiders") ||selectedGroups.includes(item.brend3) && selectedGroups.includes("Billabong")  ||selectedGroups.includes("One Size") &&selectedGroups.includes(item.brend4) ||selectedGroups.includes("XS") &&selectedGroups.includes(item.brend5) ||selectedGroups.includes("S/M") &&selectedGroups.includes(item.brend6)  ||selectedGroups.includes("M") &&selectedGroups.includes(item.brend7)||selectedGroups.includes("M/L") &&selectedGroups.includes(item.brend8) ||selectedGroups.includes("BOA") &&selectedGroups.includes(item.brend9)  ||selectedGroups.includes("Step On") &&selectedGroups.includes(item.brend10) ||selectedGroups.includes("Est") &&selectedGroups.includes(item.brend11) ||selectedGroups.includes("Magne Traction") &&selectedGroups.includes(item.brend12) ||selectedGroups.includes("The Channel") &&selectedGroups.includes(item.brend13) ||selectedGroups.includes("Recco") &&selectedGroups.includes(item.brend14) ||selectedGroups.includes("Черный") &&selectedGroups.includes(item.brend18)||selectedGroups.includes("Белый") &&selectedGroups.includes(item.brend19)||selectedGroups.includes("Красный") &&selectedGroups.includes(item.brend20)||selectedGroups.includes("Синий") &&selectedGroups.includes(item.brend21)||selectedGroups.includes("Желтый") &&selectedGroups.includes(item.brend22)||selectedGroups.includes("Оранжевый") &&selectedGroups.includes(item.brend23))  .slice(indexOfFirstTodo, indexOfLastTodo)
  .map((item) =>  (
      <div class="modal-dialog" role="document">
      <div class="modal-content rounded-3 border w-100">
        <div class="modal-body p-2">
        <div className='d-flex justify-content-between align-items-center'>
          <h2 class="fw-bold mb-0">What's new</h2>
          {item.logo}
        </div>
          <ul class="d-grid gap-4 my-5 list-unstyled small img_box">
          <img src={item.img} alt="" style={{width:"300px",height:"250px"}}/>
          </ul>
          <div className='map_text'>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <h4>{item.Narx}</h4>
                </div>
        </div>
      </div>
    </div>
              
              )))}
            </tbody>
        <div className='d-flex justify-content-center mt-5' style={{marginTop:"200px",position:"sticky"}}>
        <Pagination
  currentPage={currentPage}
  todosPerPage={todosPerPage}
  totalTodos={todos.filter((item) => (selectedGroups.includes(item.group) || selectedGroups.includes("Все товары")||selectedGroups.includes(item.brend) && selectedGroups.includes("DC Shoes")||selectedGroups.includes(item.brend1) && selectedGroups.includes("Quicksilver") ||selectedGroups.includes(item.brend2) && selectedGroups.includes("BoardRiders")||selectedGroups.includes(item.brend3) && selectedGroups.includes("Billabong"))||selectedGroups.includes("One Size") &&selectedGroups.includes(item.brend4) ||selectedGroups.includes("XS") &&selectedGroups.includes(item.brend5)||selectedGroups.includes("S/M") &&selectedGroups.includes(item.brend6)  ||selectedGroups.includes("M") &&selectedGroups.includes(item.brend7)||selectedGroups.includes("M/L") &&selectedGroups.includes(item.brend8) ||selectedGroups.includes("BOA") &&selectedGroups.includes(item.brend9)  ||selectedGroups.includes("Step On") &&selectedGroups.includes(item.brend10) ||selectedGroups.includes("Est") &&selectedGroups.includes(item.brend11) ||selectedGroups.includes("Magne Traction") &&selectedGroups.includes(item.brend12) ||selectedGroups.includes("The Channel") &&selectedGroups.includes(item.brend13) ||selectedGroups.includes("Recco") &&selectedGroups.includes(item.brend14)||selectedGroups.includes("Черный") &&selectedGroups.includes(item.brend18)||selectedGroups.includes("Белый") &&selectedGroups.includes(item.brend19)||selectedGroups.includes("Красный") &&selectedGroups.includes(item.brend20)||selectedGroups.includes("Синий") &&selectedGroups.includes(item.brend21)||selectedGroups.includes("Желтый") &&selectedGroups.includes(item.brend22)||selectedGroups.includes("Оранжевый") &&selectedGroups.includes(item.brend23)).length}
  onPageChange={handlePageChange}
/>


        </div>
          </table>
        

      </div>
      </div>
    )
  }

export default Section_Page2;

