import React from 'react'
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import icon3 from "../assets/icon-3.svg";
import icon4 from "../assets/icon.svg";
import email from "../assets/mdi_email.svg";
import location from "../assets/mingcute_location-fill.svg";
import phone from "../assets/ic_baseline-phone.svg";




export default function FollowUsSection() {
  return <>
  <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start py-5">
            <div className="header-request d-flex flex-column align-items-start gap-4">
              <h4 className="text-secondary">تابعنا الان</h4>
              <h5 className="text-primary">
                كما يمكنك التواصل معنا من خلال البريد الالكتروني او متابعتنا علي
                منصات التواصل الاجتماعي
              </h5>

              <div className="socail d-flex gap-3 justify-content-center">
                <img src={icon1} alt="icon1" className="shadow-sm" />
                <img src={icon2} alt="icon2"  className="shadow-sm"/>
                <img src={icon3} alt="icon3" className="shadow-sm" />
                <img src={icon4} alt="icon4" className="shadow-sm" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start py-5">

             <div className="w-100 d-flex align-items-center shadow-sm py-3 px-3 border rounded-2 mb-3 border-1">
                <div className="icon-content">
                    <img src={email} alt="email icon" className="w-75"/>
                </div>
                <div className="content-text d-flex flex-column gap-1">
                      <h6 className="fw-bold">البريد الالكتروني</h6>
                      <h5 className="fw-semiibold mb-0 ">eatic.i@info.com</h5>
                </div>
            </div>   

            <div className="w-100 d-flex align-items-center shadow-sm py-3 px-3 border rounded-2 mb-3 border-1">
                <div className="icon-content">
                    <img src={phone} alt="phone icon" className="w-75"/>
                </div>
                <div className="content-text d-flex flex-column gap-1">
                      <h6 className="fw-bold">رقم الهاتف</h6>
                      <h5 className="fw-semiibold mb-0 ">0123456789</h5>
                </div>
            </div>   

            <div className="w-100 d-flex align-items-center shadow-sm py-3 px-3 border rounded-2 mb-3 border-1">
                <div className="icon-content">
                    <img src={location} alt="location icon" className="w-75"/>
                </div>
                <div className="content-text d-flex flex-column gap-1">
                      <h6 className="fw-bold">العنوان</h6>
                      <h5 className="fw-semiibold mb-0 ">المعادي, القاهرة , مصر</h5>
                </div>
            </div>           

          </div>
        </div>
      </div>
  
  
  </>
}
