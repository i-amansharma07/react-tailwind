import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col w-full h-full bg-primary rounded-full leading-[23px]`} >
        <p className='flex '>
            <span className='text-gradient'>Get</span>
            <img className='w-[23px] h-[23px] object-contain ml-[3px]' src={arrowUp}/>
        </p>
        <p>
            <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
