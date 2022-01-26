import React from "react";
import { asideVariants } from "./animations";
import { slideInLeft, stagger } from "@/helpers/transitions";
import { motion } from "framer-motion";
export default function Menu({ open, items }) {
  return (
    <motion.aside
      variants={asideVariants}
      initial="closed"
      animate={open && "open"}
      exit="closed"
      class="bg-black text-white absolute left-0 top-0 w-full h-screen font-sans px-10 md:hidden pt-20">
      <motion.ul
        variants={stagger}
        class="flex flex-col justify-start h-5/6 overflow-hidden ">
        {items.map(({ route, url }, index) => {
          return (
            <motion.li
              key={index}
              variants={slideInLeft}
              class="menu-overlay-item text-white text-6xl  md:text-7xl pt-10  ">
              {route}
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.aside>
  );
}
