import React from "react";
import logo from "../assets/logo.png";
export default function Clients() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-content-center text-center gap-4 mb-4 mt-5 pt-5 ">
        <h3 className="text-secondary fw-bold">ماذا يقول عملاؤنا؟ </h3>
      </div>

      <div className="d-flex gap-5 flex-column flex-md-row align-items-center justify-content-center mx-4 p-0 mt-md-5 mx-md-5 px-md-5">
        <div className="card  w-100  w-3 p-0">
          <div className="card-body p-2 ">
            <h5 className="card-title px-2 py-3">"سرعة الطلبات زادت بنسبة 40%"</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary px-2 fs-6 lh-lg fw-semibold">
              استخدام نظام eatic ساعدنا نرتّب الطاولات والطلبات بشكل أسرع بكثير
              الـ KDS سهّل التواصل بين الكاشير والمطبخ وقلّل الأخطاء بشكل كبير
            </h6>
            
          </div>
          <div class="card-footer text-body-secondary d-flex align-items-center  gap-3">
               <img src={logo} className="logoClint" />

               <p className="m-0 fw-semibold text-secondary"> مطعم النخيل</p>
                </div>
        </div>
        <div className="card  w-100   w-3 p-0">
          <div className="card-body p-2">
            <h5 className="card-title px-2 py-3">"سرعة الطلبات زادت بنسبة 40%"</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary px-2 fs-6 lh-lg fw-semibold">
              استخدام نظام eatic ساعدنا نرتّب الطاولات والطلبات بشكل أسرع بكثير
              الـ KDS سهّل التواصل بين الكاشير والمطبخ وقلّل الأخطاء بشكل كبير
            </h6>
            
          </div>
          <div class="card-footer text-body-secondary d-flex align-items-center  gap-3">
               <img src={logo} className="logoClint" />

               <p className="m-0 fw-semibold text-secondary"> مطعم النخيل</p>
                </div>
        </div>
        <div className="card  w-100 w-3 p-0">
          <div className="card-body p-2">
            <h5 className="card-title px-2 py-3">"سرعة الطلبات زادت بنسبة 40%"</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary px-2 fs-6 lh-lg fw-semibold">
              استخدام نظام eatic ساعدنا نرتّب الطاولات والطلبات بشكل أسرع بكثير
              الـ KDS سهّل التواصل بين الكاشير والمطبخ وقلّل الأخطاء بشكل كبير
            </h6>
            
          </div>
          <div class="card-footer text-body-secondary d-flex align-items-center  gap-3">
               <img src={logo} className="logoClint" />

               <p className="m-0 fw-semibold text-secondary"> مطعم النخيل</p>
                </div>
        </div>
      </div>
    </>
  );
}
