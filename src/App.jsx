import { useState } from 'react'
import './App.css'
import Cardportal from './assets/components/cardportal'


function App() {

  const cards = [
  {id:1,front:"placeholder1", back:"hello there"},
  {id:2,front:"placeholder2", back:"hello there"},
  {id:3,front:"placeholder3", back:"hello there"},
  {id:4,front:"placeholder4", back:"hello there"},
  {id:5,front:"placeholder5", back:"hello there"},
  {id:6,front:"placeholder6", back:"hello there"},
  {id:7,front:"placeholder7", back:"hello there"},
  {id:8,front:"placeholder8", back:"hello there"},
  {id:9,front:"placeholder9", back:"hello there"},
  {id:10,front:"placeholder10", back:"hello there"},
]

  return (
    <>
      <div> This is a Flash Card Game</div>
      <Cardportal cards = {cards}/>
    </>
  )
}

export default App
