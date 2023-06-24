import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';
import Reset from './components/Reset';

// root routes 
const routes = createBrowserRouter([
  { path: '/', element: <Username></Username>},
  { path: '/password', element: <Password></Password>},
  { path: '/register', element: <Register></Register>},
  { path: '/profile', element: <Profile></Profile>},
  { path: '/recovery', element: <Recovery></Recovery>},
  { path: '/reset', element: <Reset></Reset>},
  { path: '*', element: <PageNotFound></PageNotFound>},
])


const App = () => {
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  )
}

export default App
