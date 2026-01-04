import React from "react";

export default function HeaderPrice() {
  return (
    <>
      <header className="hero-price d-flex flex-column justify-content-center align-content-center text-center gap-4 mb-4 mt-5 mb-0 px-3">
        <h3 className="text-secondary fw-bold">باقات تناسب جميع الأحجام</h3>
        <h5 className=" text-primary">
          اختر الباقة المناسبة لحجم عملك - جميع الباقات تشمل تجربة مجانية لمدة
          30 يوماً
        </h5>

        <div className="box-price-plan     ">
            <ul className="nav nav-pills justify-content-center mt-4 align-items-center gap-3 bg-body-tertiary p-0 w-auto d-inline-flex rounded-5" >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              3 أشهر
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#">
              6 أشهر
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              سنة
            </a>
          </li>
          
        </ul>
        </div>
      </header>
    </>
  );
}
