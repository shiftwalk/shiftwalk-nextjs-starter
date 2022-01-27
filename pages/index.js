import { useRef } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Content from "@/components/content";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade } from "@/helpers/transitions";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <Layout class="no-scrollbar">
      <NextSeo title="Home" />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.09 }}
        containerRef={containerRef}
        watch={[]}>
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <Header />
            <LazyMotion features={domAnimation}>
              <m.div initial="initial" animate="enter" exit="exit">
                {/* HERO SECTION */}
                <Hero />
                <Content />
                <Services />
                <Contact />
                <Footer />
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
