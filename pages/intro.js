import Head from "next/head";
import { Fragment } from "react";
import Cursor from "../src/layout/Cursor";
import PreLoader from "../src/layout/PreLoader";
import Image from "next/image";

const Intro = () => {
  return (
    <Fragment>
      <Head>
        <title>Dizme | Intro</title>
      </Head>
      <PreLoader />
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <div className="dizme_tm_intro">
          <div className="dizme_tm_intro_fixed_price">
            <span className="anim" />
            <span className="anim" />
            <span className="anim" />
            <a href="#" target="_blank" className="pricing-info anim">
              -20%
            </a>
          </div>
          <div className="short_info">
            <Image src="img/logo/logo.png"
            alt="image"
            height={60}
            width={60}
            />
            <h3>Personal Portfolio Template</h3>
          </div>
          <span className="intro_line" />
          <span className="intro_line_2" />
          <span className="intro_line_3" />
          </div>
        </div>
        {/* CURSOR */}
        <Cursor />
        {/* /CURSOR */}
    </Fragment>
  );
};
export default Intro;
