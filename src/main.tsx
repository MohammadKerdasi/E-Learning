import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store/index.ts';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout.tsx';
import Home from './pages/Home/Home.tsx';
import Courses from './pages/Courses/Courses.tsx';
import AboutUs from './pages/AboutUS/AboutUs.tsx';
import Pricing from './pages/Pricing/Pricing.tsx';
import Contact from './pages/Contact/Contact.tsx';
import CoursesOpen from './pages/CoursesOoen/CoursesOpen.tsx';
import Auth from './pages/Auth/Auth.tsx';
import ProtectedRoute from './hooks/ProtectedRoute.tsx';
import Error from './pages/Error/Error.tsx';

const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      children :
      [
        {
          path: '',
          element: <Home/>
        },
        {
          path: 'Courses',
          element: <Courses/>,
        },
        {
          path: 'OpenPage/:id',
          element: <ProtectedRoute/>,
          children: 
          [
            {
              path:'',
              element: <CoursesOpen/>
            },
          ]
        },
        {
          path: 'About',
          element: <AboutUs/>
        },
        {
          path: 'Pricing',
          element: <Pricing/>
        },
        {
          path: 'Contact',
          element: <Contact/>
        },
        {
          path: '/auth/:formType',
          element: <Auth/>,
        },
        {
          path : '*',
          element: <Error/>
        }
      ],
    },
    
  ],
  {
    basename : '/E-Learning/'
  }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>,
)
