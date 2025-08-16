import type { ExtendedNavLink, FooterConfig } from "@/types/app";

export const navigationLinks: Array<ExtendedNavLink> = [
  { id: "home", label: "Home", href: "/", icon: "Home" },
  { id: "services", label: "Services", href: "/services", icon: "Package" },
  { id: "contact", label: "Contact", href: "/contact", icon: "Mail" },
  { id: "about", label: "About", href: "/about", icon: "Info" },
];

export const footerLinks: FooterConfig = {
  messages: {
    heading: "Pixel CV",
    subscribe: "Subscribe to get special offers and updates",
    description:
      "Create your resume which parse the information to humans over bots",
    copyright: "Copyright © 2025 Pixel CV. All rights reserved.",
  },
  // list of sections
  sections: ["quickLinks", "Services", "Stay Updated"],

  // list of links
  quickLinks: [
    { id: "Custom-Resume", label: "Custom Resume", href: "/", icon: "Resume" },
  ],

  serviceLinks: [
    { id: "Contact-Us", label: "Contact Us", href: "/", icon: "Mail" },
    { id: "Reviews", label: "Reviews", href: "/", icon: "ArrowLeftRight" },
  ],

  socialLinks: [
    {
      id: "socialLinks-Facebook",
      label: "Facebook",
      href: "/",
      icon: "Facebook",
    },
    {
      id: "socialLinks-Instagram",
      label: "Instagram",
      href: "/",
      icon: "Instagram",
    },
    { id: "socialLinks-Twitter", label: "Twitter", href: "/", icon: "Twitter" },
  ],
  featureLinks: [
    {
      id: "features-privacy",
      label: "Privacy Policy",
      href: "/privacy",
      icon: "Lock",
    },
    {
      id: "features-terms",
      label: "Terms of Service",
      href: "/terms",
      icon: "Package",
    },
    {
      id: "features-cookie",
      label: "Cookie Policy",
      href: "/cookie",
      icon: "Cookie",
    },
  ],
};
