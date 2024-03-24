import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
       <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2}`}>
            Find a better card deal <br className='hidden sm:block'/> in few easy steps.
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis. Modi dolor tempore doloremque at repudiandae, maiores quod temporibus voluptatem, quos aliquid quibusdam, est recusandae saepe id! 
            </p>
          </h2>
        <Button styles='mt-10'>Get Started</Button>
        </div>
       <div className={`${layout.sectionImg}`}>
        <img className='w-[100%] h-[100%]' src={card} alt='card'/>
        </div> 
       
    </section>
  )
}

export default CardDeal
