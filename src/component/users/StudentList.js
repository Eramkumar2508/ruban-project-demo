import React from 'react'
import { useEffect, useState } from 'react'


const StudentList = () => {

    const [data, setData] = useState([]);
    const [student, setStudent] = useState();
    const [show, setShow] = useState(true);

    const StudentData = () => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    useEffect(() => {
        StudentData()
    }, [])

    const handleClick = (student) => {
        setStudent(student?.id)
        setShow(true);
    }

    console.log("id:", student)

    return (
        <div className='container'>

            <h1 className='text-xl font-bold pt-3'>StudentList</h1>
            <br />
            {
                data.map((student, d,e) => (
                    <ul>
                        {show && <li>open</li>}
                        { !show && <li>close</li>}
                        <li key={d}>Title : {student.title}</li>
                        <li key={e}>Body : {student.body}</li>
                        <br />
                        <button className='h-5 w-12 md:h-12 md:w-32 bg-white  md:text-lg text-xs
                          hover:bg-sky-700 rounded-lg border border-slate-300'
                            onClick={() => handleClick(student)}>Click</button>

                        <button className='h-5 w-12 md:h-12 md:w-32 bg-white  md:text-lg text-xs
                          hover:bg-sky-700 rounded-lg border border-slate-300'
                            onClick={() => setShow(false)}>Click Me</button>
                    </ul>
                ))
            }
        </div>
    )
};

export default StudentList