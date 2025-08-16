import { Metadata } from "next";
import { envFrontendConfig } from "../env/env.frontend";

const frontendUrl = envFrontendConfig.APP_FRONTEND;

const encodedOGUrl = encodeURI(
  `${frontendUrl}/api/og?title=Pixel CV &subtitle=Elegant DX for Modern Web&author=@vivekcsein&theme=elegant`
);

const keywords =
  "Resume builder, CV make, Online resume creator,Professional resume templates, Cover letter builder, Free resume builder, Modern resume templates, Resume maker, Resume builder, Resume maker, Resume generator, Resume generator, Online resume maker, Online resume builder, Online resume maker, Online resume generator, Online CV maker, Online CV builder, Online CV maker, Online CV generator, Free online resume maker, Free online resume builder, Free online resume maker, Free online resume generator, Free CV maker, Free CV builder, Free CV maker, Free CV generator" +
  "Customizable resume templates, Real - time resume preview, AI resume writer, Easy resume editor, One - click resume design, How to make a resume that stands out to recruiters, Best resume builder for creatives, Create a resume that beats ATS bots, ATS - friendly but human - readable resume, Easy online CV maker for students, Build a one - page visual resume, Interactive online CV creator" +
  "Human-centric resume, Resume for humans, Storytelling resume, Personal brand resume, Impactful CV design, Recruiter - friendly resume, Visually appealing CV, Stand out resume";

const HomePageSEO: Metadata = {
  title: "Pixel CV",
  description: "Every pixel connecting to the human over the bots",
  keywords: keywords,
  openGraph: {
    title: "Pixel CV - @vivekcsein",
    description: "",
    url: frontendUrl,
    siteName: "Pixel CV",
    images: [
      {
        url: encodedOGUrl,
        width: 1200,
        height: 630,
        alt: "Pixel CV | Every pixel connecting to the human over the bots",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " - @vivekcsein",
    description: "",
    images: [`${frontendUrl}/og-image.jpg`],
    creator: "@pixelcv",
  },
  authors: [{ name: "@vivekcsein", url: frontendUrl }],
  creator: "Pixel CV",
  publisher: "Pixel CV",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      //eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default HomePageSEO;
