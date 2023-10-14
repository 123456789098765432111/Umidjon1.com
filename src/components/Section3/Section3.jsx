import React from 'react'
import  "./section3.css"
import LogoTiv from "./img/image 23.png"
const Section3 = () => {
  return (
    <div className='Component_Container'    data-aos="fade-up"
    data-aos-duration="2000">
      <div className='d-flex justify-content-between align-items-center Main_compone'>
        <div className='sec3_img'>
          <img src={LogoTiv} alt="" />
          <h1>Программа лояльности</h1>
          <h5>Зарабатывайте баллы и получайте преимущества</h5>
          <button>Вступить в клуб</button>
        </div>
        <div className='sec3_img1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="57" viewBox="0 0 71 57" fill="none">
          <path d="M63.9 14.25L35.5 32.0625L7.1 14.25V7.125L35.5 24.9375L63.9 7.125V14.25ZM63.9 0H7.1C3.1595 0 0 3.17062 0 7.125V49.875C0 51.7647 0.748033 53.5769 2.07954 54.9131C3.41105 56.2493 5.21696 57 7.1 57H63.9C65.783 57 67.589 56.2493 68.9205 54.9131C70.252 53.5769 71 51.7647 71 49.875V7.125C71 5.23533 70.252 3.42306 68.9205 2.08686C67.589 0.750667 65.783 0 63.9 0Z" fill="#F9F9F9"/>
        </svg>
      <h3>Скидка -10%</h3>
      <h5>За подписку на наши новости</h5>
        <div className='d-flex  position-relative'>
   <div className='svg1'>
      <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
      <path d="M18 4L10 9L2 4V2L10 7L18 2V4ZM18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z" fill="black"/>
    </svg>
  <span >Email</span>
   </div>
          <input type="text" className='form-control' name="" id=""  />
          <svg className='svg2' xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
  <path d="M0 19V11.6276L15.7143 9.5L0 7.3724V0L22 9.5L0 19Z" fill="black"/>
</svg>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Section3