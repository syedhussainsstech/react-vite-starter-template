// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Button } from 'reactstrap'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from '@utils'

// ** Illustrations Imports
import illustrationsLight from '@src/assets/images/pages/not-authorized.svg'
import illustrationsDark from '@src/assets/images/pages/not-authorized-dark.svg'
import logo from "@assets/images/logo/s-logo.svg"

// ** Styles
import '@styles/base/pages/page-misc.scss'

const NotAuthorized = () => {
  // ** Hooks
  const { skin } = useSkin()

  // ** Vars
  const user = getUserData()

  const source = skin === 'dark' ? illustrationsDark : illustrationsLight

  return (
    <div className='misc-wrapper'>
      <a className='brand-logo' href='/'>
        <img src={logo} className='img-fluid' />
        <h2 className='brand-text text-primary ms-1'>Demo</h2>
      </a>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>You are not authorized! 🔐</h2>
          <Button
            tag={Link}
            color='primary'
            className='btn-sm-block mb-1'
            to={user ? getHomeRouteForLoggedInUser(user.role) : '/'}
          >
            Back to Home
          </Button>
          <img className='img-fluid' src={source} alt='Not authorized page' />
        </div>
      </div>
    </div>
  )
}
export default NotAuthorized
