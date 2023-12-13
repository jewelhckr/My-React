import React, { useState } from 'react'
// import StudentPortal from './components/StudentPortal'
// import Button from './components/Button'
import AddTodo from './components/AddTodo'
import DisplayTodo from './components/DisplayTodo'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import NavRouting from './components/NavRouting'


const App = () => {
  // const sayHello = (myName)=>{
  //   alert('Hello' + myName)
  // }
  const pushTodo = (todoitem)=>{
    setallTodo([...allTodo, todoitem])
  }
  const [allTodo, setallTodo] = useState([])
  return (
    <>
    <NavRouting/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </>
  )
}

export default App