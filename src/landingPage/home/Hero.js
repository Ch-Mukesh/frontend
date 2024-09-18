import React from 'react'

function Hero() {
  return (
    <div className='container p-5'>
        <div className='row text-center'>
                <img src='media/homeHero.png' alt='heroImg' className='mb-5'/>
                <h1 className='mt-3'>Invest in everything</h1>
                <p>Online Platform To Invest In Stocks,Derivations,MutualFunds and More..</p>
                <button className='btn btn-primary m-auto' style={{width:"30%"}}>SignUp</button>
        </div>
      </div>
  )
}

export default Hero;