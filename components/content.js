import React from "react";
import Container from "./container";

export default function content() {
  return (
    <Container extraClasses="Content-Container  h-screen py-12 min-h-screen sm:py-24 lg:py-32">
      <div class="grid h-full lg:grid-cols-2 gap-8 lg:gap-12 ">
        <div class=" grid-left  md: bg-gray-100 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <div class=" grid-right mt-16 md:pt-8">
          <h3 class=" text-left md:text-left">Who we are</h3>

          <h4 class="mt-8  md:text-left mb-4 md:mb-6">
            Our competitive advantage
          </h4>

          <p class=" sm:mb-6 md:mb-8">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
          </p>

          <h4 class=" mt-8  md:text-left mb-4 ">About us</h4>

          <p class="text-gray-500 sm: mb-6 md:mb-8">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
          </p>
        </div>
      </div>
    </Container>
  );
}
