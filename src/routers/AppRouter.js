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
import roles from '../helpers/roles'
import routes from '../helpers/routes'

export default function AppRouter() {
  return (
    // <Router>
      <Layout>
        <Router>
            <Route path={routes.home} element={<HomePage/>} exact/>
            <Route path={routes.login} element={<PublicRoute><LoginPage/></PublicRoute>}/>
            <Route path={routes.register} element={<PublicRoute><RegisterPage/></PublicRoute>}/>
            <Route path={routes.account} element={<PrivateRoute><AccountPage/></PrivateRoute>}/>
            <Route path={routes.projects} element={<PrivateRoute><ProjectsPage/></PrivateRoute>}/>
            <Route path={routes.project()} element={<PrivateRoute><ProjectPage/></PrivateRoute>}/>
            <Route path={routes.admin.users} element={<PrivateRoute role={roles.admin}><UsersPage/></PrivateRoute>}/>

            <Route path='*' element={<NotFoundPage/>}/>
        </Router>
        </Layout>
    // </Router>
  )
}
