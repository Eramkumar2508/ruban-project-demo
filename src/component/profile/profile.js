import React, { useState } from 'react'
import logo from '../../assets/logo/images.jpg'
import { userUpdate } from '../../helpers/Backend_helper';
import { useNavigate } from 'react-router-dom';

const ProfileComponent = () => { 

    const navigate = useNavigate() 
    const user = JSON.parse(localStorage.getItem("authUser"))

    const [firstName, setFirstName] = useState(user?.firstname); 
    const [lastName, setLastName] = useState(user?.lastname); 
    // console.log("444", firstName, lastName) 

    const handleSubmit = async () => { 
        const payload = {  
            email: user?.email, 
            firstname: firstName, 
            lastname: lastName 
        }
        // console.log(payload)

        const res = await userUpdate(payload)
        if (res.success) {
            localStorage.setItem("authUser", JSON.stringify(res));
            // navigate('/') 
        }
    }

    return (
        <div className="flex justify-center">
            {/* <h1>Profile</h1> */}
            <div className="border border-gray-400 lg:border-gray-400 bg-white p-4">
                <div className="mb-4">
                    <div>
                        <img className="w-28 h-28 rounded-full flex justify-center"
                            src={logo} alt="Profile Picture" />
                    </div>
                    <br />
                    <form >
                        <div>
                            <p className="block mb-2 ext-gray-700 text-sm font-bold">FirstName</p>
                            <input
                                className='shadow appearance-none border rounded w-full pl-2 py-2 text-sm text-gray-700
                                           leading-tight focus:outline-none focus:shadow-outline '
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <br />

                        <div>
                            <p className="block mb-2 ext-gray-700 text-sm font-bold">LastName</p>
                            <input
                                className='shadow appearance-none border rounded w-full pl-2 py-2 text-sm text-gray-700
                                             leading-tight focus:outline-none focus:shadow-outline '
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <br />

                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white 
                        font-bold py-2 w-full rounded" type="submit" onClick={handleSubmit} >Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent