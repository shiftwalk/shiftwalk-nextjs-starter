import React from "react";
import Container from "./container";

export default function Contact(props) {
  const items = [
    { title: "Collaborate", subtitle: "agency@info.com", info: "+336655465" },
    {
      title: "Adress",
      subtitle: "886 Walter Streets",
      info: "New York, NY 12345",
    },
    { title: "Links", subtitle: "agency@info.com", info: "+336655465" },
  ];
  return (
    <Container extraClasses="Contact-Container py-16 md:py-32 lg:py-48">
      <div
        class="contact   grid grid-cols-1 gap-20  md:grid-cols-2 lg:grid-cols-3 "
        aria-labelledby="footer-heading">
        <div class="grid grid-cols-1 gap-20  md:grid-cols-2   col-span-2  md:mt-0 sm:gap-y-14">
          {items.map(({ title, subtitle, info }, index) => {
            return (
              <div class="w-full xsl:w-6/12">
                <h4 class="text-2xl">{title}</h4>
                <p class="mt-1  xl:text-2xl">{subtitle}</p>
                <p class="xl:text-2xl">{info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
