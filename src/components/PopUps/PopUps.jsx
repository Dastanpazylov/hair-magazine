import React, { useState } from 'react';
import telegram from '../../assets/telegram.svg';
import inst from '../../assets/inst.svg';
import whatsapp from '../../assets/whatsapp.svg';
import mail from '../../assets/mail.svg';
import whitemore from '../../assets/whitemore.svg';
import './PopUps.css';

const PopUps = () => {
    const [popup1Open, setPopup1Open] = useState(false);
  const [popup2Open, setPopup2Open] = useState(false);
  const [popup3Open, setPopup3Open] = useState(false);
  const [popup4Open, setPopup4Open] = useState(false);
    const [activeElement, setActiveElement] = useState(null);

    const handleClick = (element) => {
      setActiveElement(element);
    };
    const togglePopup1 = () => {
        setPopup1Open(!popup1Open);
      };
    
      const togglePopup2 = () => {
        setPopup2Open(!popup2Open);
      };
    
      const togglePopup3 = () => {
        setPopup3Open(!popup3Open);
      };
    
      const togglePopup4 = () => {
        setPopup4Open(!popup4Open);
      };
  
  return (
   <div className='pop-main flex justify-center items-center ml-[-25em] mt-[-6em]'>
      <div className='pop-title mt-[3.5em] ml-[20em]'>
      <h1 className=' font-Montserrat font-bold text-[28px] text-[#373737]'>Читайте нас там, где вам удобно!</h1>
      </div>
      
        <div className='pop-cont flex gap-[1.5em] mt-[15em] ml-[-26em]'>
            <div className={`pop-border ${activeElement === 1 ? 'w-[64px] h-[64px] border border-[#373737]' : 'w-[64px] h-[64px] border border-[#EDEDED]'}`}
        onClick={() => handleClick(1)}>
                <button onClick={togglePopup1}><img className='pop-logo px-[1.5em] pt-[1.5em]' src={telegram} alt="" /></button>
                {popup1Open && <Popup onClose={togglePopup1}><div className='modal-pop-first ml-[-7.5em] w-[522px] h-[264px] bg-[#EDEDED]'><h1 className='modal-title text-center pt-[3em] font-Montserrat font-bold text-[28px] text-[#373737]'>Читайте нас в телеграм</h1> <button className='button-pop ml-[8em] mt-[2em] w-[270px] h-[42px] rounded-[4px] bg-[#484848]'><h5 className='button-pop-text font-Montserrat font-medium text-[16px] text-[#EDEDED] mt-[0.5em] ml-[-2em]'>Перейти в наш телеграм</h5> <img className='button-pop-img relative bottom-5 left-[15em]' src={whitemore} alt="" /></button></div></Popup>}
            </div>
            <div  className={`pop-border ${activeElement === 2 ? 'w-[64px] h-[64px] border border-[#373737]' : 'w-[64px] h-[64px] border border-[#EDEDED]'}`}
        onClick={() => handleClick(2)}>
                <button onClick={togglePopup2}><img className='pop-logo px-[1.5em] pt-[1.5em]' src={inst} alt="" /></button>
                {popup2Open && <Popup onClose={togglePopup2}><div className='modal-pop-second ml-[-13em] w-[522px] h-[264px] bg-[#EDEDED]'><h1 className='modal-title text-center pt-[3em] font-Montserrat font-bold text-[28px] text-[#373737]'>Читайте нас в instagram</h1> <button className='button-pop ml-[8em] mt-[2em] w-[270px] h-[42px] rounded-[4px] bg-[#484848]'><h5 className='button-pop-text font-Montserrat font-medium text-[16px] text-[#EDEDED] mt-[0.5em] ml-[-2em]'>Перейти в наш instagram</h5> <img className='button-pop-img relative bottom-5 left-[15em]' src={whitemore} alt="" /></button></div></Popup>}
            </div>
            <div  className={`pop-border ${activeElement === 3 ? 'w-[64px] h-[64px] border border-[#373737]' : 'w-[64px] h-[64px] border border-[#EDEDED]'}`}
        onClick={() => handleClick(3)}>
                <button onClick={togglePopup3}><img className='pop-logo px-[1.5em] pt-[1.5em]' src={whatsapp} alt="" /></button>
                {popup3Open && <Popup onClose={togglePopup3}><div className='modal-pop-third ml-[-18.5em] w-[522px] h-[264px] bg-[#EDEDED]'><h1 className='modal-title text-center pt-[3em] font-Montserrat font-bold text-[28px] text-[#373737]'>Читайте нас в whatssap</h1> <button className='button-pop ml-[8em] mt-[2em] w-[270px] h-[42px] rounded-[4px] bg-[#484848]'><h5 className='button-pop-text font-Montserrat font-medium text-[16px] text-[#EDEDED] mt-[0.5em] ml-[-2em]'>Перейти в наш whatsapp</h5> <img className='button-pop-img relative bottom-5 left-[15em]' src={whitemore} alt="" /></button></div></Popup>}
            </div>
            <div  className={`pop-border ${activeElement === 4 ? 'w-[64px] h-[64px] border border-[#373737]' : 'w-[64px] h-[64px] border border-[#EDEDED]'}`}
        onClick={() => handleClick(4)}>
                <button onClick={togglePopup4}><img className='pop-logo px-[1.5em] pt-[1.5em]' src={mail} alt="" /></button>
                {popup4Open && <Popup onClose={togglePopup4}></Popup>}
            </div>
        </div>
   </div>
  )
}


const Popup = ({ children, onClose }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <button className="close-btn" onClick={onClose}>
            
          </button>
          {children}
        </div>
      </div>
    );
  };


export default PopUps