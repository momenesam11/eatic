import React from 'react'
import Layout from './layout/Layout'
import './custom-bootstrap.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Price from './pages/pricing/Pricing';
import Blogs from './pages/blogs/Blogs';
import BlogsDetails from './pages/blogs/BlogsDetails';
import PriceDetails from './pages/pricing/PriceDetails';
import Help from './pages/help/Help';
export default function App() {

  var routers=createBrowserRouter([
      {path:'/',element:<Layout/>,children:
        [
        {path:'/', element:<Home/>},
        {path:'/about', element:<About/>},
        {path:'/price', element:<Price/>},
        {path:'/blogs', element:<Blogs/>},
        {path:'//help', element:<Help/>},
        {path:'/blogs/blogs-details', element:<BlogsDetails/> },
        {path:'/price/plan', element:<PriceDetails/> },
        {path:'*', element:<h1>Erorr 404 not found
        </h1>},
      ]}
    ]);


  return <>
     <RouterProvider router={routers} basename="/eatic"></RouterProvider>
   
    </>
  
}
