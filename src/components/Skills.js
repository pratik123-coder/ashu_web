import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import Image from "next/image";

const Skills = ({ dark }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setData(await fatchData("/static/info.json"));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      activeSkillProgress();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Design is Life</span>
                <h3>I Develop Skills Regularly to Keep Me Update</h3>
                <p>
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {data &&
                  data.skills &&
                  data.skills.map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill.value}
                      data-color={skill.color}
                      key={i}
                    >
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.value}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="right">
              <Image src={`/img/pic.png`} alt="image" height={1350} width={1080} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;