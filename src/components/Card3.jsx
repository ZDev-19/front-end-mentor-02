import React from 'react'

const Card3 = () => {
  return (
      <div className='bg-Very-dark-cyan lg:rounded-r-xl lg:rounded-l-none p-16 rounded-b-xl'>
          <img src="./images/icon-luxury.svg" alt="luxury" />

          <h1 className='text-Very-light-gray font-shoulders text-5xl mt-10'>LUXURY</h1>

          <p className='text-Transparent-white text-base font-lexend text-left mt-10'>Cruise in the best car brands <br />without the bloated prices.<br />
              Enjoy the enhanced comfort<br /> of a luxury
              rental and arrive<br /> in style.</p>

        <button
            className='py-3 px-10
            font-lexend text-base
            rounded-full mt-24
            transition duration-100 bg-Very-light-gray text-Very-dark-cyan
            hover:bg-Very-dark-cyan hover:text-Transparent-white hover:border-2
            hover:border-Very-light-gray'>Learn More
      </button>
          
      </div>
  )
}

export default Card3