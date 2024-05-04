import React from 'react';
import cati1 from '../../assets/cati1.svg';
import cati2 from '../../assets/cati2.svg';
import cati3 from '../../assets/cati3.svg';
import cati4 from '../../assets/cati4.svg';
import cati5 from '../../assets/cati5.svg';
import cati6 from '../../assets/cati6.svg';
import cati7 from '../../assets/cati7.svg';
import cati8 from '../../assets/cati8.svg';
import './Categories.css';


const Categories = () => {
   
  return (
    
        <div className='categories mx-auto flex justify-between items-center max-w-[1940px]'>
                <div className='categories-cont ml-[6.5em] flex gap-[1.5em] mt-[3em]'>
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
                    <div className='cate-cart-six w-[242px] h-[54px] bg-[#373737] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.5em]' src={cati4} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#EDEDED]'>Раннее облысение</h1>
                    </div>
                    <div className='cate-cart-seven w-[224px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.5em]' src={cati5} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Маски для волос</h1>
                    </div>
                    <div className='cate-cart-eig w-[343px] h-[54px] bg-[#EDEDED] rounded-[4px]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.7em]' src={cati6} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Профилактика здоровья волос</h1>
                    </div>
                    <div className='cate-cart-nine w-[321px] h-[54px] bg-[#EDEDED] rounded-[4px] ml-[-106.2em] mt-[5em]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.4em]' src={cati7} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Выпадение волос у женщин</h1>
                    </div>
                    <div className='cate-cart-ten w-[317px] h-[54px] bg-[#EDEDED] rounded-[4px] mt-[5em]'>
                        <div className='bg-[#373737] w-[54px] h-[54px] rounded-l-[4px]'>
                            <img className='py-[0.5em] ml-[0.4em]' src={cati8} alt="" />
                         </div>
                            <h1 className=' text-center ml-[3.1em] mt-[-2.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Выпадение волос у мужчин</h1>
                    </div>
                </div>
    </div>
  )
}

export default Categories