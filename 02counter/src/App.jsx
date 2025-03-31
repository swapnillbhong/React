import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Project from './components/project/project'

function App() {

  return(
    <div>
      <Header/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
