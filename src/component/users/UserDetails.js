import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const UserDetails = () => {

    const [users, setUsers] = useState([])
    const userId = useParams()

    const fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])


    const findUserDetails = users?.find(user => user?.id == userId?.id)
    
    console.log("FindUserDetails:", findUserDetails)


    return (

        <div className='flex justify-center'>

            <div >

                <h1 className='text-xl font-bold pt-3'>User Details</h1>

                <div>
                    <ul>
                        <li>User Id: {findUserDetails?.id}</li>
                        <li>Name:    {findUserDetails?.name}</li>
                        <li>Email:   {findUserDetails?.email}</li>
                        <li>Phone:   {findUserDetails?.phone}</li>
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default UserDetails