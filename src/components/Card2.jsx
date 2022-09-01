import React from 'react'

const Card2 = () => {
  return (
    <div className='bg-Dark-cyan p-16'>
      <img src="./images/icon-suvs.svg" alt="suvs" />

      <h1 className='text-Very-light-gray font-shoulders text-5xl mt-10'>SUVS</h1>

      <p className='text-Transparent-white text-base font-lexend text-left mt-10'>Take an SUV for its spacious <br />interior, power, and <br /> versatility.
        Perfect for your <br />next family vacation
        and <br />off-road adventures.</p>
      
        <button
          className='py-3 px-10
            font-lexend text-base
            rounded-full mt-24 
            transition duration-100 bg-Very-light-gray text-Dark-cyan
            hover:bg-Dark-cyan hover:text-Transparent-white hover:border-2
            hover:border-Very-light-gray'>Learn More</button>
    </div>
  )
}

export default Card2