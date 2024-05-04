import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import burgermenu from '../../assets/burgerchik.svg';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='header bg-[#373737] h-[80px]'>
      <div className='header-cont mx-auto flex justify-between items-center max-w-[1940px]'>
          <div className='logotip flex py-4 ml-28'>
            <img src={logo} alt="" />
            <h5 className='mt-[0.5em] ml-[3.5em] font-Montserrat font-medium text-[16px] text-[#BABABA]'>Журнал о волосах</h5>
          </div>
          <div className='search-contik hidden'>
            <img src={search} alt="" />
          </div>
          <div className="burger-menu flex justify-center items-center">
              
          <nav className={`ml-[2em] menu-items ${isOpen ? 'open' : ''}`}>
                <a className='font-Montserrat font-medium text-[16px] text-[#EDEDED] hover:underline' href='/'>Продукция</a>
                <a className='font-Montserrat font-medium text-[16px] text-[#EDEDED] hover:underline ' href='/'>Решение проблем</a>
                <a className='font-Montserrat font-medium text-[16px] text-[#EDEDED] hover:underline ' href='/'>Компания</a>
                <a className='font-Montserrat font-medium text-[16px] text-[#EDEDED] hover:underline ' href='/'>Контакты</a>
          </nav>
              <button className="burger-icon hidden" onClick={toggleMenu}>
                  <img src={burgermenu} alt="" />
             </button> 
               <div className='inputchik flex float-end mt-[0.1em]'>
                  <input className='w-[408px] rounded-[4px] pl-[2.5em] h-[48px] bg-[#545454] font-Montserrat font-medium text-[16px] text-[#AEAEAE] mr-[6em]' placeholder='Найти публикацию' type="text" />
                  <img className='relative left-[-31em]' src={search} alt="" />
                </div>
         </div>  
        </div>
    </header>
  )
}

export default Header