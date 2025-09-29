import { useState } from 'react'
import './App.css'
import Cardportal from './assets/components/cardportal'


function App() {

  const cards = [
  {id:1,front:"Why don't scientists trust atoms?", back:"Because they make up everything!"},
  {id:2,front:"What do you call a fake noodle?", back:"An impasta!"},
  {id:3,front:"Why did the scarecrow win an award?", back:"He was outstanding in his field!"},
  {id:4,front:"What do you call a bear with no teeth?", back:"A gummy bear!"},
  {id:5,front:"Why don't eggs tell jokes?", back:"They'd crack each other up"},
  {id:6,front:"What do you call a sleeping bull?", back:"A bulldozer!"},
  {id:7,front:"Why did the bicycle fall over?", back:"It was two tired!"},
  {id:8,front:"What do you call cheese that isn't yours?", back:"Nacho cheese!"},
  {id:9,front:"Why can't you hear a pterodactyl using the bathroom?", back:"Because the 'P' is silent!"},
  {id:10,front:"This is the last card lil bro.", back:"There is no joke here"},
]

  return (
    <>
      <h1 className='title1'> Wanna have fun? </h1>
      <h3 className='title2'>Look at this cards and laugh please they are funny I swear 😩</h3>
      <h4 className='title3'> Number of Jokes:{cards.length} </h4>
      <Cardportal cards = {cards}/>
    </>
  )
}

export default App
