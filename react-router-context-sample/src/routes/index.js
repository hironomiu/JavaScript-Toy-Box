import ComponentA from '../components/ComponentA'
import Layout from '../components/Layout'
import Login from '../components/Login'
import Root from '../components/Root'

export const routePath = [
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '/component-a',
        element: <ComponentA />,
      },
    ],
  },
]
