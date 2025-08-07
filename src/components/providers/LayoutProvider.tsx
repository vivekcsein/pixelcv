"use client";
import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import FontsProvider from "./FontsProvider";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FontsProvider>
        <main style={{ minHeight: "100vh" }}>
          <Header />
          {children}
        </main>
        <Footer />
      </FontsProvider>
    </>
  );
};

export default LayoutProvider;
