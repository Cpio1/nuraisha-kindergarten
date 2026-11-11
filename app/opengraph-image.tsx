import { ImageResponse } from "next/og";

export const alt = "«Нұрайша» бөбекжай-балабақшасы";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TITLE = "«Нұрайша»";
const SUB = "бөбекжай-балабақшасы";
const LINE = "3–5 жас · 07:30–18:00 · 2 топ";

/** Загружаем только нужные глифы Nunito (кириллица + казахские буквы). */
async function loadFont(text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Nunito:wght@900&text=${encodeURIComponent(text)}`,
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const font = await loadFont(TITLE + SUB + LINE);
  const hasFont = font !== null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#FFF9EF",
          color: "#284C43",
          fontFamily: hasFont ? "Nunito" : "sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: -160, right: -120, width: 620, height: 620, borderRadius: 9999, background: "#B8E5D0" }} />
        <div style={{ position: "absolute", bottom: -200, left: -140, width: 520, height: 520, borderRadius: 9999, background: "#DCCDF7" }} />
        <div style={{ position: "absolute", top: 70, right: 120, width: 150, height: 150, borderRadius: 9999, background: "#FFE08A" }} />
        <div style={{ position: "absolute", bottom: 90, right: 240, width: 110, height: 110, borderRadius: "60% 40% 55% 45%", background: "#FFD6B8" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px", position: "relative" }}>
          <div style={{ fontSize: 120, fontWeight: 900, lineHeight: 1 }}>{hasFont ? TITLE : "Nuraisha"}</div>
          <div style={{ fontSize: 58, fontWeight: 900, marginTop: 16, color: "#4F6F66" }}>{hasFont ? SUB : "kindergarten"}</div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 34,
              fontWeight: 900,
              background: "#FFFFFF",
              borderRadius: 9999,
              padding: "16px 34px",
              alignSelf: "flex-start",
            }}
          >
            {hasFont ? LINE : "3–5 · 07:30–18:00"}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Nunito", data: font, weight: 900, style: "normal" }] : [],
    },
  );
}
