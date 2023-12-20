import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Contact = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setData(await fatchData("/static/info.json"));
    };

    fetchData();
  }, []);
  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <h3 className="h3-tag-in-contact">Contact Me</h3>
          </div>
          <div className="contact_inner ">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>

          </div>
          <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="G-map"
                  height={375}
                  style={{ width: "100%" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=bhubaneswar&t=&z=12&ie=UTF8&iwloc=&output=embed"
                />
                <br />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Contact;
