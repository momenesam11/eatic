import React from 'react'
import ImageMap from '../assets/World Map Pattern.png'
import HappyIcon from '../assets/streamline_smiley-happy.png'
import PosIcon from '../assets/mdi_printer-pos-network-outline.png'
import RestruantIcon from '../assets/ion_restaurant-outline.png'

export default function Numbers() {
  return <>
<div className="numbers d-flex align-items-center justify-content-start me-md-5 pe-md-5 gap-4 mb-5 flex-column flex-md-row">
  <div className="box-number">
    <img src={ImageMap} className="w-100 me-auto" alt="hero image" />
  </div>
  <div className="numbers-content  me-md-5 pe-md-5 ">
    <h1 className="fs-3 text-secondary fw-bold text-center text-md-end">ارقمنا تتحدث</h1>
    <div className=" items d-flex gap-sm-3 gap-5 pe-sm-2 gap-md-2 mt-5 flex-column flex-sm-row">
      <div className="item d-flex gap-3">
        <div className="item-icon w-25">
          <img src={RestruantIcon} className="w-100" alt="hero image" />
        </div>
        <div className="item-text d-flex flex-column">
          <h3 className="fs-4 fw-bolder">+ 120</h3>
          <h4 className="fs-5">سلسلة مطاعم</h4>
        </div>
      </div>
      <div className="item d-flex gap-3">
        <div className="item-icon w-25">
          <img src={PosIcon} className="w-100" alt="hero image" />
        </div>
        <div className="item-text d-flex flex-column">
          <h3 className="fs-4 fw-bolder">+ 1150</h3>
          <h4 className="fs-5">نظام يعمل الان</h4>
        </div>
      </div>
      <div className="item d-flex gap-3">
        <div className="item-icon w-25">
          <img src={HappyIcon} className="w-100" alt="hero image" />
        </div>
        <div className="item-text d-flex flex-column">
          <h3 className="fs-4  fw-bolder">98%</h3>
          <h4 className="fs-5">معدل رضا العملاء</h4>
        </div>
      </div>
    </div>
  </div>
</div>



  
  </>
}
