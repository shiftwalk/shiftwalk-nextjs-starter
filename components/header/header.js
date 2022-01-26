import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import Navigation from "./navigation";
import OverlayMenu from "./menu";
import Link from "next/link";
import Burger from "./burger";
import Logo from "@/components/logo";
import { asideVariants, listVariants, itemVariants } from "./animations";
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
  const menuItems = [
    { route: "Home", url: "/" },
    { route: "About", url: "/about" },
    { route: "Services", url: "/services" },
    { route: "Contact", url: "/contact" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    <header
      className="bg-white fixed top-0 left-0 right-0  w-full z-10 flex flex-col justify-center h-24 border-black border-b-2"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container">
      <Container extraClasses="Header-Section ">
        <div class="flex justify-between h-full ">
          <Logo width="w-20 md:w-24 xl:w-32" />
          <AnimateSharedLayout>
            <Navigation
              items={menuItems}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </AnimateSharedLayout>
          <Burger open={open} setOpen={setOpen} />
        </div>
      </Container>
      <AnimatePresence>
        {open && <OverlayMenu open={open} items={menuItems} />}
      </AnimatePresence>
    </header>
  );
}
