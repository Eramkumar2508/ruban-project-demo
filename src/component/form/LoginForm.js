import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
// import Rose from '../../assets/images/Rose.jpg'
// import Flower from '../../assets/logo/Flowers.jpg'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../helpers/Backend_helper'

const LoginForm = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  // const[data,setData]=useState();

  // const onSubmit = data =>setData(data);

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState();
  // console.log("333", currentUser)
  const [error, setError] = useState("")

  const onSubmit = async (data) => {

    const res = await userLogin({ ...data })
    if (res.success) {
      localStorage.setItem("authUser", JSON.stringify(res));
      setCurrentUser(res);
      // alert(JSON.stringify(data))
      navigate('/')
    } else {
      setError(res?.msg)
    }
  }

  const handleClick = () => {
    navigate("/registerForm")
  }


  return (
    <div className='flex justify-center'>
      <form className='bg-white shadow-md rounded p-4 mb-4 w-96'
        onSubmit={handleSubmit(onSubmit)} >

        <h1 className='text-xl font-bold'>LogIn Page</h1>

        <br />
        <alert>{error}</alert>
        <div className="pt-3">
          <lable className="block mb-2 ext-gray-700 text-sm font-bold"> Email </lable>
          <input className='shadow appearance-none border rounded w-full py-2 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline ' {...register("email", { required: "Email Address is required", pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "invalid Email" } })}
            aria-invalid={errors.email ? "true" : "false"} />
          <br />
          <div className='text-red-500'>
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
        </div>

        <div className="pt-3">
          <lable className="block mb-2 text-gray-700 text-sm font-bold ">Password </lable>
          <input className='shadow appearance-none border rounded w-full py-2   text-gray-700 
                         leading-tight focus:outline-none focus:shadow-outline '
            name='password' {...register("password", { required: true })} />
        </div>

        <br />

        <div className=''>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white 
                        font-bold py-2 w-full rounded"> SUBMIT </button>
        </div>
        <br />
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white 
                        font-bold py-2 w-full rounded" onClick={handleClick}> SIGN IN</button>
        </div>

        {/* <div className="Formbody">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="card">
            <div className="card-body">
              <div className="FormHead">
                <h1 className='card-header text-xl'> FORM</h1>
              </div>
              <br />
              <div className='row'>

                <div className="mb-3 col-6" >
                  <lable className="form-label"> First Name </lable>
                  <input className='form-control' {...register("firstName", { required: true, maxLength: 20 })} />
                  <br />
                  <div className='Error'>
                    {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
                  </div>
                </div>
                <br />
                <div className="mb-3 col-6">
                  <lable className="form-label"> Last Name </lable>

                  <input className='form-control' {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
                  <br />
                  <div className='Error'>
                    {errors.lastName?.type === 'required' && <p role="alert"> Last name is required</p>}
                  </div>
                </div>
                <br />
                <div className="mb-3 col-6">
                  <lable className="form-label"> Email </lable>
                  <input className='form-control' {...register("mail", { required: "Email Address is required", pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "invalid Email" } })}
                    aria-invalid={errors.mail ? "true" : "false"} /> 
                  <br />
                  <div className='Error'>
                    {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                  </div>
                </div>
                <br />
                <div className="mb-3 col-6">
                  <lable className="form-label"> Age </lable>

                  <input className='form-control' {...register("age", { required: true, min: 18, max: 60 })} />
                  <br />
                  <div className='Error'>
                    {errors.age && (<p>You Must be older then 18 and younger then 60 years old</p>)}
                  </div>
                </div>
                <br />
                <div className="mb-3 col-6">
                  <lable className="form-label"> Old Password </lable>
                  <input className='form-control' name='password' {...register("oldPassword", { required: true })} />
                </div>
                <br />
                <div className="mb-3 col-6">
                  <lable className="form-label"> New Password </lable>
                  <input className='form-control' name='password' {...register("newPassword", { required: true })} />
                </div>
                <div className="mb-3 col-6">
                  <lable className="form-label"> Mobile Number </lable>
                  <input className='form-control' type='number' {...register("mobileNumber", { required: true, maxLength: 11, minLength: 8 })} />
                </div>
                <br />
                <div className="mb-3 col-6">
                  <lable className="form-label"> Gender </lable>
                  <br />
                  <div className="genderbutton">
                    <select name="gender" {...register("gender", { required: true })}>

                      <option value="female"> Male </option>
                      <option value="male"> Female </option>
                      <option value="other"> Other </option>
                    </select>
                  </div>
                </div>

                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> SUBMIT </button>
                </div>

              </div>
            </div>
          </div>

        </form>

        <br />
        <div className='grid gap-4 grid-cols-2 bg-black text-white rounded-lg '>
          <div>Hiii</div>
          <div>Hello</div>
        </div>
        <br />
        <div className=' grid grid-rows-4 grid-flow-col  gap-4'>
          <div className='max-w-xs  overflow-hidden  rounded-lg shadow-lg'>
            <img className='object-cover  w-full h-48 ' src={Flower} Alt="Flower" />
            <div class="px-6 py-4">
              <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">Rose</h4>
              <p class="leading-normal text-gray-700">A rose is either a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. </p>
            </div>
          </div>
        </div>
      </div> */}

      </form>
    </div>
  )
}

export default LoginForm