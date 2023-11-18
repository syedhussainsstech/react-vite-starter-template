// ** React Imports
import { lazy } from 'react'

const Login = lazy(() => import('../../views/pages/authentication/Login'))
const Register = lazy(() => import('../../views/pages/authentication/Register'))
const ForgotPassword = lazy(() => import('../../views/pages/authentication/ForgotPassword'))
const ResetPassword = lazy(() => import('../../views/pages/authentication/ResetPassword'))
const VerifyEmail = lazy(() => import('../../views/pages/authentication/VerifyEmail'))

const AuthenticationRoutes = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: '/register',
    element: <Register />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: '/verify-email',
    element: <VerifyEmail />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  }
]

export default AuthenticationRoutes
