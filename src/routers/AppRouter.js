import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AccountPage from '../pages/AccountPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectPage from '../pages/ProjectPage'
import RegisterPage from '../pages/RegisterPage'
import UsersPage from '../pages/admin/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>} exact/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/account' element={<AccountPage/>}/>
            <Route path='/projects' element={<ProjectsPage/>}/>
            <Route path='/project/:projectId' element={<ProjectPage/>}/>
            <Route path='/admin/users' element={<UsersPage/>}/>

            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </Router>
  )
}
