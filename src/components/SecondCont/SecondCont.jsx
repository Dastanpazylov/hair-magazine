import React from 'react';
import man from '../../assets/man.jpg'
import women from '../../assets/women.jpg'
import more from '../../assets/moreicons.svg'
import './SecondCont.css';


const SecondCont = () => {
  return (
      <div className='main-second mx-auto flex justify-between items-center max-w-[1940px] '>
        <div className='secondcont flex mx-[7em] mt-[8em] gap-[1.5em]'>
        <div className='vava '>
          <div className='w-[130px] h-[38px] rounded-b-[4px] bg-[#373737] relative top-[2.4em]'>
            <h5 className='font-Montserrat font-medium text-[16px] text-[#EDEDED] text-center pt-[0.3em]'>#красотень</h5>
          </div>
            <img className='image-grad max-w-[1058px] max-h-[388px]' src={man} alt="" />
            <div className='texts mt-[-17em] ml-[2.5em]'>
            <h1 className='font-Montserrat font-bold text-[28px] text-[#EDEDED]'>Что должно входить в <br /> состав для волос?</h1>
<p className='font-Montserrat font-medium text-[16px] text-[#EDEDED]'>Ведущие трихологические клиники, медицинские центры, <br /> SPA-салоны, и профессионалы индустрии красоты и <br /> здоровья</p>
            </div>
        </div>
    </div>
    <div className='baba relative right-[11em] top-[5.7em]'>
    <div className='w-[130px] h-[38px] rounded-b-[4px] bg-[#373737] relative top-[2.4em]'>
            <h5 className='font-Montserrat font-medium text-[16px] text-[#EDEDED] text-center pt-[0.3em]'>#красотень</h5>
          </div>
    <img className='women max-w-[552px] max-h-[388px]' src={women} alt="" />
            <div className='anna mt-[-14.5em] ml-[2.5em]'>
              
              <h2 className='font-Montserrat font-medium text-[16px] text-[#EDEDED]'>12.05.2022</h2>
              <h1 className='font-Montserrat font-bold text-[28px] text-[#EDEDED]'>Анонс ближайшего <br /> вебинара или семинара</h1>
              <div className='button mt-[1.75em]'>
                <button className=' w-[155px] h-[50px] rounded-[4px] bg-[#EDEDED]'><h5 className='relative left-[-1em] top-[0.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Подробнее</h5><img className='relative top-[-0.8em] left-[7.6em]' src={more} alt="" /></button>
                
              </div>
            </div>
            
    </div>
            
    </div>
  )
}

export default SecondCont