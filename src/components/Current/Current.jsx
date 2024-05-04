import React from 'react';
import third1 from '../../assets/third1.png';
import third2 from '../../assets/third2.png';
import third3 from '../../assets/third3.png';
import './Current.css';


const Current = () => {
  return (
    <div className='thempostimpo'>
        <h1 className='theimpo-title font-Montserrat font-semibold text-[52px] text-[#000000] mt-[2.8em] ml-[2.1em]'>Актуальное</h1>
        <div className='thempostimpo-cont grid grid-cols-3 ml-[13em] relative right-[6em]'>
            <div className='theimpo-cart'>
                <div className='krasaten w-[130px] h-[38px] bg-[#373737] rounded-b-[4px] relative top-[2.4em]'>
                    <h5 className='font-Montserrat font-medium text-[16px] text-[#EDEDED] text-center pt-1'>#красотень</h5>
                </div>
                <img className='theimpo-img max-w-[522px] max-h-[323px] impo-image' src={third1} alt="" />
                <h1 className='theimpo-tite pt-6 font-Montserrat font-bold text-[28px] text-[#373737]'>Заголовок в одну строку</h1>
                <p className='theimpo-parograph pt-1 font-Montserrat font-medium text-[16px] text-[#373737]'>Ведущие трихологические клиники, медицинские центры, <br /> SPA-салоны, и профессионалы индустрии красоты и <br /> здоровья</p>
            </div>
            <div className='theimpo-cart'>
                <div className='krasaten w-[130px] h-[38px] bg-[#373737] rounded-b-[4px] relative top-[2.4em]'>
                    <h5 className='font-Montserrat font-medium text-[16px] text-[#EDEDED] text-center pt-1'>#красотень</h5>
                </div>
                <img className='theimpo-img max-w-[522px] max-h-[323px] impo-image' src={third2} alt="" />
                <h1 className='theimpo-tite pt-6 font-Montserrat font-bold text-[28px] text-[#373737]'>Заголовок в одну строку</h1>
                <p className='theimpo-parograph pt-1 font-Montserrat font-medium text-[16px] text-[#373737]'>Ведущие трихологические клиники, медицинские центры, <br /> SPA-салоны, и профессионалы индустрии красоты и <br /> здоровья</p>
            </div>
            <div className='theimpo-cart'>
                <div className='krasaten w-[130px] h-[38px] bg-[#373737] rounded-b-[4px] relative top-[2.4em]'>
                    <h5 className='font-Montserrat font-medium text-[16px] text-[#EDEDED] text-center pt-1'>#красотень</h5>
                </div>
                <img className='theimpo-img max-w-[522px] max-h-[323px] impo-image' src={third3} alt="" />
                <h1 className='theimpo-tite pt-6 font-Montserrat font-bold text-[28px] text-[#373737]'>Заголовок в одну строку</h1>
                <p className='theimpo-parograph pt-1 font-Montserrat font-medium text-[16px] text-[#373737]'>Ведущие трихологические клиники, медицинские центры, <br /> SPA-салоны, и профессионалы индустрии красоты и <br /> здоровья</p>
            </div>
        </div>
    </div>
  )
}

export default Current