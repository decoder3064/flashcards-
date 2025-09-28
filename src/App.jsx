import { useState } from 'react'
import './App.css'
import Cardportal from './assets/components/cardportal'


function App() {

  const cards = [
  {id:1,front:"placeholder", back:"fuck u bitch"},
  {id:2,front:"placeholder", back:"fuck u bitch"},
  {id:3,front:"placeholder", back:"fuck u bitch"},
  {id:4,front:"placeholder", back:"fuck u bitch"},
  {id:5,front:"placeholder", back:"fuck u bitch"},
  {id:6,front:"placeholder", back:"fuck u bitch"},
  {id:7,front:"placeholder", back:"fuck u bitch"},
  {id:8,front:"placeholder", back:"fuck u bitch"},
  {id:9,front:"placeholder", back:"fuck u bitch"},
  {id:10,front:"placeholder", back:"fuck u bitch"},
]

  return (
    <>
      <div> This is a Flash Card Game</div>
      <Cardportal cards = {cards}/>
    </>
  )
}

export default App
