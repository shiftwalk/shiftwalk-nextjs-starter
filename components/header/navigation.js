import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Navigation({ items, activeIndex, setActiveIndex }) {
  return (
    <nav className="hidden md:flex justify-end items-center  w-full  md:w-auto">
      <motion.ul
        onHoverEnd={() => {
          setActiveIndex(null);
        }}
        class=" flex space-x-3 font-neueLight">
        {items.map(({ route, url }, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.li key={index} onHoverStart={() => setActiveIndex(index)}>
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
  );
}
