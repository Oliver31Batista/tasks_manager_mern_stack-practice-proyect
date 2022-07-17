import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AccountPage from '../pages/AccountPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectPage from '../pages/ProjectPage'
import RegisterPage from '../pages/RegisterPage'
import UsersPage from '../pages/admin/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'
import Layout from '../components/layouts/Layout'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path='/' element={<HomePage/>} exact/>
            <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
            <Route path='/register' element={<PublicRoute><RegisterPage/></PublicRoute>}/>
            <Route path='/account' element={<PrivateRoute><AccountPage/></PrivateRoute>}/>
            <Route path='/projects' element={<PrivateRoute><ProjectsPage/></PrivateRoute>}/>
            <Route path='/project/:projectId' element={<PrivateRoute><ProjectPage/></PrivateRoute>}/>
            <Route path='/admin/users' element={<PrivateRoute role='admin'><UsersPage/></PrivateRoute>}/>

            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        </Layout>
    </Router>
  )
}
