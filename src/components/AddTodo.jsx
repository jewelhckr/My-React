import React, { useState } from 'react'

const AddTodo = (props) => {
    const [todoitem, settodoitem] = useState("");
  return (
    <>
        <h1 className='text-center'>Add Todo</h1>
        <div className="container-fluid">
            <div className="row">
                <div className="col-9 mx-auto shadow-sm">
                    <input 
                    type="text" 
                    placeholder='Todo Item...' 
                    className="form-control my-2" 
                    onChange={(e)=>settodoitem(e.target.value)}
                    />
                    <button onClick={()=>props.pushTodo(todoitem)} className='btn btn-info my-2 form-control'>Add Todo</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddTodo