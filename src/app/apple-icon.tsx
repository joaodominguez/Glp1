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
          background: "#0F766E",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 28,
              height: 78,
              borderRadius: 999,
              background: "#F4FFFC",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "14px solid transparent",
              borderRight: "14px solid transparent",
              borderTop: "26px solid #F4FFFC",
              marginTop: -2,
            }}
          />
          <div
            style={{
              width: 10,
              height: 16,
              borderRadius: 999,
              background: "#5EEAD4",
              marginTop: 2,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
