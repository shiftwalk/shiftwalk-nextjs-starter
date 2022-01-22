import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import Link from "next/link";
import { useState } from "react";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useAnimation,
  useCycle,
} from "framer-motion";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, cycleOpen] = useCycle(false, true);
  const menuItems = [
    { route: "Home", url: "/" },
    { route: "About", url: "/about" },
    { route: "Services", url: "/services" },
    { route: "Contact", url: "/contact" },
  ];
  // animations du Aside
  const sideVariants = {
    closed: {
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  return (
    <header
      className=" py-4  mb-4 md:mb-6 xl:mb-8 fixed top-0 left-0 right-0 w-full z-10"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container">
      <Container>
        <div className="flex justify-between">
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            label="Logo"
            extraClasses="mb-1 md:mb-0 text-3xl font-neueLight "
          />
          <AnimateSharedLayout>
            <nav className="hidden md:flex justify-end items-center  w-full  md:w-auto">
              <motion.ul
                onHoverEnd={() => {
                  setActiveIndex(null);
                }}
                class=" flex space-x-3 font-neueLight">
                {menuItems.map(({ route, url }, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.li
                      key={index}
                      onHoverStart={() => setActiveIndex(index)}>
                      <Link href={url} class="relative">
                        <a
                          className={` relative hover:text-gray-500 focus:text-gray-500`}>
                          {isActive ? (
                            <motion.span
                              initial={{ opacity: 0, delay: 0.4 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                type: "spring",
                                duration: 0.5,
                              }}
                              layoutId="shadow"
                              className="shadow"
                            />
                          ) : null}
                          <span>{route}</span>
                        </a>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>
          </AnimateSharedLayout>
          <button class=" md:hidden" onClick={cycleOpen}>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: "100vw",
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 0.5,
                type: "tween",
                ease: "easeInOut",
              },
            }}
            exit={{
              width: 0,
              opacity: 0,
              transition: {
                delay: 0.2,
                duration: 0.3,
                type: "tween",
                ease: "easeInOut",
              },
            }}
            class="bg-blue-900 absolute left-0 top-0 w-full h-screen font-neueBold px-6 md:hidden pt-4">
            <div class="flex justify-end ">
              <button onClick={cycleOpen}>
                <svg
                  class="w-8 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <AnimateSharedLayout>
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
                class="flex flex-col justify-start h-4/6 overflow-x-hidden">
                {menuItems.map(({ route, url }, index) => {
                  return (
                    <motion.li variants={itemVariants} class="text-8xl pt-10">
                      {route}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </AnimateSharedLayout>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
