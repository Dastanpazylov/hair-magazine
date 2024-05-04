import React from 'react';
import plus from '../../assets/plus.svg'
import './WatchMore.css';


const WatchMore = () => {
  return (
    <div className='watch-more flex justify-center items-center mt-[4em]'>
        <div className='intermittent-border'>
            <div className='flex justify-center items-center mt-[-0.5em]'>
                <img src={plus} alt="" />
                <h5 className='pl-[0.625em] font-Montserrat font-medium text-[20px] text-[#373737]'>Смотреть еще</h5>
            </div>
        </div>
    </div>
  )
}

export default WatchMore