import React from 'react'

const Card = () => {
  return (
    <div className='bg-Bright-orange rounded-t-xl lg:rounded-l-xl lg:rounded-r-none p-16'>
        <img src="./images/icon-sedans.svg" alt="sedans"/>

        <h1 className='text-Very-light-gray font-shoulders text-5xl mt-10'>SEDANS</h1>
          
      <p className='text-Transparent-white text-base font-lexend text-left mt-10'>Choose a sedan for its <br/>
        affordability and excellent<br/>
        fuel economy. Ideal for <br/>cruising in the city
        or on <br/>your next road trip.</p>
          
          <button
            className='py-3 px-10
            font-lexend text-base
            rounded-full mt-24 
            transition duration-100 bg-Very-light-gray text-Bright-orange
            hover:bg-Bright-orange hover:text-Transparent-white hover:border-2
            hover:border-Very-light-gray'>Learn More</button>
    </div>
  )
}

export default Card