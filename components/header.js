import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useAnimation,
  useCycle,
} from "framer-motion";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useCycle(false, true);
  const [stagger, setStagger] = useState(false);
  const menuItems = [
    { route: "Home", url: "/" },
    { route: "About", url: "/about" },
    { route: "Services", url: "/services" },
    { route: "Contact", url: "/contact" },
  ];

  // Overlay COntainer
  const asideVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
        when: "afterChildren",
      },
    },
  };

  // UL
  const listVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        staggerDirection: 1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  // LI
  const itemVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.79, 0.14, 0.15, 0.86],
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.46, 0.03, 0.52, 0.96],
      },
    },
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    <header
      className="bg-example-color-light  fixed top-0 left-0 right-0  w-full z-10 flex flex-col justify-center h-16"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container">
      <Container>
        <div class="flex justify-between">
          <FancyLink
            destination="/"
            a11yText="Navigate to the home page"
            label="Logo"
            extraClasses="mb-1 md:mb-0 text-2xl font-neueLight  "
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
          <button
            class={`md:hidden z-10 relative w-8 +  ${
              open ? "text-white" : "text-black"
            }`}
            onClick={setOpen}>
            <span
              aria-hidden="true"
              class={` block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${
                open ? `rotate-45` : `-translate-y-1.5`
              }`}></span>
            <span
              aria-hidden="true"
              class={` block absolute h-0.5 w-full  bg-current transform transition duration-500 ease-in-out  ${
                open ? `opacity-0` : `null`
              }`}></span>
            <span
              aria-hidden="true"
              class={` block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out  ${
                open ? `-rotate-45` : `translate-y-1.5`
              }`}></span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.aside
            variants={asideVariants}
            initial="closed"
            animate={open && "open"}
            exit="closed"
            class="bg-black text-white absolute left-0 top-0 w-full h-screen font-sans px-10 md:hidden pt-20">
            <motion.ul
              variants={listVariants}
              class="flex flex-col justify-start h-5/6 overflow-hidden ">
              {menuItems.map(({ route, url }, index) => {
                return (
                  <motion.li
                    variants={itemVariants}
                    class="menu-overlay-item text-white text-6xl  md:text-7xl pt-10  ">
                    {route}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
