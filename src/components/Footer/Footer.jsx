import React from 'react'
import logofooter from '../../assets/logofooter.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer bg-[#EDEDED] w-full relative top-[35em] px-[6.4em] py-[3em]'>
        <div className='footer-one flex'>
            <img className='footer-logo max-w-[150px] max-h-[43px]' src={logofooter} alt="" />
            <p className='footer-text pl-[2em] font-Montserrat font-medium text-[12px] text-[#373737]'>Инновационные решения для <br /> восстановления, питания и уходу за <br /> волосами головы, бровей и бороды</p>
        </div>
        <h1 className='plum font-Montserrat underline text-[#373737] font-medium text-[16px] text-center mt-[-2.5em]'>Перейти в магазин</h1>
        <div className='footer-two float-right mt-[-2em]'>
          <h1 className='first font-Montserrat text-[#373737] font-medium text-[14px]'>Copyright © 2022 Charismo Russia </h1>
<p className='font-Montserrat text-[#373737] font-medium text-[14px]'>Политика обработки персональных данных</p>
        </div>
    </footer>
  )
}

export default Footer