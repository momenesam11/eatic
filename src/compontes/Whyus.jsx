import React from "react";
import delivaryIcon from '../assets/mdi_delivery-dining.svg'
import dashboardIcon from '../assets/material-symbols_dashboard.svg'
import foodProcessorIcon from '../assets/mdi_food-processor.svg'
import printerIcon from '../assets/mdi_printer-pos.svg'
import posIcon from '../assets/mdi_network-pos.svg'
import noWifiIcon from '../assets/clarity_no-wifi-solid.svg'
export default function Whyus() {
  return (
    <>
      <div className="why-us d-flex flex-column justify-content-center p-4 m-0  p-md-5 m-md-5 ">
        <div className="d-flex flex-column justify-content-center align-content-center text-center gap-4 mb-4">
          <h3 className="text-secondary fw-bold">
            لماذا يختار المطاعم نظام eatic؟
          </h3>
          <h5 className=" text-primary">
            حل متكامل لإدارة وتشغيل المطعم يجمع بين السرعة، الدقة، وسهولة
            الاستخدام، مع دعم محلي وتجربة تشغيل كاملة.
          </h5>
        </div>
        <div className="items d-flex gap-3 mt-4 flex-wrap">
          <div className="item px-4 py-4 shadow-sm w-3 rounded-2 border border-1 ">
            <img src={printerIcon} alt="icon" />
            <h5 className="mt-4 fs-5 fw-bold">نظام كاشير سهل الاستخدام</h5>
            <h6 className="fs-6 text-primary fw-medium mt-3 lh-lg ">
              تصميم بسيط يساعد موظفيك يشتغلوا بسرعة ويقلّل الأخطاء.
            </h6>
          </div>
          <div className="item px-4 py-4 shadow-sm w-3 rounded-2 border border-1 ">
            <img src={delivaryIcon} alt="icon" />
            <h5 className="mt-4 fs-5 fw-bold" style={{ color: "#0B7C59" }}>
              تطبيق دليفري متكامل
            </h5>
            <h6 className="fs-6 text-primary fw-medium mt-3 lh-lg ">
              إسناد الطلبات، تتبع السائق، إثبات التسليم، وتقليل وقت التوصيل.
            </h6>
          </div>
          <div className="item px-4 py-4 shadow-sm w-3 rounded-2 border border-1 ">
            <img src={posIcon} alt="icon" />
            <h5 className="mt-4 fs-5 fw-bold" style={{ color: "#0CBC85" }}>
              تطبيق المدير لإدارة الفروع
            </h5>
            <h6 className="fs-6 text-primary fw-medium mt-3 lh-lg ">
              راقب المبيعات، المخزون، أداء الموظفين، والتنبيهات من أي مكان.
            </h6>
          </div>
          <div className="item px-4 py-4 shadow-sm w-3 rounded-2 border border-1 ">
            <img src={foodProcessorIcon} alt="icon" />
            <h5 className="mt-4 fs-5 fw-bold">شاشة عرض المطبخ</h5>
            <h6 className="fs-6 text-primary fw-medium mt-3 lh-lg ">
              تنظيم الطلبات في المطبخ وتحسين وقت التحضير.
            </h6>
          </div>
          <div className="item px-4 py-4 shadow-sm w-3 rounded-2 border border-1 ">
            <img src={dashboardIcon} alt="icon" />
            <h5 className="mt-4 fs-5 fw-bold" style={{ color: "#0B7C59" }}>
              لوحة دعم العملاء
            </h5>
            <h6 className="fs-6 text-primary fw-medium mt-3 lh-lg ">
              متابعة شكاوى العملاء، الطلبات المتأخرة، ورفع جودة الخدمة.
            </h6>
          </div>
          <div className="item px-4 py-4 shadow-sm w-3 rounded-2 border border-1 ">
            <img src={noWifiIcon} alt="icon" />
            <h5 className="mt-4 fs-5 fw-bold" style={{ color: "#0CBC85" }}>
              لا يعتمد على الإنترنت
            </h5>
            <h6 className="fs-6 text-primary fw-medium mt-3 lh-lg ">
              يعمل النظام محليًا على أجهزتك داخل المطعم لضمان استمرار العمل
              وسرعة الأداء دائمًا.{" "}
            </h6>
          </div>
        </div>
        <div className="d-flex gap-3 mt-5 justify-content-center justify-content-md-center">
      <button className="btn btn-primary btn-lg fw-normal  fs-6  shadow-sm" type="button">
        أبدأ تجربتك الان
      </button>
      <button className="btn btn-outline-success btn-lg fw-normal  fs-6  shadow-sm" type="button">
        احجز عرض توضيحي
      </button>
    </div>
      </div>
    </>
  );
}
