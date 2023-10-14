import React, { useState } from 'react';
import "./Header2.css";
import Rodal from 'rodal';
import Logo from "./img/image 1.svg"
import { width } from '@mui/system';
import { toast, ToastContainer } from 'react-toastify';
const Header2 = () => {
  const[RodalIsactive,setRodalIsactive]= useState(false)
  const notify2 = () => toast("Ro'yxatdan o'tiz ");


  return (
    <div className='Header2' >
      <div className="Component_Container h-100  ">
        <div className=' h-100 d-flex  '>
          <div className='d-flex w-100 align-items-center  h-100 '>
            <ul className='d-flex gap-4  '>
              <a href="" className='a1' style={{color:"#222"}}>
                <li>Мужчинам</li>
              </a>
              <a href=""  style={{color:"#222"}}>
                <li>Женщинам</li>
              </a>
              <a href=""  style={{color:"#222"}}>
                <li>Детям</li>
              </a>
            </ul>
          </div>
          <div className=' w-100 h-100 d-flex justify-content-center align-items-center'>
            <img src={Logo} alt="" />
          </div>
          <div className='d-flex  gap-5 justify-content-end align-items-center h-100  w-100 Header2_icon_page'>
            <div className='d-flex flex-column gap-2 align-items-center header2-svg justify-content-center h-100'>
              <button  onClick={()=>setRodalIsactive(true)} style={{all:"unset",cursor:"pointer",display:"flex",flexDirection:"column",gap:"10px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 15C18.63 15 24 17.685 24 21V24H0V21C0 17.685 5.37 15 12 15Z" fill="black"/>
</svg>
<p  style={{color:"#222"}}>
ВОЙТИ
</p>
          </button>
             
            </div >
            <div className='d-flex flex-column gap-2 align-items-center header2-svg'>
            <button style={{all:"unset",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
  <path d="M12.2584 17.8959L12 17.74L11.7416 17.8959L5.33822 21.7608L7.02708 14.4769L7.09507 14.1837L6.86773 13.9864L1.21987 9.08466L8.67096 8.44215L8.9707 8.4163L9.08825 8.13936L12 1.27966L14.9117 8.13936L15.0293 8.4163L15.329 8.44215L22.7786 9.08454L17.1206 13.9861L16.8925 14.1837L16.9611 14.4776L18.6599 21.7596L12.2584 17.8959Z" fill="#333333" stroke="black"/>
</svg>
<p  style={{color:"#222"}}>
Избранное
</p>
          </button>
            </div>
            <div className='d-flex flex-column gap-2 align-items-center header2-svg'>
            <button style={{all:"unset",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
  <path d="M22.7989 4.79978H6.55409L4.69178 0.703167C4.59644 0.493535 4.44279 0.315766 4.24916 0.191081C4.05554 0.0663969 3.83013 6.37684e-05 3.59983 0H0V2.39989H2.82707L8.5076 14.8961C8.60295 15.1057 8.7566 15.2835 8.95022 15.4082C9.14385 15.5329 9.36926 15.5992 9.59955 15.5993H19.1991C19.6791 15.5993 20.1135 15.3137 20.3019 14.8721L23.9017 6.4725C23.9806 6.29003 24.0128 6.0908 23.9954 5.89277C23.9781 5.69474 23.9117 5.50414 23.8023 5.33818C23.6929 5.17221 23.5439 5.03609 23.3687 4.9421C23.1935 4.8481 22.9977 4.79919 22.7989 4.79978Z" fill="black"/>
  <path d="M10.1995 20.3991C11.1936 20.3991 11.9994 19.5933 11.9994 18.5992C11.9994 17.6052 11.1936 16.7993 10.1995 16.7993C9.20549 16.7993 8.39966 17.6052 8.39966 18.5992C8.39966 19.5933 9.20549 20.3991 10.1995 20.3991Z" fill="black"/>
  <path d="M18.5992 20.3991C19.5933 20.3991 20.3991 19.5933 20.3991 18.5992C20.3991 17.6052 19.5933 16.7993 18.5992 16.7993C17.6052 16.7993 16.7993 17.6052 16.7993 18.5992C16.7993 19.5933 17.6052 20.3991 18.5992 20.3991Z" fill="black"/>
</svg>
<p  style={{color:"#222"}}>
Корзина
</p>
          </button>
            </div>
            <div className='d-flex flex-column gap-2 align-items-center header2-svg'>
            <button style={{all:"unset",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M8.91429 0C11.2785 0 13.5459 0.939181 15.2176 2.61093C16.8894 4.28269 17.8286 6.55007 17.8286 8.91429C17.8286 11.1223 17.0194 13.152 15.6891 14.7154L16.0594 15.0857H17.1429L24 21.9429L21.9429 24L15.0857 17.1429V16.0594L14.7154 15.6891C13.0979 17.0699 11.041 17.8284 8.91429 17.8286C6.55007 17.8286 4.28269 16.8894 2.61093 15.2176C0.939181 13.5459 0 11.2785 0 8.91429C0 6.55007 0.939181 4.28269 2.61093 2.61093C4.28269 0.939181 6.55007 0 8.91429 0ZM8.91429 2.74286C5.48571 2.74286 2.74286 5.48571 2.74286 8.91429C2.74286 12.3429 5.48571 15.0857 8.91429 15.0857C12.3429 15.0857 15.0857 12.3429 15.0857 8.91429C15.0857 5.48571 12.3429 2.74286 8.91429 2.74286Z" fill="black"/>
</svg>
<p  style={{color:"#222"}}>
ПОИСК
</p>
          </button>
            </div>
          </div>
        </div>
      </div>

























      {/* Rodal */}
              <Rodal
          width={990}
          height={693}
          visible={RodalIsactive}
          opacity={0.7}
          onClose={() => setRodalIsactive(false)}
          showCloseButton={false}
        >

    <div className='Rodal_h3  justify-content-around align-items-center'>
      <h3 className='text-center '>Чтобы воспользоваться быстрым бронированием выполните вход или зарегистрируйтесь на сайте</h3>
   <div className=' d-flex justify-content-center'>
   <button onClick={()=>setRodalIsactive(false)} className='button-close m-4'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
  <path d="M14 1.54634L12.59 0L7 6.13053L1.41 0L0 1.54634L5.59 7.67687L0 13.8074L1.41 15.3537L7 9.22321L12.59 15.3537L14 13.8074L8.41 7.67687L14 1.54634Z" fill="white"/>
</svg></button>
   </div>
    </div>
    <div className=' d-flex h-75 border' >
      <div className='w-50  d-flex justify-content-center align-items-center' >
        
        <div className=' d-flex  flex-column justify-content-center' style={{width:"400px", height:"100%"}}>
        <h1>Вход</h1>
        <form action="">
          <div className='d-flex flex-column'>
            <label htmlFor="">Номер телефона или email</label>
            <input type="text" className='inp'/>
          </div>
         <div className='d-flex flex-column'>
           <label htmlFor="">Пароль</label>
           <input type="text"  className='inp'/>
         </div>
         <div className='d-flex justify-content-between  gap-2 align-items-center  '  style={{marginTop:"15px",height:"55px"}}>
           <div className='d-flex align-items-center  gap-2 h-100'> 
            <input type="checkbox" />
            <span className='span_text'>Запомнить меня</span>
           </div>
            <div className='span_text1'>
            Забыли пароль?
            </div>
         </div>
          <button className='Войти' >Войти</button>
       
        </form>
        </div>
      </div>
      <div className='w-50 border  d-flex justify-content-center align-items-center form_2'>
      <div className=' d-flex justify-content-center flex-column' style={{width:"400px", height:"100%"}}>
        <h1>Регистрация</h1>
        <form action="">
          <div className='d-flex flex-column'>
            <label htmlFor="">Имя*</label>
            <input type="text" className='inp'/>
          </div>
         <div className='d-flex flex-column'>
           <label htmlFor="">Еmail*</label>
           <input type="text"  className='inp'/>
         </div>
         <div className='d-flex flex-column'>
           <label htmlFor="">Номер телефона* </label>
           <input type="text"  className='inp'/>
         </div>
         <div className='d-flex justify-content-between  gap-2 align-items-center'  style={{marginTop:"15px",height:"55px"}}>
           <div className='d-flex align-items-center  gap-2 h-100'> 
            <input type="checkbox" />
            <span className='span_text'>Вы соглашаетесь с правилами</span>
           </div>
         
         </div>
          <button className='Войти' onClick={notify2}>Зарегистрироваться</button>
          <ToastContainer  
                position="top-right"
                                                autoClose={2000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                                theme="light"/>
        </form>
        </div>
      </div>
    </div>
</Rodal>

    </div>
  );
}

export default Header2;
