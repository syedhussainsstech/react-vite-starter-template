// ** Icons Import
import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home />,
    children: [
      {
        id: 'home',
        title: 'Home',
        icon: <Circle size={12} />,
        navLink: '/dashboard/home'
      }
      // {
      //   id: 'analyticsDash',
      //   title: 'Analytics',
      //   icon: <Activity />,
      //   navLink: '/dashboard/analytics'
      // },
      // {
      //   id: 'eCommerceDash',
      //   title: 'eCommerce',
      //   icon: <ShoppingCart />,
      //   navLink: '/dashboard/ecommerce'
      // }
    ]
  }
]
