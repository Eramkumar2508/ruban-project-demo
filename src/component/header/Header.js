import React from 'react'
import logo from '../../assets/logo/Rk.jpg'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { userLogout } from "../../helpers/Backend_helper"

const HeaderComponent = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/form')
    }
    const user = JSON.parse(localStorage.getItem("authUser"))

    const handleLogout = async () => {
        const res = await userLogout()
        if (res.success) {
            localStorage.removeItem("authUser")
            navigate("/form")
        }
    }

    return (

        <div className="flex justify-between bg-cyan-900 md:flex items-center font-serif">

            <div className=' p-[1rem] '>
                <Link to={'/'}>
                    <img className='md:h-12 md:w-32 h-5 w-12  rounded-lg' src={logo} alt="Rk Logo" />
                </Link>
            </div>

            <div className='p-[1rem]  flex items-center'>
                <input className=' md:h-12  md:w-64 h-5 w-20 md:pl-8 pl-2 rounded-l-lg md:text-lg text-xs' type="text" placeholder="Search" />
                <button className='h-5 w-12 md:h-12 md:w-32 bg-black rounded-r-lg text-white md:text-lg text-xs'>Search</button>
            </div>

            <div className='p-[1rem] flex items-center gap-2 2xl:gap-3'>
                <div className="flex flex-row">
                    <Link to={'/calculator'}> <h1 className="text-white md:pl-50 md:text-md sm:text-sm px-3 py-2">Calculator</h1> </Link>
                    <Link to={'/box'}> <h1 className="text-white md:pl-50 md:text-md sm:text-sm px-3 py-2">Box</h1> </Link>
                    <Link to={'/userList'}> <h1 className="text-white md:pl-50 md:text-md sm:text-sm px-3 py-2">User List</h1> </Link>
                    {/* <Link to={'/userDetails'}> <h1 className="text-white md:pl-50  px-3 py-2">User Details</h1> </Link> */}
                    {/* <Link to={'/profile'}><h1 className="text-white md:pl-50  px-3 py-2">Profile</h1></Link> */}
                    <Link to={'/studentList'}> <h1 className="text-white md:pl-50 md:text-md sm:text-sm  px-3 py-2">Student List</h1> </Link>
                </div>
                <div>
                    {user ? (<button className='h-5 w-12 md:h-12 md:w-32 bg-white  md:text-lg text-xs
                           hover:bg-sky-700 rounded-lg border border-slate-300'
                        onClick={handleLogout}> LogOut </button>
                    ) : (
                        <button type="submit" className='h-5 w-12 md:h-12 md:w-32 bg-white  md:text-lg text-xs
                          hover:bg-sky-700 rounded-lg border border-slate-300'
                            onClick={handleClick}> LogIn </button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default HeaderComponent