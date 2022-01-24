import React from "react";
import Container from "./container";

export default function Contact(props) {
  return (
    <Container>
      <section
        class="contact flex flex-wrap  w-11/12 pb-20"
        aria-labelledby="footer-heading">
        <div class=" w-full md:w-4/12">
          <h1 class="text-4xl">Contact</h1>
        </div>
        <div class=" flex-grow flex flex-wrap gap-y-10 mt-8 md:mt-0 sm:gap-y-14">
          <div class="w-full xsm:w-6/12">
            <h4 class="text-2xl ">Collaborate</h4>
            <p class="mt-1">agency@info.com</p>
            <p>+33664765689</p>
          </div>
          <div class="w-full xsm:w-6/12">
            <h4 class="text-2xl">Adress</h4>
            <p class="mt-1">886 Walter Streets</p>
            <p>New York, NY 12345</p>
          </div>
          <div class="w-full xsm:w-6/12">
            <h4 class="text-2xl">Links</h4>
            <p class="mt-1">agency@info.com</p>
            <p>+33664765689</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
