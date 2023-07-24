import { useState } from 'react'
import TimePlayed from './Components/TimePlayed'
import Display from './Components/Display'
import Display2 from './Components/Display2'
import Rotation from './Components/Rotation'
import './App.css'

function App() {

  return (
    <div className='outside'>
      <div className='conjunto'>
      <Display2 />
      <TimePlayed />
      <Display2 />
      </div>
    </div>
  )
}

export default App
