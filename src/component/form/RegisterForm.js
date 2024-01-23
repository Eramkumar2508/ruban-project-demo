import React from 'react'
import { useForm } from 'react-hook-form';
// import './App.css'
import { useNavigate } from 'react-router-dom';
import { userRegisteration } from '../../helpers/Backend_helper';

const RegisterForm = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const res = await userRegisteration({ ...data })
        // alert(JSON.stringify(data))
        navigate('/form')
        console.log("rk", data);
    };

    //  const handleSubmit = data => alert(JSON.stringify(data));

    return (

        <div className='flex justify-center'>
            <form

                className='bg-white shadow-md rounded p-4 mb-4 w-96'

                onSubmit={handleSubmit(onSubmit)}>

                <h1 className='text-xl font-bold'>Register Page</h1>

                <br />

                <div className="" >
                    <lable className="block  mb-2 text-gray-700 text-sm font-bold w-full"> First Name </lable>

                    <input className=' shadow appearance-none border border-red-500 rounded w-full pl-2 py-2 text-gray-700
                         leading-tight ' {...register("firstname", { required: true, maxLength: 20 })} />
                    <br />
                    <div className='text-red-500'>
                        {errors.firstname?.type === 'required' && <p role="alert">First name is required</p>}
                    </div>
                </div>

                <div className="pt-3">
                    <lable className="block mb-2 text-gray-700 text-sm font-bold"> Last Name </lable>

                    <input className='shadow appearance-none border rounded w-full pl-2 py-2 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline ' {...register("lastname", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    <br />
                    <div className='text-red-500'>
                        {errors.lastname?.type === 'required' && <p role="alert"> Last name is required</p>}
                    </div>
                </div>

                <div className="pt-3">
                    <lable className="block mb-2 ext-gray-700 text-sm font-bold"> Email </lable>
                    <input className='shadow appearance-none border rounded w-full pl-2 py-2 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline ' {...register("email", { required: "Email Address is required", pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "invalid Email" } })}
                        aria-invalid={errors.email ? "true" : "false"} />
                    <br />
                    <div className='text-red-500'>
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                    </div>
                </div>


                {/* <div className="pt-3">
                    <lable className="block mb-2 text-gray-700 text-sm font-bold"> Mobile Number </lable>
                    <input className='shadow appearance-none border rounded w-full py-2  text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline ' type='number' {...register("mobileNumber", { required: true, maxLength: 11, minLength: 8 })} />
                </div> */}

                < div className="pt-3">
                    <lable className="block mb-2 text-gray-700 text-sm font-bold ">Password </lable>
                    <input className='shadow appearance-none border rounded w-full pl-2 py-2   text-gray-700 
                         leading-tight focus:outline-none focus:shadow-outline '
                        name='password' {...register("password", { required: true })} />

                </div>

                <br />
                <div className=''>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white 
                        font-bold py-2 w-full rounded"> SUBMIT </button>

                </div>

            </form >
        </div >
    )
}

export default RegisterForm