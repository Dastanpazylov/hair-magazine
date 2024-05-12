import React from 'react';
import vopros from '../../assets/vopros.svg';
import moreicons from '../../assets/moreicons.svg';
import './FormAskDoctor.css';


const FormAskDoctor = () => {
  return (
    <div className='askdoc-main flex justify-center items-center mt-[10em]'>
        <div className='askdoc-container max-w-[984px] max-h-[354px] border-[3px] border-[#373737]'>
            <div className='vopros ml-[5.3em] my-[4.5em]'>
                <img src={vopros} alt="" />
            </div>
            <div className='askdoc-right-cont float-end mt-[-18.4em] mr-[5.5em]'>
                <h1 className='askdoc-title font-Montserrat font-bold text-[28px] text-[#373737]'>Спросите врача трихолога</h1>
                <div className='askdoc-inputs mt-[1.5em]'>
                    <input className='askdoc-input pl-4 w-[264px] h-[42px] bg-[#F5F5F5] rounded-[4px] font-Montserrat font-medium text-[16px] text-[#C5C5C5]' type="name" placeholder='имя' />
                    <input className='fix-input ml-[1.5em] pl-4 w-[264px] h-[42px] bg-[#F5F5F5] rounded-[4px] font-Montserrat font-medium text-[16px] text-[#C5C5C5]' type="email" placeholder='e-mail' />
                </div>
                <div className='askdoc-textarea mt-[1.5em]'>
                    <input className='pl-4 pb-[1.5em] w-[552px] h-[64px] bg-[#F5F5F5] rounded-[4px] font-Montserrat font-medium text-[16px] text-[#C5C5C5]' type="text" placeholder='напишите вопрос' />
                </div>
                <div className='askdoc-btn-links flex mt-[1.5em] gap-[1.5em]'>
                    <button className='askdoc-button w-[149px] h-[42px] border-[1px] rounded-[4px] border-[#373737]'>
                        <img className='icon-more relative top-[0.2em] left-[7.5em]' src={moreicons} alt="" />
                        <h5 className='font-Montserrat font-medium text-[16px] mt-[-1em] ml-[-1em]'>Отправить</h5>
                    </button>
                    <div className='askdoc-link'>
                        <h5 className='askdoc-link-first font-Montserrat font-medium text-[12px] text-[#373737]'>Нажимая кнопку “Отправить”, вы даете</h5>
                        <h5 className='askdoc-link-second font-Montserrat font-medium text-[12px] text-[#373737] underline mt-[-1.5em] ml-[21.2em]'>согласие на</h5>
                        <h5 className='askdoc-link-third font-Montserrat font-medium text-[12px] text-[#373737] underline'>обработку персональных данных</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAskDoctor