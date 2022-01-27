import React from "react";
import { m } from "framer-motion";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";

export default function Hero() {
  return (
    <Container extraClasses="Hero-Container relative ">
      <m.main class="hero h-screen sm:h-screen flex flex-col justify-center  ">
        <m.div
          class="py-20"
          variants={fade}
          initial="initial"
          animate="enter"
          exit="exit">
          <div class=" hero-container text-left  w-12/12 ">
            <h1 class="text-2xl  sm:text-5xl  md:text-7xl lg:text-8xl">
              A secure and faster way to transfer money.
            </h1>
            <div>
              <p class=" font-sans opacity-50 text-gray-900  mt-8 mb-6 w-12/12 text-base sm:max-w-screen-sm sm:text-2xl    md:leading-normal   lg:text-3xl lg:max-w-screen-md xl:text-3xl ">
                We charge as little as possible, and we always show you upfront.
              </p>
            </div>
          </div>
        </m.div>
      </m.main>
      <div class=" arrow absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 ">
        <svg
          class="w-8 h-8 m-auto opacity-20 animate-bounce "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
        </svg>
      </div>
    </Container>
  );
}
