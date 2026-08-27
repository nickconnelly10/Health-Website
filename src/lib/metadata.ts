import type { Metadata } from "next";

const OG_IMAGE = {
  url: "/photos/home/hero-image.jpg",
  width: 1200,
  height: 630,
  alt: "Health & Wellness",
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
}: {
  title?: string;
  description: string;
  path: string;
  absoluteTitle?: string;
}): Metadata {
  const displayTitle = absoluteTitle ?? (title ? `${title} | Health & Wellness` : "Health & Wellness");

  return {
    ...(absoluteTitle
      ? { title: { absolute: absoluteTitle } }
      : title
        ? { title }
        : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: displayTitle,
      description,
      url: path,
      siteName: "Health & Wellness",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
