import React from 'react'
import whitelogo from '../assets/profile-04.svg'
import icon1 from '../assets/icon-1.svg'
import icon2 from '../assets/icon-2.svg'
import icon3 from '../assets/icon-3.svg'
import icon4 from '../assets/icon.svg'


export default function Footer() {
  return <>
    <footer className="bg-primary text-white text-center  mt-5 pt-5 d-flex justify-content-around flex-column  gap-5 pb-5 px-4 px-md-0">
        
        <div className="d-flex justify-content-around">
            <div className="d-flex gap-5 lala ">
            <ul className="d-flex bg-primary flex-column justify-content-center  gap-2 py-4 list-unstyled  m-0 p-0 text-end">
            <li className='text-decoration-none text-white fw-bold pb-3'>الصفحات</li>
            <li><a href="#" className="text-decoration-none text-white fw-medium ">الرئيسية</a></li>
            <li><a href="#" className="text-decoration-none text-white fw-medium ">الاسعار</a></li>
            <li><a href="#" className="text-decoration-none text-white fw-medium ">ماذا عنا</a></li>
        </ul>

        
        <ul className="d-flex bg-primary flex-column justify-content-center  gap-2 py-4 list-unstyled  m-0 p-0 text-end">
            <li className='text-decoration-none text-white fw-bold pb-3'>الدعم والمساعدة</li>
            <li><a href="#" className="text-decoration-none text-white fw-medium ">مساعدة</a></li>
            <li><a href="#" className="text-decoration-none text-white fw-medium ">تواصل معنا</a></li>
            <li><a href="#" className="text-decoration-none text-white fw-medium ">سياسة الخصوصية</a></li>
        </ul>
        </div>

        
        <div className="d-flex bg-primary flex-column justify-content-center  gap-4 py-4 list-unstyled  m-0 p-0 text-end align-items-center">
            <div className="text-decoration-none text-white fw-medium">
                    <img src={whitelogo} alt="logo" width="100" />
                </div>
                <div className="socail d-flex gap-3 justify-content-center">
                    <img src={icon1} alt="icon1" />
                    <img src={icon2} alt="icon2" />
                    <img src={icon3} alt="icon3" />
                    <img src={icon4} alt="icon4" />
                </div>
        </div>
        </div>

        <hr />
        <div className="d-flex justify-content-center text-center">
            <p className="m-0 fw-medium">جميع الحقوق محفوظة &copy; 2024 eatic</p>
        </div>


    </footer>
  
  </>
}
