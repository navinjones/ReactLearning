import { useState } from 'react'
import './App.css'


function App(props) {
  return (
    <>
      <div className="container">
        <div className='card'>
          <h2>{props.title}</h2>
          <img src={props.img} alt="car" />
          <p>{props.desc}</p>
          <hr />
        </div>
      </div>
    </>
  )
}

export default App
