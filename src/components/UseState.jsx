import React, { useState } from 'react'

const UseState = () => {
  const [name, setName] = useState("Jewel");

  // //useEffect

  // useEffect(() => {
  //   console.log("useEffect");
  // }, [])
  
  const changeName = ()=>{
    setName("Jared")
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName} className='btn btn-warning'>Change</button>
    </div>
  )
}

export default UseState