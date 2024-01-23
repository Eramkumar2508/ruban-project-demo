import React from 'react'
import FormPage from './pages/FormPage'
import { Route, Routes } from 'react-router-dom'
import Header from './component/header'
import LandingPage from './pages/LandingPage'
import Footer from './component/footer'
import RegisterForm from './component/form/RegisterForm'
import UserList from './component/users/UserList'
import UserDetails from './component/users/UserDetails'
import ProfileComponent from './component/profile/profile'
import StudentList from './component/users/StudentList'
import Calculator from './pages/Calculator'
import ImagesList from './component/users/ImagesList'
import Box from './pages/Box'


const App = () => {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/registerForm" element={< RegisterForm />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/studentList" element={<StudentList />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/box" element={<Box />} />
        {/* <Route path="/imagesList" element={<ImagesList />} /> */}
      </Routes>
      {/* <ImagesList /> */}
      <Footer />
    </div>
  )
}

export default App