import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import LandingPage from "./components/LandingPage";
import About from "./components/About";
import AltaStats from "./components/AltaStats";
import PreviousWork from "./components/PreviousWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emily May Website</title>
        <meta name="description" content="Emily May Rose Portfolio" />
        <link rel="icon" href="/logo-blkack.png" />
      </Head>

      <main>
        <LandingPage />
        <About />
        <AltaStats />
        <PreviousWork />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;
