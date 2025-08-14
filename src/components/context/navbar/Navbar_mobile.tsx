"use client";

import React from "react";
import { extendedNavlink } from "@/types/app";
import { AnimatePresence } from "framer-motion";
import Navbar_mobile_content from "./Navbar_mobile_content";
import { useHamburgerMenu } from "@/components/providers/HamburgerProvider";

import {
  Navbar__mobile_content,
  Navbar__mobile_overlay,
} from "@/components/ui/styled-components/styled-navbar";

interface Navbar_mobileProps {
  navbarlinks: Array<extendedNavlink>;
  isAuthenticated: boolean;
  isOpen?: boolean;
  closeMenu?: () => void;
}

// Animation variants
const contentVariants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      stiffness: 300,
      damping: 30,
    },
  },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const Navbar_mobile: React.FC<Navbar_mobileProps> = ({
  navbarlinks,
  isAuthenticated,
}) => {
  const { isOpen, closeMenu } = useHamburgerMenu();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Navbar__mobile_overlay
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={closeMenu}
          />

          <Navbar__mobile_content
            variants={contentVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <Navbar_mobile_content
              navbarlinks={navbarlinks}
              isAuthenticated={isAuthenticated}
            />
          </Navbar__mobile_content>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navbar_mobile;
