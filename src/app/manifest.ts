import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Advanced Solutions for Information Systems",
    short_name: "ASIS IT",
    description:
      "Leading provider of advanced technology and information systems in Qatar since 2001.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f9941e",
    icons: [
      {
        src: "/images/logos/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logos/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
