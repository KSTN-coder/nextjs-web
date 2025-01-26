// components/ArrowIcon.tsx
import React from "react";

interface ArrowIconProps {
  expanded: boolean; // สถานะการขยาย/ยุบ
  color?: string; // สีของไอคอน (default: currentColor)
  size?: number; // ขนาดของไอคอน (default: 24)
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  expanded,
  color = "#2b5d9f",
  size = 16,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
    style={{ width: size, height: size, maxWidth: "100%", maxHeight: "100%" }} // กำหนดขนาดสูงสุด
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

export default ArrowIcon;