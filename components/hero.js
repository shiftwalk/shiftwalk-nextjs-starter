import React from "react";
import { m } from "framer-motion";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";

export default function Hero() {
  return (
    <Container class="LAYOUT-container ">
      <m.main class="hero h-screen flex flex-col justify-center ">
        <section class="py-20">
          <div class="w-full text-left md:w-11/12 xl:w-8/12">
            <h1>A secure and faster way to transfer.</h1>
            <p class="mt-8 mb-6 text-xl font-sans opacity-50 text-gray-900 md:text-2xl w-10/12  md:leading-normal  lg:text-3xl xl:w-9/12  xl:text-3xl ">
              We’re on a mission to bring transparency to finance. We charge
              aslittle as possible, and we always show you upfront.
            </p>
          </div>
        </section>
      </m.main>
    </Container>
  );
}
