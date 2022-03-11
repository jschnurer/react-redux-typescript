import React from "react";

interface BannerProps {
  type: "error" | "success" | "warning",
  message: React.ReactNode,
}

const Banner: React.FC<BannerProps> = ({
  type,
  message,
}) =>
  <div
    className={`banner ${type}`}
  >
    {message}
  </div>;

export default Banner;