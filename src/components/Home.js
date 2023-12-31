import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import Image from "next/image";

const Home = ({ dark }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setData(await fatchData("/static/info.json"));
    };

    fetchData();
  }, []);

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
          style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}
        />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">{`Hello, I'm`}</h3>
              </div>
              <div className="name">
                <h3>{data && data.name ? data.name : "name"}</h3>
              </div>
              <div className="job">
                <p>
                  A <span className="greenText">{data && data.mainSkill}</span>{" "}
                  From <span className="purpleText">{data.address}</span>
                </p>
              </div>
              <div className="text">
                <p>{data.bio}</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#about">
                    <span>About Me</span>
                  </a>
                </div>
                <div className="social">
                <ul>
                    {data &&
                      data.social &&
                      data.social.map((social, i) => (
                        <li key={i}>
                          <a href={social.url}>
                            <i className={social.icon} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <Image
                  src={"/img/slider/DSC_0011.png"}
                  alt="image"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;