import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Layout from './Authentication/Layout'
import Dashboard from './pages/home/Dashboard'
import ProtectedRoute from './Authentication/ProtectedRoute'
import { Provider } from 'react-redux'
import { store } from './store/store'
import SignInPage from './unprotected/SignIn'
import { AuthProvider } from './Authentication/AuthProvider'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import MyRequests from './pages/requests/MyRequests'

import NewRequest from "./pages/NewRequest";

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Layout />,
    children: [
      {
        path: '/home/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/home/myrequest',
        element: (
          <ProtectedRoute>
            <MyRequests />
          </ProtectedRoute>
        ),
      },
      {
        path: '/home/new-request', 
        element: (
          <ProtectedRoute>
            <NewRequest />
          </ProtectedRoute>
        ),
      }
    ],
  },
  {
    path: '/',
    element: <SignInPage />,
  },
]);



function App() {
  
  return (
    
    <>


  <LocalizationProvider>
  <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </LocalizationProvider>


  </>
    
  )
}

export default App



    