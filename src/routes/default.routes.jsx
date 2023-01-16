import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const defaultRoutes = [
  {
    path: '/',
    element: <Login />,
    children: [{ path: '/home', element: <Home /> }],
  },
]
