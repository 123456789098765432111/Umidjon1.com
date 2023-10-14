import React from 'react'
import "./Main.css"
import Main_Img1 from "./img/Rectangle 84.jpg"
import Main_Img2 from "./img/Rectangle 65.jpg"
import Main_Img3 from "./img/Rectangle 58.jpg"
const Main = () => {
  return (
    <div className='Main_Page2' >
      <div className="Component_Container">
        <div className='pt-5 d-flex gap-3 ' ><span><a href="">Главная</a>  </span> <span>/</span>  <span>   <a href="">Мужчинам</a>   </span> <span>/</span> <span><a href="">Сноуборд</a></span></div>
          <div className='d-flex justify-content-center gap-2 main_page_box_flex'>
            <div className='Main_page2_box'>
                <img src={Main_Img2} alt="" />
                <h4>Название акции</h4>
            </div>
            <div className='Main_page2_box'>
                <img src={Main_Img3} alt="" />
                <h4>Название акции</h4>
            </div>
            <div className='Main_page2_box'>
                <img src={Main_Img1} alt="" />
                <h4>Название акции</h4>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Main