import React from 'react';
import gmail from '../../assets/gmail.svg';
import moreicons from '../../assets/moreicons.svg';
import './FormGmail.css';



const FormGmail = () => {
  return (
    <div className='form-hair flex justify-center items-center mt-[6.8em]'>
        <img className='gmail relative left-[11em] bottom-[8.5em]' src={gmail} alt="" />
        <div className='form-cont border-[3px] border-[#373737] w-[984px] h-[269px]'>
            <div className='main-title'>
            <h1 className='title-one pl-[3.1em] pt-[1.5em] font-Montserrat font-bold text-[28px] text-[#373737]'>Одно письмо с</h1>
            <h1 className='title-two pl-[3.1em] pt-[-1.5em] font-Montserrat font-bold text-[28px] text-[#373737]'>лучшими</h1>
            <h1 className='title-three  pl-[3.1em] pt-[-1.5em] font-Montserrat font-bold text-[28px] text-[#373737]'>материалами за</h1>
            <h1 className='title-four pl-[3.1em] pt-[-1.5em] font-Montserrat font-bold text-[28px] text-[#373737]'>неделю</h1>
            </div>
            <div className='form-sub float-left ml-[25em] mt-[-10em]'>
                <div className='cont-first flex'>
                    <p className='text-first font-Montserrat font-medium text-[16px] text-[#373737]'>Подписывайтесь и не</p>
                    <p className='text-second font-Montserrat font-medium text-[16px] text-[#373737]'>забудьте проверить почту</p>
                    <p className='text-third font-Montserrat font-medium text-[16px] text-[#373737] pt-[1.3em] ml-[-25.3em]'>для подстверждения</p>
                </div>
                <div className='form-content pt-[1.5em] flex'>
                    <input className='form-input w-[264px] h-[42px] rounded-[4px] bg-[#EDEDED] font-Montserrat font-medium text-[16px] text-[#373737] pl-[16px]' type="email" name="" id="" placeholder='e-mail' />
                    <div className='form-cont-butt pl-[1.5em]'>
                    <button className='form-button border-[2px] border-[#373737] w-[149px] h-[42px] rounded-[4px]'>
                        <h5 className='ml-[-1.5em] font-Montserrat font-medium text-[16px] text-[#373737]'>Отправить</h5>
                    </button>
                    <img className='more relative bottom-[1.9em] left-[7.5em]' src={moreicons} alt="" />
                    </div>
                </div>
               <div className='pag-blabla flex'>
               <p className='pag-one font-Montserrat font-medium text-[12px] text-[#373737]'>Нажимая кнопку “Отправить”,  вы</p>
                <p className='pag-two font-Montserrat font-medium text-[12px] text-[#373737] underline pl-1'> даете согласие на обработку</p>
                <p className='pag-tree font-Montserrat font-medium text-[12px] text-[#373737] underline pt-[1.3em] ml-[-33.3em]'> персональных данных</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default FormGmail