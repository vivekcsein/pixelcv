import type { extendedNavlink, footerLinksType } from "@/types/app";

export const navigationLinks: Array<extendedNavlink> = [
  { id: "home", label: "Home", href: "/", icon: "Home" }, // Lucide: Home
  { id: "services", label: "Services", href: "/services", icon: "Package" }, // Lucide: Package or Briefcase
  { id: "contact", label: "Contact", href: "/contact", icon: "Mail" }, // Lucide: Mail or Phone
  { id: "about", label: "About", href: "/about", icon: "Info" }, // Lucide: Info or User
];

export const footerLinks: footerLinksType = {
  footer_messages: {
    heading: "Pixel CV",
    susbcribe: "Subscribe to get special offers and updates",
    description:
      "Create your resume which parse the information to humans over bots",
    copyright: "© 2025 Pixel CV. All rights reserved.",
  },
  // list of sections
  footerSection: ["quickLinks", "customerService", "Stay Updated"],

  // list of links
  quickLinks: [
    { id: "Custom Resume", label: "Custom Resume", href: "/", icon: "Resume" },
  ],

  customerService: [
    { id: "Contact Us", label: "Contact Us", href: "/", icon: "Mail" },
    { id: "Reviews", label: "Reviews", href: "/", icon: "ArrowLeftRight" },
  ],

  socialLinks: [
    { id: "Facebook", label: "Facebook", href: "/", icon: "Facebook" },
    { id: "Instagram", label: "Instagram", href: "/", icon: "Instagram" },
    { id: "Twitter", label: "Twitter", href: "/", icon: "Twitter" },
  ],
  features: [
    { id: "SSL Secured", label: "SSL Secured", href: "/", icon: "ShieldCheck" },
  ]
};