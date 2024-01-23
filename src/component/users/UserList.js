import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {

    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const navigate = useNavigate()
    //const [selectUser, setSelectUser] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    console.log("currentPage:", currentPage)
    const [itemsPerPage] = useState(5);
    console.log("itemsPerPage:", itemsPerPage)

    const fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")

            .then(response => { return response.json() })
            .then(data => { setUsers(data) })
    }

    useEffect(() => {
        fetchUserData()
    }, [])


    const handleIdClick = (id) => {
        navigate(`/userDetails/${id}`);
    }


    // Calculate the index range of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    console.log("indexOfLastItem:", indexOfLastItem)
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    console.log("indexOfFirstItem:", indexOfFirstItem)
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
    // const curUsers = users.splice(1, 3);
    // console.log("currentUsers:", currentUsers)
    // console.log("curUsers:", curUsers)

    const transformedUsers = users.reduce((acc, user, index) => {
        // Transform the user data as needed
        console.log("accumulator acc:", acc);
        console.log("accumulator user:", user);
        console.log("accumulator index:", index);
        acc.push({ id: index + 1, name: user.name, email: user.email });
        return acc;
    }, []);


    const numbers = [1, 2, 3, 4, 5, +"6"];

    const sum = numbers.reduce((accumulator, currentValue) => {
        console.log("accumulator :", accumulator);
        console.log("currentValue :", currentValue);
        return accumulator + currentValue;
    }, 0);

    console.log("RU reduce NU+STR :", sum, typeof sum); // Output: 15

    const numbers1 = [10, 5, 8, 20, 3];

    const max = numbers1.reduce((accumulator, currentValue) => {
        console.log("accumulator1:", accumulator);
        console.log("currentValue1:", currentValue);
        return Math.max(accumulator, currentValue);

    }, -Infinity);

    console.log("max", max); // Output: 20


    const nestedArray = [[1, 2], [3, 4], [5, 6]];

    const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
        console.log("accumulator2", accumulator);
        console.log("currentValue2", currentValue);
        return accumulator.concat(currentValue);
    }, []);

    console.log("flattenedArray", flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

    const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

    const wordCount = words.reduce((acc, word) => {
        console.log("acc", acc);
        console.log("word", word);
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    console.log("wordCount :", wordCount);
    // Output: { apple: 3, banana: 2, orange: 1 }


    return (

        <div className='flex justify-center'>

            <div>
                <input
                    className=' md:h-12  md:w-64 h-5 w-20 md:pl-8 pl-2 border-black-900 mt-2 md:text-lg text-xs'
                    type="text"
                    placeholder="Search with User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <h1 className='text-xl font-bold pt-3'>User List</h1>
                {users.forEach((user, k) => <li key={k}>{user?.name}</li>)}
                <br />

                <table className="table-auto border-collapse border border-slate-600">
                    <thead>
                        <tr>
                            <th className='border border-slate-500 text-center px-4 py-2'>User Id</th>
                            <th className='border border-slate-500 text-center px-4 py-2'>Name</th>
                            <th className='border border-slate-500 text-center px-4 py-2'>Email</th>
                            <th className='border border-slate-500 text-center px-4 py-2'>Address</th>
                            <th className='border border-slate-500 text-center px-4 py-2'>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers?.filter(data => data.name.toLowerCase().includes(name.toLowerCase()))
                            .map(data =>

                                <tr className="even:bg-gray-100 odd:bg-white" onClick={() => handleIdClick(data?.id)}>
                                    <td className='border border-slate-500 px-4 py-2'>{data?.id}</td>
                                    <td className='border border-slate-500 px-4 py-2'>{data?.name}</td>
                                    <td className='border border-slate-500 px-4 py-2'>{data?.email}</td>
                                    <td className='border border-slate-500 px-4 py-2'>{data?.address.city}</td>
                                    <td className='border border-slate-500 px-4 py-2'>{data?.phone}</td>
                                </tr>

                            )}
                    </tbody>
                </table>

                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(users.length / itemsPerPage) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`mx-2 px-4 py-2 border ${currentPage === index + 1 ? 'bg-gray-300' : 'bg-white'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

            </div>
            <br />
            {/* <div>
                {curUsers?.map(userdata =>
                    <ul>
                        <li>{userdata?.name}</li>
                        {/* <li>{userdata?.email}</li> */}
            {/* </ul> */}
            {/* // )} */}
            {/* // </div> */}
            <br />
            {/* <div>
                {transformedUsers.map(userdata => (
                    <ul key={userdata.id}>
                        <li onClick={() => handleIdClick(userdata.id)}>Name :{userdata.name}</li>
                        {/* Additional user data rendering */}
            {/* <li>Email :{userdata.email}</li>
                    </ul>
                ))}
            </div> */}
        </div>

    )
}

export default UserList

// userlist url - "https://jsonplaceholder.typicode.com/users"