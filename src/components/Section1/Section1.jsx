import React from 'react'
import "./Section1.css"

const Section1 = () => {
  return (
    <div  
    data-aos="fade-up"
    data-aos-duration="2000">
      <div className="Component_Container">
         <div className='d-flex  w-100 justify-content-between mb-3 boxlar'>
          <div className='d-flex flex-column  box2'  >
          </div>
          <div  className='d-flex align-items-center flex-column box3'>
          </div>
         </div>
          <div className='btnlar'>
              <button className='btn1 btn_2'>НАЗВАНИЕ АКЦИИ №1</button>
              <button className='btn1 btn_3'>НАЗВАНИЕ АКЦИИ №2</button>
          </div>
       </div>
    </div>
  )
}

export default Section1