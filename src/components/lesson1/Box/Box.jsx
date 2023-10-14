import React from 'react'
import "./box.css"
import img1 from "./Group 376.svg"
import img2 from "./DC SHOES.svg"

function Box() {
  return (
    <div>
        <div className="box">
            <div className="box1">
                <div style={{display:"flex", gap:"20px"}}><p>Главная</p><p>/</p><p>Бренды</p><p>/</p><p>DC Shoes</p></div>
                <div className="imgs">
                    <img src={img1} alt="" />
                    <img style={{width:"168px", height:"40px"}} src={img2} alt="" />
                </div>
                <div className="text">
                    <p>
                    "Вдохновить каждого атлета* в Мире. *Если у вас есть тело, вы - атлет" - главный принцип работы<br></br> Nike. С 1971 года, когда бренд выпустили свой первый самостоятельно разработанный продукт,<br></br> Nike стали, вероятно, самой узнаваемой маркой в Мире. Продолжая придерживаться своему<br></br> принципу, бренд не останавливается на достигнутом и открывает новые подразделения, а также<br></br> занимается продвижением спортсменов самых различных дисциплин. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Box