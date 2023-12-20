import Image from "next/image";
import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <Image src={`/img/about/about.png`} alt="image" height={1350} width={1080}/>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={4} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={2} />K
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Designer`}</span>
                <h3>I Can Design Anything You Want</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`As a student from a scientific background with a keen interest in computer applications, I am currently pursuing my graduation in Computer Science at KIIT University. Over the past four years, I have been actively practicing graphic designing and have developed a love for designing posters, logos, and graphical illustrations. 
I am constantly eager to learn new software and techniques to enhance my technical skills and strengths in design. Furthermore, I relish new and challenging projects that push me to learn and grow more in the field of design.`}
                </p>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default About;