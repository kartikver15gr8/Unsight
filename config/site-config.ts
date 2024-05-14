import { Metadata } from "next";

const TITLE = "Unsight - Join the global community of students with Anonymity";
const DESCRIPTION =
  "Interact in a global community of students. share thoughts, opportunities, resources and more, freely keeping your identity anonymous.";

const PREVIEW_IMAGE_URL = "https://www.unsight.club/opengraph-image.png";
const ALT_TITLE =
  "Unsight - Join the global community of students with Anonymity";
const BASE_URL = "https://www.unsight.club";

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Unsight",
  creator: "Kartikey",
  twitter: {
    creator: "@KartikeyStack",
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Unsight",
    url: BASE_URL,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: PREVIEW_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: ALT_TITLE,
      },
    ],
  },
  category: "Technology",
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    "Unsight",
    "Team Blind",
    "Club",
    "Kartikey Verma app",
    "Community",
    "Anonymous",
    "Anonymity",
    "Share your thoughts freely",
    "Students community",
  ],
  metadataBase: new URL(BASE_URL),
};
