import React from "react";
import Navbar_link from "./Navbar_link";
import { extendedNavlink } from "@/types/app";
import { Navbar__mobile_menulist } from "@/components/ui/styled-components/styled-navbar";

interface Navbar_mobile_contentProps {
  navbarlinks: Array<extendedNavlink>;
  isAuthenticated: boolean;
}
const Navbar_mobile_content = ({
  navbarlinks,
  isAuthenticated,
}: Navbar_mobile_contentProps) => {
  return (
    <Navbar__mobile_menulist>
      {navbarlinks.map((link) => {
        return <Navbar_link key={link.id} link={link} />;
      })}
      {isAuthenticated && <div></div>}
    </Navbar__mobile_menulist>
  );
};

export default Navbar_mobile_content;
