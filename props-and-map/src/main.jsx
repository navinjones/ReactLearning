import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import cardata from './components/data'

createRoot(document.getElementById('root')).render(
  <>
  <h1>Car Gallery</h1>
  <StrictMode>
    {cardata.map((values)=>{
      return(
        <App 
          id = {values.id}
          title = {values.title}
          img = {values.img}
          desc = {values.desc}
        />
      )
    })}
  </StrictMode>,
  </>
)
