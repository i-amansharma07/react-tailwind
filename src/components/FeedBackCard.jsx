import React from 'react'
import { quotes } from '../assets'

const FeedBackCard = ({feedback}) => {
    console.log(feedback);
    const {content, name, title, img} = feedback;
  return (
    <div className='flex flex-col justify-between px-10 py-12  feedback-card rounded-[20px] max-w-[370px] mr-0 my-5 md:mr-10'>
      <img className='w-[42px] h-[27px] object-contain' src={quotes} alt='double_quotes'/>
      <p className='text-white font-poppins font-normal text-[18px] leading-[32px] my-10'>{content}</p>
      <div className='flex'>
        <img className='w-[48px] h-[48px] object-contain' src={img}/>
        <div className='flex flex-col ml-4'>
            <h1 className='text-white font-poppins font-semibold text-[20px] leading-[32px]'>{name}</h1>
            <p className='text-dimWhite font-poppins font-normal text-[16px] leading-[24px]'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard
