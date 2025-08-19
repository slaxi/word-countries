import React from 'react'
import { REGION } from '../../constans/constants'
import HomeCart from '../cart/HomeCart'

const HomePage = () => {
  return (
    <>
      {Object.values(REGION).map((continent: typeof REGION[keyof typeof REGION]) => (
        <HomeCart key={continent} continent={continent} className={`region-${continent}`}/>
      ))}
    </>
  )
}

export default HomePage