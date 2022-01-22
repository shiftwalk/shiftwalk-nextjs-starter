import { useRef } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header";
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
    <Layout>
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
                <m.main
                  variants={fade}
                  className="mb-12 md:mb-16 xl:mb-24 pt-24 md:pt-20">
                  <Container class="LAYOUT-container">
                    {/* HERO SECTION */}
                    <section class="py-32 mx-auto ">
                      <div class="w-full text-left md:w-11/12 xl:w-8/12">
                        <h1 class="mb-3  font-bold text-gray-900 sm:text-red-500 text-6xl md:leading-tight text-7xl md:text-red-200 ">
                          A secure, faster way to transfer.
                        </h1>
                        <p class="mt-8 mb-6 text-xl text-gray-500 md:text-2xl md:leading-normal">
                          We’re on a mission to bring transparency to finance.
                          We charge as little as possible, and we always show
                          you upfront. No hidden fees. No bad exchange rates. No
                          surprises.
                        </p>
                      </div>
                    </section>
                    {/* HERO SECTION */}
                  </Container>
                </m.main>

                <m.div variants={fade}>
                  <Footer />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
