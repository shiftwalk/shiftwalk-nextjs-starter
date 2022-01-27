import React from "react";
import Container from "./container";

export default function Services() {
  const items = [
    {
      title: "Own your in-store experience",
      content:
        "Provide a seamless customer experience across channels, like reserving online and picking up in store. Our SDKs make it easy to integrate into your own mobile and web applications to accep in-store payments.çà",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-12 h-12 mb-4 text-black"
          aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
    },
    {
      title: "Own your in-store experience",
      content:
        "Add in-person payments to your platform or marketplace. Using Terminal with Connect, you can onboard users for online and in-person payments, and unify their payouts across channels.",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-12 h-12 mb-4 text-black"
          aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
    },
    {
      title: "Own your in-store experience",
      content:
        "Provide a seamless customer experience across channels, like reserving online and picking up in store. Our SDKs make it easy to integrate into your own mobile and web applications to accep in-store payments.çà",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-12 h-12 mb-4 text-black"
          aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
          />
        </svg>
      ),
    },
  ];

  return (
    <Container extraClasses=" Services-Container py-16 md:py-32 lg:py-48">
      <div class="   grid grid-cols-1 gap-20    md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ img, title, content }, index) => {
          return (
            <div class="service-container flex flex-col">
              {img}
              <div class="text-container">
                <h3 class="text-gray-900">{title}</h3>
                <p class=" mt-3 xl:text-2xl ">{content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
