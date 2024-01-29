import React from 'react'

const Button = (props) => {
    console.log(props);
    const { title, style } = props
  return (
    <>
        <button className={style}>{title}</button>
    </>
  )
}

export default Button