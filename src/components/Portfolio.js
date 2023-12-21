import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import Image from "next/image";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "current" : "");


  return (
    <div className="dizme_tm_section" id="portfolio">

      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <h3 className="h3-tag-in-contact">My Works</h3>
            <p>
              
            </p>
          </div>
          <div className="portfolio_filter">
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="K-Star 2023"
                    data-category="Behance"
                  >
                    <a
                      href="https://www.behance.net/embed/project/186294201?ilo0=1"
                      target="_blank"
                    >
                      <Image src="/img/thumbs/42-56.jpg" alt="image" height={712} width={559}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>K-Star 2023</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="TEDxKIITUNIVERSITY 2023"
                    data-category="Behance"
                  >
                    <a
                      href="https://www.behance.net/embed/project/168619765?ilo0=1"
                    >
                      <Image src="/img/thumbs/42-34.jpg" alt="image" height={632} width={870}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>TEDxKIITUNIVERSITY 2023</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Burrito Khazana"
                    data-category="Behance"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://www.behance.net/embed/project/168270451?ilo0=1"
                    >
                      <Image src="/img/thumbs/42-56.jpg" alt="image" height={700} width={427}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Burrito Khazana</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="KIIT MUN 2023"
                    data-category="Behance"
                  >
                    <a className="zoom" href="https://www.behance.net/embed/project/179441147?ilo0=1">
                      <Image src="/img/thumbs/42-56.jpg" alt="image" height={980} width={735}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>KIIT MUN 2023</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="KSAC Diary"
                    data-category="Behance"
                  >
                    <a className="zoom" href="https://www.behance.net/embed/project/179153185?ilo0=1">
                      <Image src="/img/thumbs/42-34.jpg" alt="image" height={472} width={700}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>KSAC Diary</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>

              <li className="detail grid-item" >
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="KIIT MUN 2022"
                    data-category="Behance"
                  >
                    <a className="portfolio_popup" href="https://www.behance.net/embed/project/152899063?ilo0=1">
                      <Image src="/img/thumbs/42-34.jpg" alt="image" height={749} width={1332}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>KIIT MUN 2022</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="KSAC Wall"
                    data-category="Behance"
                  >
                    <a
                      
                      href="https://www.behance.net/embed/project/155470913?ilo0=1"
                    >
                      <Image src="/img/thumbs/42-56.jpg" alt="image" height={712} width={559}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/7.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>KSAC Wall</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Kreative Eye"
                    data-category="Behance"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://www.behance.net/embed/project/152902303?ilo0=1"
                    >
                      <Image src="/img/thumbs/42-34.jpg" alt="image" height={427} width={700}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/8.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Kreative Eye</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="KIIT Student Activity Center"
                    data-category="Behance"
                  >
                    <a
                      
                      href="https://www.behance.net/embed/project/176768761?ilo0=1"
                    >
                      <Image src="/img/thumbs/42-56.jpg" alt="image" height={870} width={632}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/9.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>KIIT Student Activity Center</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Startup Grind"
                    data-category="Behance"
                  >
                    <a className="zoom" href="https://www.behance.net/embed/project/180570307?ilo0=1">
                      <Image src="/img/thumbs/42-56.jpg" alt="image" height={980} width={735}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/11.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Startup Grind</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Little Paws Care"
                    data-category="Behance"
                  >
                    <a className="zoom" href="https://www.behance.net/embed/project/152903551?ilo0=1">
                      <Image src="/img/thumbs/42-34.jpg" alt="image" height={472} width={700}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/10.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Little Paws Care</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>

              <li className="detail grid-item" >
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="TEDxKIITUNIVERSITY 2022"
                    data-category="Behance"
                  >
                    <a className="portfolio_popup" href="https://www.behance.net/embed/project/152744069?ilo0=1">
                      <Image src="/img/thumbs/42-34.jpg" alt="image" height={749} width={1332}/>
                      <div
                        className="main"
                        data-img-url="img/portfolio/12.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>TEDxKIITUNIVERSITY 2022</h3>
                    <span>Behance</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <Image src="/img/brushes/portfolio/1.png" alt="image" layout="fill" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <Image src="/img/brushes/portfolio/2.png" alt="image" layout="fill" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;