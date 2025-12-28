import React from 'react'
import Hero_image from '../assets/hero_image.png'

export default function Hero() {
  return <>
  

<header className="hero d-flex flex-column flex-md-row flex-md-row-reverse justify-content-md-around justify-content-center align-items-center gap-4">
  <div className="box p-md-5">
    <img src={Hero_image} className="w-100" alt="hero image" />
  </div>
  <div className="left d-flex flex-column justify-content-center p-4 w-fit ">
    <h1 className="text-secondary fw-semibold ">نظام نقاط البيع المتكامل لإدارة مطعمك بذكاء</h1>
    <p className="text-primary fs-5 mt-3">
      منصة eatic توفر لك نظام كاشير احترافي، شاشة عرض للمطبخ، تطبيق للتوصيل،
      تطبيق للمدير، ولوحة دعم العملاء - كل ما تحتاجه لإدارة مطعمك من مكان
      واحد
    </p>
    <div className="d-flex gap-3 mt-5 justify-content-center justify-content-md-start">
      <button className="btn btn-primary btn-lg fw-normal  fs-6  shadow-sm" type="button">
        أبدأ تجربتك الان
      </button>
      <button className="btn btn-outline-success btn-lg fw-normal  fs-6  shadow-sm" type="button">
        احجز عرض توضيحي
      </button>
    </div>
  </div></header>


    
  </>
}
