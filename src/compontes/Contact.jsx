import React from "react";

export default function Contact() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-content-center align-items-center text-center gap-4 mb-4 mt-5 pt-5 ">
        <h3 className="text-secondary fw-bold">لديك استفسار؟</h3>
        <p className="text-btn-primary fw-medium fs-5 px-3 mx-md-5">

            يسعدنا الرد على جميع استفساراتك حول نظام eatic لإدارة وتشغيل المطاعم

        </p>
        <button className="btn btn-primary btn-lg fw-meduim  fs-6  shadow-sm w-auto" type="button">
       تواصل معنا
      </button>
      </div>
    </>
  );
}
