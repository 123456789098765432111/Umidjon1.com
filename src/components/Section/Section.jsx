import React from 'react'
import Logo1 from "./img/image 13.svg"
import Logo2 from "./img/image 18 (1).png"
import Logo3 from "./img/image 14.svg"
import Logo4 from "./img/image 15 (1).svg"
import Logo5 from "./img/image 16.svg"
import Logo7 from "./img/image 17.png"
import Logo8 from "./img/image 19.png"
import Logo9 from "./img/image 20.png"
import Logo10 from "./img/image 21.png"
import Logo11 from "./img/image 22.png"

// import css
import "./Section.css"
// img card  

const Section = () => {
  return (
    <div>
    <div
      className="Section_Logo"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="Component_Container">
        <div className="d-flex mb-5 w-100 justify-content-between align-items-center flex-wrap">
          {/* Use flex-wrap to wrap the images on smaller screens */}
          <img src={Logo1} alt="" className="logo-img" />
          <img src={Logo2} alt="" className="logo-img" />
          <img src={Logo3} alt="" className="logo-img" />
          <img src={Logo4} alt="" className="logo-img" />
          <img src={Logo5} alt="" className="logo-img" />
          <img src={Logo7} alt="" className="logo-img" />
          <img src={Logo8} alt="" className="logo-img" />
          <img src={Logo9} alt="" className="logo-img" />
          <img src={Logo10} alt="" className="logo-img" />
          <img src={Logo11} alt="" className="logo-img" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section