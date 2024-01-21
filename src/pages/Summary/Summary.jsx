import React from 'react'
import './Summary.css'
import SummaryCal from './SummaryCal'

const Summary = () => {

  return (
    <div className="main-container flex flex-col md:flex-row">
    <div className="w-full sm:p-12 md:w-1/3 p-5 lg:p-20 hero-container">
      {/* <img src={Logo} alt='GameSync logo' /> */}
      <h3 className="sm:pl-5 sm:text-sm md:text-sm md:pl-1 lg:text-lg pb-10 uppercase">Game Session Scheduler</h3>
      <p className="text-center md:text-left">Effortless gaming with friends. Simply choose your preferred games, input your weekly availability, and let us work our magic to craft a personalized schedule, not only streamlining your gaming sessions with friends but also providing estimated play durations, ensuring you make the most of your time conquering virtual realms together.</p>
    </div>
    <div className="w-full sm:p-12 md:w-2/3 p-5 lg:p-20 flex-col">
      <h1 className='font-main text-6xl text-cyan pb-3'>SQUAD NAME</h1>
      <h2 className='font-main text-4xl text-white pb-3'>Your optimal gaming schedule for GAME is set!</h2>
      <p className='pb-6'>Stick to the schedule and you'll conquer GAME in X TIME!</p>
      <SummaryCal />
    </div>
  </div>
  )
}

export default Summary