import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";

import Skills from "../src/components/Skills";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Ashutosh Rath | Portfolio</title>
      </Head>
      <Home />
      {/* HERO */}
      {/* PROCESS */}

      {/* /PROCESS */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills />
      {/* /SKILLS */}
      {/* SERVICES */}
      {/* /SERVICES */}
      {/* TESTIMONIALS */}

      <Contact />
    </Layout>
  );
};
export default Index;
