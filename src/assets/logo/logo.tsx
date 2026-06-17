import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="130" height="70" viewBox="0 0 520 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="24" width="208" height="208" rx="32" fill="black" />

        <rect x="56" y="48" width="144" height="160" rx="12" fill="white" />

        <path d="M168 48L200 80H168V48Z" fill="#E5E5E5" />

        <path
          d="M92 176V88H112L144 136V88H164V176H144L112 128V176H92Z"
          fill="black"
        />

        <text
          x="270"
          y="150"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="72"
          fontWeight="700"
          fill="black"
        >
          Notion
        </text>
      </svg>
    </div>
  );
};

export default Logo;
