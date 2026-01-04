import React from 'react'
import Navbar from '../compontes/Navbar'
import Footer from '../compontes/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
      </>
}
