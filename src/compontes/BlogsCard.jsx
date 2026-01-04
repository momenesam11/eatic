import React from "react";
import { Link } from "react-router-dom";

export default function BlogsCard(probs) {
  const deatails=  probs.data
  const { img, title, subtitle, article } = probs.data;
  return (
    <>
      <div className="card rounded-4 p-2">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title text-secondary fw-bolder pb-1 mt-2">{title}</h5>
          <p className="card-text">
            {subtitle}
          </p>
          <Link to="/blogs/blogs-details"   state={{ deatails }} className="btn btn-primary py-2 px-3 mt-1" >
            قراءة المقالة
          </Link>
        </div>
      </div>

    </>
  );
}
