import React from 'react'
import {clients} from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map(client => {
            return (<div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120pxs] hover:brightness-200`} key={client.id}>
              <img className='w-[100px] sm:w-[192px] object-contain' src={client.logo} alt='client'/>
               </div>)
          })}
      </div>
    </div>
  )
}

export default Clients
