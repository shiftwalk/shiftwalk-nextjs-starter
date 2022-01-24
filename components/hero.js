import React from "react";
import { m } from "framer-motion";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";

export default function Hero() {
  return (
    <Container class="LAYOUT-container">
      <m.main className="mb-12 md:mb-16 xl:mb-24 ">
        <section class="py-20 mx-auto ">
          <div class="w-full text-left md:w-11/12 xl:w-8/12">
            <h1 class="mb-3  text-gray-900 text-5xl  sm:text-6xl  xl:text-7xl leading-tight  ">
              A secure, faster way to transfer.
            </h1>
            <p class="mt-8 mb-6 text-xl text-gray-500  md:text-2xl w-10/12  md:leading-normal xl:w-9/12">
              We’re on a mission to bring transparency to finance. We charge as
              little as possible, and we always show you upfront. No hidden
              fees. No bad exchange rates. No surprises.
            </p>
          </div>
        </section>
      </m.main>
    </Container>
  );
}
