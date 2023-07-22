import { useState } from 'react'
import TimePlayed from './Components/TimePlayed'

import './App.css'
import Display from './Components/Display'






function App() {

  return (
    <div className='conjunto'>
    <Display />
    <TimePlayed />
    <Display />
    </div>

  )
}

export default App
