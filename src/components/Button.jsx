import React from 'react'

const Button = (props) => {
    console.log(props.title)
  return (
    <>
        <button onClick={()=>props.sayHello(" Jewel")} className={props.color}>{props.title}</button>
    </>
  )
}

export default Button