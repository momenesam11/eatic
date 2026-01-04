import React from 'react'
import Layout from './layout/Layout'
import './custom-bootstrap.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/about/About';
import Price from './pages/pricing/Pricing';
import Blogs from './pages/blogs/Blogs';
import BlogsDetails from './pages/blogs/BlogsDetails';
export default function App() {

  var routers=createBrowserRouter([
      {path:'/',element:<Layout/>,children:
        [
        {path:'/home', element:<Home/>},
        {path:'/about', element:<About/>},
        {path:'/price', element:<Price/>},
        {path:'/blogs', element:<Blogs/>},
        {path:'/blogs/blogs-details', element:<BlogsDetails/> },
        {path:'*', element:<h1>Erorr 404 not found
        </h1>},
      ]}
    ]);


  return <>
     <RouterProvider router={routers} basename="/eatic"></RouterProvider>
   
    </>
  
}
