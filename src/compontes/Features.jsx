import React from "react";
import image from "../assets/Studio-Display.svg";

export default function Features() {
  return (
    <>
      <div className="featrues d-flex flex-column justify-content-center p-0 m-0 p-md-5 m-md-5 align-items-center">
        <header className="d-flex flex-column justify-content-center align-content-center text-center gap-4 mb-4 mt-5 mb-0 px-3">
          <h3 className="text-secondary fw-bold">
            مزايا نظام eatic لإدارة وتشغيل المطعم
          </h3>
          <h5 className=" text-primary">
            منصة واحدة تجمع كل ما يحتاجه مطعمك لإدارة الطلبات، الكاشير، المطبخ،
            التوصيل، والمخزون بشكل سهل الاستخدام.
          </h5>
        </header>
        <div className="content d-flex flex-column flex-md-row gap-5 justify-content-end align-items-center mt-5 w-75">
          <div className="box w-3 ms-5">
            <img src={image} className="w-100" alt="hero image" />
          </div>
          <div
            className="accordion accordion-flush w-50 w-100 d-flex flex-column align-items-center" 
            id="accordionFlushExample"
          >
            <div className="accordion-item  rounded-4  mb-3 w-100">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-6 fw-semibold py-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-mange"
                  aria-expanded="false"
                  aria-controls="flush-mange"
                >
                  إدارة الطلبات بأنواعها
                </button>
              </h2>
              <div
                id="flush-mange"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                  عرض الطاولات، متابعة الحالة، وتحسين سرعة الخدمة داخل المطعم.
                  <img src={image} className="w-75 me-auto ms-auto mt-5 pt-2 mobile-iamge " alt="hero image" />
                </div>
              </div>
            </div>
            <div className="accordion-item  rounded-4  mb-3 w-100">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-6 fw-semibold py-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-table"
                  aria-expanded="false"
                  aria-controls="flush-table"
                >
                  إدارة الطاولات{" "}
                </button>
              </h2>
              <div
                id="flush-table"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                  عرض الطاولات، متابعة الحالة، وتحسين سرعة الخدمة داخل المطعم.
                  <img src={image} className="w-75 me-auto ms-auto mt-5 pt-2 mobile-iamge" alt="hero image" />
                </div>
              </div>
            </div>
            <div className="accordion-item  rounded-4  mb-3 w-100">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-6 fw-semibold py-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-kitchen"
                  aria-expanded="false"
                  aria-controls="flush-kitchen"
                >
                  دعم شاشة المطبخ{" "}
                </button>
              </h2>
              <div
                id="flush-kitchen"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                  عرض الطاولات، متابعة الحالة، وتحسين سرعة الخدمة داخل المطعم.
                  <img src={image} className="w-75 me-auto ms-auto mt-5 pt-2 mobile-iamge" alt="hero image" />
                </div>
              </div>
            </div>
            <div className="accordion-item  rounded-4  mb-3 w-100">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-6 fw-semibold py-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-print"
                  aria-expanded="false"
                  aria-controls="flush-print"
                >
                  طباعة فواتير فورية{" "}
                </button>
              </h2>
              <div
                id="flush-print"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                  عرض الطاولات، متابعة الحالة، وتحسين سرعة الخدمة داخل المطعم.
                  <img src={image} className="w-75 me-auto ms-auto mt-5 pt-2 mobile-iamge" alt="hero image" />
                </div>
              </div>
            </div>
            <div className="accordion-item  rounded-4  mb-3 w-100">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-6 fw-semibold py-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-track"
                  aria-expanded="false"
                  aria-controls="flush-track"
                >
                  تتبع الطلبات لحظيًا{" "}
                </button>
              </h2>
              <div
                id="flush-track"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body bg-primary text-white px-3 py-4 rounded-bottom-3">
                  عرض الطاولات، متابعة الحالة، وتحسين سرعة الخدمة داخل المطعم.
                  <img src={image} className="w-75 me-auto ms-auto mt-5 pt-2 mobile-iamge" alt="hero image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
