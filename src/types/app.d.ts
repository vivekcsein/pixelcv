
type imageProps = {
  src: string;
  alt: string;
  href: string;
};
export interface navlink {
  id: string;
  label: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
}

export interface extendedNavlink extends navlink {
  discription?: string;
  sublinks?: Array<navlink>;
}

export interface HeaderData {
  header_logo: imageProps | string;
  navbarlinks: Array<extendedNavlink>;
}

export interface NavlinkProps {
  link: navlink;
  isActive?: boolean;
  onClick?: (link: navlink) => void;
  isMobile?: boolean;
}
export interface footerLinksType {
  footer_messages: {
    heading: string;
    susbcribe: string;
    description: string;
    copyright: string;
  };

  footerSection: Array<string>;
  quickLinks: Array<navlink>;
  customerService: Array<navlink>;
  socialLinks: Array<navlink>;
  features: Array<navlink>;
}