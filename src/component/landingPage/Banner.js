import React, { useEffect, useState } from 'react'
import legend from '../../assets/images/HomepageGreen.jpg'
import { getUser } from '../../helpers/Backend_helper'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const HomeBanner = () => {

    const [userDetails, setUserDetails] = useState([]);

    const getList = async () => {
        const res = await getUser()
        if (res.success) {
            setUserDetails(res?.list)
            // console.log("res", res)
        }
    }
    // console.log("111", userDetails);
    useEffect(() => {
        getList()
    }, [])

    // const navigate = useNavigate();

    // const handleListClick = () => {
    //     navigate('/imageList')
    // }

    return (

        <div>
            <div className="relative">

                <img className='w-screen md:h-[600px] ' src={legend} alt="HomePage" />

                <h1 className="absolute text-xs md:text-5xl text-white font-serif top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 ">Test React</h1>
                {/* <h3 className="absolute text-xs md:text-2xl text-blue-300 top-5 left-5">Wel Come</h3> */}
                {/* <h3 className="absolute text-xs md:text-2xl text-green-300 bottom-5 right-5">Thank you</h3> */}
            </div>
            {/* <div>
                <Link to={'/imagesList'}> 
                    <h1 onClick={handleListClick}>ImagesList</h1> 
                     </Link>
            </div> */}
            <br />
            <div className='flex justify-center'>
                <table className="table-auto border-collapse border border-slate-600">
                    <thead>
                        <tr>
                            <th className='border border-slate-500 text-center px-4 py-2'>First Name</th>
                            <th className='border border-slate-500 text-center px-4 py-2'>Last Name</th>
                            <th className='border border-slate-500 text-center px-4 py-2'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDetails.map((user, r) => (
                            <tr className="even:bg-gray-100 odd:bg-white">
                                <td className='border border-slate-500 px-4 py-2' key={r}>{user.firstname}</td>
                                <td className='border border-slate-500 px-4 py-2' key={r}>{user.lastname}</td>
                                <td className='border border-slate-500 px-4 py-2' key={r}>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomeBanner


