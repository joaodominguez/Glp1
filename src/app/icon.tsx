import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F766E",
          borderRadius: 16,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#F4FFFC",
            fontSize: 38,
            fontWeight: 700,
            fontFamily: "Arial",
            lineHeight: 1,
            marginLeft: 2,
          }}
        >
          G
        </div>
        <div
          style={{
            position: "absolute",
            left: 14,
            bottom: 14,
            width: 22,
            height: 3,
            background: "#5EEAD4",
            borderRadius: 999,
            transform: "rotate(-28deg)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
