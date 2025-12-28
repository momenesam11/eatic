import React from "react";
import deliveryApps from '../assets/deliveryapps.svg'
import mangerApps from '../assets/mangerapps.svg'

export default function Mange() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-content-center text-center gap-4 mb-4 mt-5 pt-5 ">
        <h3 className="text-secondary fw-bold">
          تطبيقات ذكية تدير مطعمك بالكامل من أي مكان
        </h3>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 mb-5 mt-5">
        <div className="delivery d-flex flex-column pt-4 align-items-center text-white gap-4  justify-content-center overflow-hidden py-5 rounded-4">
          <h4 className="mt-5 fs-3 px-5 fw-bold ">تطبيق ذكي لسائقي التوصيل</h4>

          <ul>
            <li className="fs-5 pt-2 fw-semibold">تحديد موقع العميل</li>
            <li className="fs-5 pt-2 fw-semibold">أفضل مسار للتسليم </li>
            <li className="fs-5 pt-2 fw-semibold">إثبات التسليم </li>
            <li className="fs-5 pt-2 fw-semibold">تقليل وقت الدليفري </li>
          </ul>


          <div className="con w-50 position-relative" >
            <img src={deliveryApps} alt="deliveryApps" className="position-relative hover-apps w-100" />
          </div>
        </div>
        <div className="manger d-flex flex-column pt-4  align-items-center text-white gap-4 justify-content-center overflow-hidden py-5 rounded-4">
          <h4 className="mt-5 fs-3 px-5 fw-bold ">تطبيق ذكي لسائقي التوصيل</h4>

          <ul>
            <li className="fs-5 pt-2 fw-semibold">تحديد موقع العميل</li>
            <li className="fs-5 pt-2 fw-semibold">أفضل مسار للتسليم </li>
            <li className="fs-5 pt-2 fw-semibold">إثبات التسليم </li>
            <li className="fs-5 pt-2 fw-semibold">تقليل وقت الدليفري </li>
          </ul>


          <div className="con w-50 position-relative " >
            <img src={mangerApps} alt="deliveryApps" className="position-relative hover-apps w-100" />
          </div>
        </div>
      </div>

      <div className="d-flex gap-3 mt-5 justify-content-center justify-content-md-center mb-5 pb-5">
      <button className="btn btn-primary btn-lg fw-normal  fs-6  shadow-sm" type="button">
        أبدأ تجربتك الان
      </button>
      <button className="btn btn-outline-success btn-lg fw-normal  fs-6  shadow-sm" type="button">
        احجز عرض توضيحي
      </button>
    </div>
    </>
  );
}
