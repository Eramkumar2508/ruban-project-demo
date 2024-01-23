import React from 'react'
import Rklogo from '../../assets/logo/Rklogo.jpg'
import logoRk from '../../assets/logo/LogoRk.png'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
    return (

        <div className='flex justify-between md:p-[4rem] p-4 md:flex items-center font-serif'>

            <div>
                <img className=" md:h-12 md:w-30 h-5 w-12 rounded-lg" src={Rklogo} alt="FootPage" />

                <br />

                <img className="md:h-12 md:w-30 h-5 w-12 rounded-lg" src={logoRk} alt="FootPage" />
            </div>

            <div className='md:text-lg text-xs'>
                <h2 className=' font-bold pb-3 '>Support</h2>
                <div>
                    <ul>
                        <li>
                            <Link to="/help">Help</Link>
                        </li>
                        <li>
                            <Link to="/advisories">Advisories</Link>
                        </li>
                        <li>
                            <Link to="/status">Status</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='md:text-lg text-xs'>
                <h2 className=' font-bold pb-3'>
                    Company
                </h2>
                <div>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/press">Press</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='md:text-lg text-xs'>
                <h2 className=' font-bold pb-3'>
                    Terms & Policies
                </h2>

                <div>
                    <ul>
                        <li>
                            <Link to="/polices">Policies</Link>
                        </li>
                        <li>
                            <Link to="/termsofuse">Terms of use</Link>
                        </li>
                        <li>
                            <Link to="/codeofconduct">Code of Conduct</Link>
                        </li>
                        {/* <li>
                            <Link to="/privacy">Privacy</Link>
                        </li> */}
                    </ul>
                </div>
            </div>


        </div>

    )
}

export default FooterComponent

