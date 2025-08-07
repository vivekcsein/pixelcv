import "../styles/globals.css";
import type { Metadata } from "next";

import LayoutProvider from "@/components/providers/LayoutProvider";

export const metadata: Metadata = {
  title: "Pixel CV",
  description: "Every pixel connecting to the human over the bots",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased relative scroll-smooth`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
