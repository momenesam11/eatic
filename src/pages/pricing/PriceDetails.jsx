import React, { useState } from "react";
import sa from "../../assets/lucide_saudi-riyal.svg";
import mark from "../../assets/openmoji_check-mark.svg";
import up from "../../assets/arrow-up.svg";
import down from "../../assets/arrow-down.svg";

import FollowUsSection from "../../compontes/FollowUsSection";

export default function PriceDetails() {
  const [branches, setBranches] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="d-flex col-md-9 w-100 justify-content-between align-items-center flex-column flex-md-row gap-4">
            <div className="request w-100 ">
              <div className="header-request d-flex flex-column align-items-start gap-2">
                <h3 className="text-secondary">طلب شراء الباقة الأساسية</h3>
                <h5 className="text-primary">
                  قم بملأ البيانات الاتيه وسيتم التواصل معك من أجل الحصول علي
                  الباقة
                </h5>
              </div>
              <div className="d-flex gap-3 ps-md-5 flex-column flex-md-row mt-3">
                <input
                  type="text"
                  className="form-control py-2"
                  id="exampleFormControlInput1"
                  placeholder="الاسم"
                />
                <input
                  type="tel"
                  className="form-control py-2"
                  id="exampleFormControlInput1"
                  placeholder="رقم الهاتف"
                />
              </div>

              <div className=" d-flex gap-3 ps-md-0 ps-md-5 flex-column flex-md-row mt-3">
                <input
                  type="text"
                  className="rname form-control py-2"
                  id="exampleFormControlInput1"
                  placeholder="اسم المطعم"
                />
                {/* <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="form-control py-2"
                  placeholder="عدد الفروع"
                /> */}

                <div className="custom-number-input w-100">
                  <input
                    type="number"
                    className="form-control py-2"
                    placeholder="عدد الفروع"
                    value={branches}
                    onChange={(e) => setBranches(e.target.value)}
                  />

                  <div className="arrows d-flex">
                    <div
                      type="button"
                      onClick={() => setBranches(+branches + 1)}
                    >
                      <img src={up} alt="up arrow" />
                    </div>
                    <div
                      type="button"
                      onClick={() =>
                        setBranches(branches > 0 ? +branches - 1 : 0)
                      }
                    >
                      <img src={down} alt="up arrow" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3 ps-md-5 flex-column flex-md-row mt-3">
                <select className="form-select py-2" defaultValue="">
                  <option value="" disabled hidden>
                    اختر الدولة
                  </option>
                  <option value="eg">مصر</option>
                  <option value="sa">السعودية</option>
                  <option value="ae">الإمارات</option>
                </select>
                <input
                  type="text"
                  className="form-control py-2"
                  id="exampleFormControlInput1"
                  placeholder="المدينة"
                />
              </div>
              <button className="btn btn-primary mt-4 py-2 px-4 fw-semibold ">
                أطلب الباقة
              </button>
            </div>

            <div className=" shadow-sm col-md-3 col-12  price-card w-100 px-4 py-4 rounded-2 text-center d-flex flex-column gap-1 justify-content-start  border border-1 w-auto ">
              <div className="d-flex justify-content-between mt-3">
                <h6 className="fw-bold text-primary fs-5">الباقة الأساسية</h6>
                <div className="d-flex gap-1 align-items-center">
                  <h6 className="fw-bold text-primary mb-0 fs-5">299</h6>

                  <img src={sa} alt="sa riyal icon" className="w-3" />
                </div>
              </div>
              <p className="fs-5 text-primary text-end mt-2 mb-0">
                مثالية للمطاعم والمقاهي الصغيرة
              </p>
              <ul className="list-unstyled my-4 text-start pe-1 d-flex flex-column gap-2 ">
                <div className="d-flex gap-2">
                  <img src={mark} alt="advanatges" />
                  <li className="mb-0 fs-5 ">نظام نقاط البيع (كاشير)</li>
                </div>
                <div className="d-flex gap-2">
                  <img src={mark} alt="advanatges" />
                  <li className="mb-0 fs-5 ">شاشة عرض المطبخ</li>
                </div>
                <div className="d-flex gap-2">
                  <img src={mark} alt="advanatges" />
                  <li className="mb-0 fs-5 ">إدارة الطاولات</li>
                </div>
                <div className="d-flex gap-2">
                  <img src={mark} alt="advanatges" />
                  <li className="mb-0 fs-5 ">تقارير أساسية</li>
                </div>
                <div className="d-flex gap-2">
                  <img src={mark} alt="advanatges" />
                  <li className="mb-0 fs-5 ">دعم فني عبر الإيميل</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FollowUsSection/>
    </>
  );
}
