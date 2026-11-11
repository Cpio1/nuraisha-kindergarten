import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "«Нұрайша» бөбекжай-балабақшасы",
    short_name: "Нұрайша",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF9EF",
    theme_color: "#FFF9EF",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
