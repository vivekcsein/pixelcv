"use client";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import React, { useRef } from "react";
import { HamburgerMenuProvider } from "./HamburgerProvider";
import { useBreakpoint } from "@/libs/hooks/use-breakpoints";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const headerRef = useRef<HTMLHeadElement | null>(null);

  return (
    <>
      <main style={{ minHeight: "100vh", paddingTop: "60px" }}>
        <HamburgerMenuProvider>
          <Header
            isMobile={isMobile}
            isTablet={isTablet}
            isDesktop={isDesktop}
            refObject={headerRef}
            isAuthenticated={true}
          />
        </HamburgerMenuProvider>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutProvider;
