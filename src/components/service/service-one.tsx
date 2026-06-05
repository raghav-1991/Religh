import React from "react";
import Image from "next/image";
import Link from "next/link";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";

// service data
const service_data = [
  {
    id: 1,
    title: "WEB DESIGN & DEVELOPMENT",
    desc: "Our cool designs, development practices, and custom web development services are what set us apart. Deploy technical expertise and qualified UX/UI skills to build user-engaging websites and web applications.",
    icon: s_1,
  },
  {
    id: 2,
    title: "SEARCH ENGINE OPTIMIZATION",
    desc: "Great SEO results in maximum visibility. We'll help your website rank on the 1st Page — guaranteed! Increase your ranking on search engines, get more traffic, and exalt the chance of conversions.",
    icon: s_2,
  },
  {
    id: 3,
    title: "SOCIAL MEDIA MARKETING",
    desc: "Reach out to your target audience and convert them into potential buyers with constructive SMM strategies. Build brand image, expand reach, and drive 75% more traffic.",
    icon: s_3,
  },
  {
    id: 4,
    title: "APP DEVELOPMENT",
    desc: "Create more secure, dynamic, and scalable mobile apps for iOS, Android, and Cross-platform. Our iconic UX and unmatched frameworks will increase your app open rates significantly.",
    icon: s_4,
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle subtitle-position tp-char-animation">360° Digital Solutions</span>
              <h4 className="tp-section-title tp-char-animation">
                We Are Best<br />
                <span>Known For</span>
              </h4>
            </div>

            <div className="tp-service-left-btn tp-btn-bounce">
              <Link className="tp-btn-border" href="/service">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">See All Services</span>
                  <span className="text-2">See All Services</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href="/service-details">{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
