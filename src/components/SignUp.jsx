import React, { useState } from 'react'

const SignUp = () => {
    const [allStudents, setAllStudents] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        let newStudent = { firstName, lastName, email };
        setAllStudents([...allStudents, newStudent]);
        resetForm();
    };
  return (
    <>
        <div className="form container-fluid shadow">
            <input onChange={(e)=>setFirstName(e.target.value)} className='form-control my-2' type="text" placeholder='First Name...'/>
            <input onChange={(e)=>setLastName(e.target.value)} className='form-control my-2' type="text" placeholder='Last Name...'/>
            <input onChange={(e)=>setEmail(e.target.value)} className='form-control my-2' type="text" placeholder='Email...'/>
            <input onChange={(e)=>setPassword(e.target.value)} className='form-control my-2' type="text" placeholder='Password...'/>
            <button onClick={signUp} className="btn bg-info shadow form-control">Sign-Up</button>
        </div>

        {
            allStudents.length==0 ? <div className='text-center alert alert-danger display-6'>No Students</div> : 
                <table className="table table-striped w-100 my-2">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allStudents.map((student, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>{student.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
    </>
  )
}

export default SignUp