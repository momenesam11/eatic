import React from "react";
import Header from "../../compontes/HeaderPrice";
import sa from "../../assets/lucide_saudi-riyal.svg";
import sa_white from "../../assets/lucide_saudi-riyal-white.svg";
import mark from "../../assets/openmoji_check-mark.svg";

export default function Pricing() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row  gap-4  justify-content-center align-items-center  pricing-row ">
          <div className="pri shadow-sm col-md-4 col-12  price-card  p-4 rounded-4 text-center d-flex flex-column gap-3 justify-content-start  border border-1 w-auto ">
            <div className="d-flex justify-content-between mt-3">
              <h4 className="fw-bold text-primary ">الباقة الأساسية</h4>
              <div className="d-flex gap-1">
                <h4 className="fw-bold text-primary ">299</h4>

                <img src={sa} alt="sa riyal icon" className="w-50" />
              </div>
            </div>
            <p className="fs-5 text-primary text-end mt-3">
              مثالية للمطاعم والمقاهي الصغيرة
            </p>
            <ul className="list-unstyled mt-4 text-start pe-3 d-flex flex-column gap-2 ">
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">نظام نقاط البيع (كاشير)</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">شاشة عرض المطبخ</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">إدارة الطاولات</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">تقارير أساسية</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">دعم فني عبر الإيميل</li>
              </div>
            </ul>
            <button className="btn btn-primary mt-auto py-3 fw-semibold ">
              اشتري الان
            </button>
          </div>

          <div className="most-saller shadow-lg col-md-4 col-12  price-card  position-relative ps-4 pe-4 pb-3 pt-5 rounded-4 text-center text-white d-flex flex-column gap-2 justify-content-start  border border-1 bg-primary  ">
            <span class="badge text-bg-secondary position-absolute top-0 start-50 translate-middle bg-white px-5 py-3 border border-1 border-primary rounded-5 fs-6 fw-semibold">
              الباقة الاحترافية
            </span>

            <div className="d-flex justify-content-between mt-3 text-white">
              <h4 className="fw-bold text-primary  text-white">
                الباقة الأساسية
              </h4>
              <div className="d-flex gap-1">
                <h4 className="fw-bold text-primary  text-white">599</h4>

                <img src={sa_white} alt="sa riyal icon" className="w-50 " />
              </div>
            </div>
            <p className="fs-5 text-primary text-end mt-3 text-white">
              الأنسب للمطاعم المتوسطة والمتنامية
            </p>
            <ul className="list-unstyled mt-4 text-start pe-3 d-flex flex-column gap-2 ">
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">كل مميزات الباقة الأساسية</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">تطبيق التوصيل للسائقين</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">تطبيق المدير</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">لوحة دعم العملاء</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">كل مميزات الباقة الأساسية</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">إدارة المخزون المتقدمة</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">إدارة المخزون المتقدمة</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">تقارير وتحليلات شاملة</li>
              </div>
            </ul>
            <button className="btn btn-primary bg-white text-primary  mt-auto py-3 fw-bold ">
              اشتري الان
            </button>
          </div>

          <div className="pri shadow-sm col-md-4 col-12  price-card  p-4 rounded-4 text-center d-flex flex-column gap-3 justify-content-start  border border-1 w-auto ">
            <div className="d-flex justify-content-between mt-3">
              <h4 className="fw-bold text-primary ">باقة المؤسسات</h4>
            </div>
            <p className="fs-5 text-primary text-end mt-3">
              للسلاسل الكبيرة والأعمال المتعددة
            </p>
            <ul className="list-unstyled mt-4 text-start pe-3 d-flex flex-column gap-2 ">
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">كل مميزات الباقة الاحترافية</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">إدارة فروع متعددة</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">تقارير موحدة للفروع</li>
              </div>
              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">تخصيص كامل للنظام</li>
              </div>

              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">واجهة برمجية API</li>
              </div>

              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">مدير حساب مخصص</li>
              </div>

              <div className="d-flex gap-3">
                <img src={mark} alt="advanatges" />
                <li className="mb-2 fs-5 ">دعم فني أولوية قصوى</li>
              </div>
            </ul>
            <button className="btn btn-primary mt-auto py-3 fw-semibold ">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
