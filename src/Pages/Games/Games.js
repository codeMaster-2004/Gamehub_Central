import React from 'react'
import './Games.css'

function Games() {
    return (
        <div className='main-container'>
          <div className='flex-row-bba'>
            <div className='rectangle' />
            <div className='rectangle-1' />
          </div>
          <div className='flex-row-deb'>
            <span className='ultimate-tic-tac-toe'>Ultimate tic-tac-toe</span>
            <span className='flappy-bird'>Flappy Bird</span>
          </div>
          <div className='flex-row-a'>
            <div className='rectangle-2' />
            <div className='rectangle-3' />
          </div>
          <div className='flex-row-df'>
            <span className='couch'>Couch 2048</span>
            <span className='flappy-bird-4'>Hang Man</span>
          </div>
          <div className='temp-imagewdt-f' />
        </div>
      );
}

export default Games;