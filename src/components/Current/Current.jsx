import React from 'react';
import third1 from '../../assets/third1.png';
import third2 from '../../assets/third2.png';
import third3 from '../../assets/third3.png';
import './Current.css';


const Current = () => {
  return (
    <div className='current-main mx-auto relative right-[11em] flex justify-between items-center max-w-[1940px] mt-[7em]'>
    <h1 className='current-title font-Montserrat font-semibold text-[52px] text-[#000000] mt-[-11em] ml-[-11em] relative left-[16.6em]'>Актульное</h1>
    <div className='current-container grid grid-cols-3 gap-[2em]'>
        <div className='current-cart'>
            <div className=' w-[130px] h-[38px] bg-[#373737] rounded-b-[4px] relative top-[2.4em]'>
                <h5 className='font-Montserrat font-medium text-[16px] text-[#EDEDED] text-center pt-1'>#красотень</h5>
            </div>
            <img className='current-image max-w-[522px] max-h-[323px]' src={third1} alt="" />
            <div className='current-text ml-[11em]'>
                <h1 className='current-tite pt-6 font-Montserrat font-bold text-[28px] text-[#373737] ml-[-6.4em]'>Заголовок в одну строку</h1>
                <p className='current-parograph pt-1 font-Montserrat font-medium text-[16px] text-[#373737] ml-[-11em]'>Ведущие трихологические клиники, медицинские центры, <br /> SPA-салоны, и профессионалы индустрии красоты и <br /> здоровья</p>
            </div> 
        </div>
        <div className='current-cart'>
            <div className=' w-[130px] h-[38px] bg-[#373737] rounded-b-[4px]  relative top-[2.4em]'>
                <h5 className='font-Montserrat font-medium text-[16px] text-[#EDEDED] text-center pt-1'>#красотень</h5>
            </div>
            <img className='current-image max-w-[522px] max-h-[323px]' src={third2} alt="" />
            <div className='current-text ml-[11em]'>
                <h1 className='current-tite pt-6 font-Montserrat font-bold text-[28px] text-[#373737] ml-[-6.4em]'>Заголовок в одну строку</h1>
                <p className='current-parograph pt-1 font-Montserrat font-medium text-[16px] text-[#373737] ml-[-11em]'>Ведущие трихологические клиники, медицинские центры, <br /> SPA-салоны, и профессионалы индустрии красоты и <br /> здоровья</p>
            </div>
        </div>
        <div className='current-cart'>
            <div className=' w-[130px] h-[38px] bg-[#373737] rounded-b-[4px] relative top-[2.4em]'>
                <h5 className='font-Montserrat font-medium text-[16px] text-[#EDEDED] text-center pt-1'>#красотень</h5>
            </div>
            <img className='current-image max-w-[522px] max-h-[323px]' src={third3} alt="" />
            <div className='current-text ml-[11em]'>
                <h1 className='current-tite pt-6 font-Montserrat font-bold text-[28px] text-[#373737] ml-[-6.4em]'>Заголовок в одну строку</h1>
                <p className='current-parograph pt-1 font-Montserrat font-medium text-[16px] text-[#373737] ml-[-11em]'>Ведущие трихологические клиники, медицинские центры, <br /> SPA-салоны, и профессионалы индустрии красоты и <br /> здоровья</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Current