import React from 'react'

const Practice = () => {
  let myAge = 20
  let myStyle = 'bg-info'
  let gender = 'female'
  let allStudents = [
    {firstName:"Jenny", lastName:"Anniston"},
    {firstName:"Dwayne", lastName:"Johnson"},
    {firstName:"Nike", lastName:"Adidas"},
    {firstName:"Jason", lastName:"Bourne"},
    {firstName:"Selena", lastName:"Gomez"}
  ]
  // const myStyle = {
    //   color:'yellow',
    //   backgroundColor:'blue'
    // }
  return (
    <>
    <h1 className={myStyle}>Practice! {myAge}</h1>
    <h1 className={gender=='male'?'bg-primary':'bg-warning'}>Gender</h1>
    {gender=='male'?<h1>Na man you be</h1>:<h1>The gender that gave Adam apple.</h1>}

    {
      allStudents.map((student, index)=>(
        <div key={index}>
          <h1>Students</h1>
          <h2>{student.firstName} {student.lastName}</h2>
        </div>
      ))
    }
    </>
  )
}

export default Practice;