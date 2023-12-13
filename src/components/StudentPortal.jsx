import React, { useState } from 'react';

const StudentPortal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [allStudents, setAllStudents] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const signUp = () => {
        let newStudent = { firstName, lastName, email };
        setAllStudents([...allStudents, newStudent]);
        resetForm();
    };

    const editStudent = (index) => {
        setEditIndex(index);
        const studentToEdit = allStudents[index];
        setFirstName(studentToEdit.firstName);
        setLastName(studentToEdit.lastName);
        setEmail(studentToEdit.email);
    };

    const saveEditedStudent = () => {
        const updatedStudents = [...allStudents];
        updatedStudents[editIndex] = { firstName, lastName, email };
        setAllStudents(updatedStudents);
        resetForm();
    };

    const deleteStudent = (index) => {
        const updatedStudents = allStudents.filter((_, i) => i !== index);
        setAllStudents(updatedStudents);
    };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setEditIndex(-1);
    };

    return (
        <>
            <h1 className="text-center">StudentPortal</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 mx-auto shadow">
                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="First Name..."
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="Last Name..."
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            className="form-control my-2"
                            type="email"
                            placeholder="Email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {editIndex === -1 ? (
                            <button
                                className="btn btn-sm btn-info my-2 form-control"
                                onClick={signUp}
                            >
                                Sign-Up
                            </button>
                        ) : (
                            <button
                                className="btn btn-sm btn-success my-2 form-control"
                                onClick={saveEditedStudent}
                            >
                                Save
                            </button>
                        )}
                        <hr />
                    </div>
                </div>
            </div>
            <hr />
            <h1 className="text-center">Signed Students</h1>
            <hr />
            {allStudents.length==0 ? <div className='text-center alert alert-danger display-6'>No Students</div> : 
                <table className="table table-striped w-100 my-2">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allStudents.map((student, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button
                                        onClick={() => editStudent(index)}
                                        className="btn btn-sm btn-warning"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteStudent(index)}
                                        className="btn btn-sm btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </>
    );
};

export default StudentPortal;