"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerOneAnimation } from "@/utils/footer-anim";

const logo = "/assets/img/logo/religh-logo-white.svg";

const footer_links = [
  { link: "/about-us", title: "About Us" },
  { link: "/service", title: "Services" },
  { link: "/portfolio-standard", title: "Portfolio" },
  { link: "/blog-modern", title: "Blogs" },
  { link: "/contact", title: "Contact Us" },
];
export default function FooterOne() {
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    footerOneAnimation();
  },[])
  return (
    <footer>
      {/* footer area start */}
      <div className="tp-footer-area black-bg pt-90">
        <div className="container-fluid">
          <div className="tp-footer-wrap">
            <div className="row align-items-end">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-menu menu-anim">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-middle-wrap">
                  <div className="tp-footer-content">
                    <h4 className="tp-footer-big-title footer-big-text">{"Let's"} Grow Together!</h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Say hello at:
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <Link href="mailto:sales@relightechnologies.com">
                              sales@relightechnologies.com
                            </Link>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <Link
                              href="https://maps.google.com/?q=No+B-4,+4th+floor,+25/3-39,+Rathod+Landmark,+Yeswanthpur,+Bengaluru,+Karnataka+560022"
                              target="_blank"
                            >
                              No B-4, 4th floor, 25/3-39, <br /> Rathod Landmark, Yeswanthpur, <br /> Bengaluru, Karnataka 560022
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Stalk us
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom">
                            <Link href="https://www.linkedin.com/company/relightechnologies" target="_blank">LinkedIn</Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link href="https://www.facebook.com/relightechnologies" target="_blank">Facebook</Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link href="https://www.instagram.com/relightechnologies" target="_blank">Instagram</Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link href="https://twitter.com/relightechnolog" target="_blank">Twitter</Link>
                          </li>
                          <li className="tp_fade_bottom">
                            <Link href="https://www.youtube.com/@relightechnologies" target="_blank">YouTube</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer area end */}

        {/* copyright area start */}
        <div className="container-fluid">
          <div className="tp-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-4">
                <div className="tp-copyright-logo text-center text-md-start">
                  <Link href="/">
                    <Image src={logo} alt="Religh Technologies" width={140} height={50} style={{ width: "auto", height: "auto" }} />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-8">
                <div className="tp-copyright-text text-center text-md-end">
                  <p>
                    © Copyrights {new Date().getFullYear()} Religh Technologies Pvt Ltd. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* footer area start */}
    </footer>
  );
}
