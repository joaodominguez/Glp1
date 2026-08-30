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
              width: 10,
              height: 28,
              borderRadius: 999,
              background: "#F4FFFC",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "10px solid #F4FFFC",
              marginTop: -1,
            }}
          />
          <div
            style={{
              width: 4,
              height: 6,
              borderRadius: 999,
              background: "#5EEAD4",
              marginTop: 1,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
