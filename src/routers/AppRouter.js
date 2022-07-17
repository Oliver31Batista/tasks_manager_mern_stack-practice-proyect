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

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path='/' element={<HomePage/>} exact/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/account' element={<PrivateRoute><AccountPage/></PrivateRoute>}/>
            <Route path='/projects' element={<PrivateRoute><ProjectsPage/></PrivateRoute>}/>
            <Route path='/project/:projectId' element={<PrivateRoute><ProjectPage/></PrivateRoute>}/>
            <Route path='/admin/users' element={<PrivateRoute><UsersPage/></PrivateRoute>}/>

            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        </Layout>
    </Router>
  )
}
