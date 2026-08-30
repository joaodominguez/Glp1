import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0E10",
          borderRadius: 40,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 48 48" fill="none">
          <path
            d="M14 28c0-7.5 5.2-12 10.5-12S34 20.5 34 26.5 29.5 38 23.5 38 14 33.5 14 28Z"
            stroke="#7EB8AD"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M10 22c0-7 4.8-11.5 10-11.5S30 15 30 21.5 25.5 33 19.5 33 10 28.5 10 22Z"
            stroke="#7EB8AD"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M18 24c0-7.2 5-12 10.8-12S40 16.8 40 23.5 34.8 36 28.5 36 18 31 18 24Z"
            stroke="#7EB8AD"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
