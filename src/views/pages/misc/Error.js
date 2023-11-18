// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Button } from 'reactstrap'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Illustrations Imports
import illustrationsLight from '@src/assets/images/pages/error.svg'
import illustrationsDark from '@src/assets/images/pages/error-dark.svg'
import logo from "@assets/images/logo/s-logo.svg"

// ** Styles
import '@styles/base/pages/page-misc.scss'

const Error = () => {
  // ** Hooks
  const { skin } = useSkin()

  const source = skin === 'dark' ? illustrationsDark : illustrationsLight

  return (
    <div className='misc-wrapper'>
      <a className='brand-logo' href='/'>
        <img src={logo} className='img-fluid' />
        <h2 className='brand-text text-primary ms-1'>Demo</h2>
      </a>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>Page Not Found 🕵🏻‍♀️</h2>
          <p className='mb-2'>Oops! 😖 The requested URL was not found on this server.</p>
          <Button tag={Link} to='/' color='primary' className='btn-sm-block mb-2'>
            Back to home
          </Button>
          <img className='img-fluid' src={source} alt='Not authorized page' />
        </div>
      </div>
    </div>
  )
}
export default Error