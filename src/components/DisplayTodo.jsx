import React from 'react'

const DisplayTodo = (props) => {
    console.log(props);
  return (
    <>
        <h1 className='text-center'>Display Todo</h1>
        {
            props.allTodo.map((eachTodo,index)=>(
                <div key={index}>
                    <p>{index+1} {eachTodo}</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayTodo