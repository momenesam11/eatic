import React from 'react'
import { useLocation } from "react-router-dom";

export default function BlogsDetails() {

   const { state } = useLocation();
  const data = state?.deatails;

  if (!data) {
    return (
      <div className="container py-5 text-center">
        <h2 className='mt-5 pt-5'>المقالة غير متوفرة</h2>
      </div>
    );
  }

  const { img, title, subtitle, article } = data;

  return (
    <section className="blog-details-page py-5">
      <div className="container">

        {/* 🔹 Hero Section */}
        <div className="row align-items-center justify-content-center my-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="text-success fw-bold d-block mb-2">
              عنوان المقالة
            </span>
            <h1 className="fw-bold mb-3">{title}</h1>
            <p className="text-muted fs-5">{subtitle}</p>
          </div>

          <div className="col-lg-6">
            <img
              src={img}
              alt={title}
              className="img-fluid rounded-4 shadow-sm w-100"
            />
          </div>
        </div>

        {/* 🔹 Article Sections */}
        <div className="blog-content">

          {
          article.map((section, index) => (
            <div key={index} className="blog-section mb-5">

              <h4 className="fw-bold text-success mb-3">
                {section.sectioName}
              </h4>

              <p className="text-muted fs-4">
                {section.sectioDetails}
              </p>


            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
