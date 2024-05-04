import React, { useState }  from 'react';
import modalwind from '../../assets/modalwindow.svg';
import close from '../../assets/close.svg';
import cati1 from '../../assets/cati1.svg';
import cati2 from '../../assets/cati2.svg';
import cati3 from '../../assets/cati3.svg';
import cati4 from '../../assets/cati4.svg';
import cati5 from '../../assets/cati5.svg';
import cati6 from '../../assets/cati6.svg';
import cati7 from '../../assets/cati7.svg';
import cati8 from '../../assets/cati8.svg';
import './ModalWindow.css';


const ModalWindow = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  return (
    <div className='main-modal-funct flex justify-center items-center'>
      <div className='fix-cate-cart-modal mt-[-11.5em]'>
               <div onClick={toggleModal} className='cate-cart-modal w-[189px] h-[54px] bg-[#EDEDED] rounded-[4px] mt-[8em]'>
                        <div className='bg-[#AB9F6F] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[1em] ml-[0.9em]' src={modalwind} alt="" />
                         </div>
                            <h1 className='text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Все рубрики</h1>
                </div>
               </div>  
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay "></div>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              <img className='relative top-[1em] left-[101em]'  src={close} alt="" />
            </button>
            <div className='categories mx-auto flex justify-between items-center max-w-[1940px]'>
                <div className='categories-cont ml-[2em] flex flex-col gap-[2em] mt-[1em]'>
                    <div className='cate-cart w-[316px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.5em]' src={cati1} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Активное выпадение волос</h1>
                    </div> 
                    <div className='cate-cart w-[153px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.5em]' src={cati2} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Себорея</h1>
                    </div>
                    <div className='cate-cart w-[279px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.5em]' src={cati3} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Возрастное облысение</h1>
                    </div>
                    <div className='cate-cart w-[242px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.5em]' src={cati4} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Раннее облысение</h1>
                    </div>
                    <div className='cate-cart w-[224px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.5em]' src={cati5} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Маски для волос</h1>
                    </div>
                    <div className='cate-cart w-[343px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.7em]' src={cati6} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Профилактика здоровья волос</h1>
                    </div>
                    <div className='cate-cart w-[321px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.4em]' src={cati7} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Выпадение волос у женщин</h1>
                    </div>
                    <div className='cate-cart w-[317px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.4em]' src={cati8} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Выпадение волос у мужчин</h1>
                    </div>
                </div>
            </div> 
          </div>
        </div>
      )}
</div>
  )
}

export default ModalWindow