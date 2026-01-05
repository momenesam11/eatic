import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return <>
  
  <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary px-5">
  <div className="container-fluid justify-content-between">
    <img className="navbar-brand logo me-md-5" src={logo} alt="eatic logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse align-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center gap-3">
        <li className="nav-item">
          <NavLink className="nav-link fw-semibold  " aria-current="page" to="/">الرئيسية</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link  fw-semibold" to="/price">الأسعار</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-semibold" to="/blogs">المدونة</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-semibold" to="/about">ماذا عنا </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-semibold" to="/help">المساعدة</NavLink>
        </li>
      </ul>
      <div className="d-flex gap-2 ms-md-5">
        <button className="btn btn-primary px-3 py-2" type="button">
          <span className='fs-6 fw-normal'> أطلب عرض النظام</span>
        </button>
        <button className="btn btn-outline-primary border border-1 shadow-sm px-4" type="button">
          تجربة مجانية
        </button>
      </div>
    </div>
  </div>
</nav>

  
  
  </>
}
