import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { CSSTransition } from 'react-transition-group';

const Navbar = () => {
  // Define a state variable to toggle the menu
  const [showMenu, setShowMenu] = React.useState(false);

  // Define a function to handle the menu button click
  const handleMenuClick = () => {
    setShowMenu(!showMenu); // Toggle the menu state
  };

  return (
    <div className='Navbar'  data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
        <div className="Component_Container h-100">
          <div className='h-100'>
            <ul className='d-flex align-items-center gap-4 h-100 ul_navbar'>
            <a  href=''>
              <Link to={'/'}><li>Новинки</li></Link>
            </a>
              <a href="">  <Link to={'/Сноуборд'} style={{all:"unset"}}><li>Сноуборд</li></Link></a>
              <a href=""><li><Link to={'/Лыжи'}>Лыжи</Link></li></a>
            <a href=""><li>Скейт</li></a>
            <a href=""><li>Лонгборд</li></a>
            <a href=""><li>Вейкборд</li></a>  
            <a href=""><li>Серф</li></a>
            <a href=""><li>Sup</li></a>
            <a href=""><li>Одежда</li></a>
            <a href=""><li>Обувь</li></a>
            <a href=""><li>Аксессуары</li></a>
            <a href=""><li>Бренды</li></a>
            <a href="" className='a13'><li>Распродажа</li></a>

            {/* // Add a menu button that calls the handleMenuClick function */}
            <button className='menu-button' style={{color:"#222"}} onClick={handleMenuClick}>☰</button>
            </ul>

            {/* // Add a conditional rendering of the list items based on the showMenu state */}
            {showMenu && (
             <CSSTransition
             in={showMenu}
             timeout={300}
             classNames="menu-list"
             unmountOnExit
           >
             <div className='menu-list' style={{}}>
             <ul>
                  <Link to={'/'}><li>Новинки</li></Link>
                  <Link to={'/Сноуборд'} style={{all:"unset"}}><li>Сноуборд</li></Link>
                  <li>Лыжи</li>
                  <li>Скейт</li>
                  <li>Лонгборд</li>
                  <li>Вейкборд</li>
                  <li>Серф</li>
                  <li>Sup</li>
                  <li>Одежда</li>
                  <li>Обувь</li>
                  <li>Аксессуары</li>
                  <li>Бренды</li>
                  <li className='a13'>Распродажа</li>
                </ul>
             </div>
           </CSSTransition>
               
            )}
          </div>
        </div>
    </div>
  )
}

export default Navbar
