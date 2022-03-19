import * as React from "react";

import { SVGProps } from "react";

function VolumeAdjust(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20.073}
    height={17.302}
    {...props}
  >
    <defs>
      <filter
        id="VolumeAdjust_svg__a"
        x={0}
        y={0}
        width={15.541}
        height={17.302}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={1} result="blur" />
        <feFlood floodOpacity={0.78} />
        <feComposite operator="in" in2="blur" />
      </filter>
      <filter
        id="VolumeAdjust_svg__b"
        x={0}
        y={0}
        width={15.541}
        height={17.302}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={1} result="blur-2" />
        <feFlood floodColor="#f0f" result="color" />
        <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
        <feComposite operator="in" in="color" />
        <feComposite operator="in" in2="SourceGraphic" />
      </filter>
      <filter
        id="VolumeAdjust_svg__c"
        x={8.267}
        y={0.036}
        width={8.529}
        height={16.742}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={1} result="blur-3" />
        <feFlood floodOpacity={0.78} />
        <feComposite operator="in" in2="blur-3" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="VolumeAdjust_svg__d"
        x={10.435}
        y={0.786}
        width={8.165}
        height={15.41}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={1} result="blur-4" />
        <feFlood floodOpacity={0.78} />
        <feComposite operator="in" in2="blur-4" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="VolumeAdjust_svg__e"
        x={12.114}
        y={1.691}
        width={7.959}
        height={13.67}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={1} result="blur-5" />
        <feFlood floodOpacity={0.78} />
        <feComposite operator="in" in2="blur-5" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g data-name="Volume Icon">
      <g data-type="innerShadowGroup">
        <g filter="url(#VolumeAdjust_svg__a)">
          <g data-name="Vol Horn" fill="#fff">
            <path d="m3.715 12.943.004-.884.01-2.173 2.117.01.2.001.147-.139 3.261-3.1.336-.068.57.236.38.332.562 1.067.35 1.291.166 1.785-.076 2.111-.303 1.157-.092.341-.085.309-.645 1.024-.41.24-.139.053-.553-.153-3.336-3.285-.145-.143-.203-.001-2.116-.01Z" />
            <path
              d="m4.217 12.445 2.023.01 3.533 3.48.258.072.228-.134.54-.859.066-.238.09-.337.289-1.1.073-2.023-.159-1.71-.325-1.196-.492-.937-.249-.216-.352-.146-.045.01-3.45 3.277-2.018-.01-.01 2.057m-1.005.996.02-4.058 2.616.013 3.366-3.198.626-.128.786.325.513.447.631 1.2.377 1.385.172 
1.86-.08 2.198-.409 1.555-.106.383-.749 1.19-.552.324-.33.124-.836-.23-3.429-3.377-2.616-.013Z"
              fill="#f0f"
            />
          </g>
        </g>
        <g data-name="Vol Horn" fill="#fff">
          <path d="M3.755 12.98V9.925h2.314l.146-.14 3.243-3.113.335-.07.57.232.382.33.567 1.064.357 1.288.173 1.783-.065 2.109-.296 1.158-.09.34-.084.31-.64 1.026-.408.243-.138.052-.554-.15-3.349-3.265-.146-.142H3.755Z" />
          <path d="M4.254 12.48h2.022l3.547 3.459.258.07.227-.135.536-.86.064-.239.09-.337.282-1.1.062-2.023-.167-1.708-.33-1.193-.497-.933-.25-.215-.352-.144-.045.01-3.43 3.292H4.254v2.056m-1 1V9.425H5.87l3.346-3.213.625-.13.787.32.515.444.637 1.195.383 1.383.181 1.858-.068 2.197-.401 1.555-.104.383-.742 1.193-.55.326-.33.126-.837-.226L5.87 13.48H3.255Z" />
        </g>
        <g filter="url(#VolumeAdjust_svg__b)">
          <g data-name="Vol Horn" fill="#fff">
            <path d="m3.715 12.943.004-.884.01-2.173 2.117.01.2.001.147-.139 3.261-3.1.336-.068.57.236.38.332.562 1.067.35 1.291.166 1.785-.076 2.111-.303 1.157-.092.341-.085.309-.645 1.024-.41.24-.139.053-.553-.153-3.336-3.285-.145-.143-.203-.001-2.116-.01Z" />
            <path d="m4.217 12.445 2.023.01 3.533 3.48.258.072.228-.134.54-.859.066-.238.09-.337.289-1.1.073-2.023-.159-1.71-.325-1.196-.492-.937-.249-.216-.352-.146-.045.01-3.45 3.277-2.018-.01-.01 2.057m-1.005.996.02-4.058 2.616.013 3.366-3.198.626-.128.786.325.513.447.631 1.2.377 1.385.172 1.86-.08 2.198-.409 1.555-.106.383-.749 1.19-.552.324-.33.124-.836-.23-3.429-3.377-2.616-.013Z" />
          </g>
        </g>
        <g data-name="Vol Horn" fill="none">
          <path d="M3.755 12.98V9.925h2.314l.146-.14 3.243-3.113.335-.07.57.232.382.33.567 1.064.357 1.288.173 1.783-.065 2.109-.296 1.158-.09.34-.084.31-.64 1.026-.408.243-.138.052-.554-.15-3.349-3.265-.146-.142H3.755Z" />
          <path
            d="M4.254 12.48h2.022l3.547 3.459.258.07.227-.135.536-.86.064-.239.09-.337.282-1.1.062-2.023-.167-1.708-.33-1.193-.497-.933-.25-.215-.352-.144-.045.01-3.43 3.292H4.254v2.056m-1 1V9.425H5.87l3.346-3.213.625-.13.787.32.515.444.637 1.195.383 1.383.181 1.858-.068 2.197-.401 1.555-.104.383-.742 1.193-.55.326-.33.126-.837-.226L5.87 13.48H3.255Z"
            fill="#f0f"
          />
        </g>
      </g>
      <g filter="url(#VolumeAdjust_svg__c)">
        <path
          data-name="Vol Path 1"
          d="M11.61 6.404c1.579 1.476 1.476 2.815 1.682 4.291a18.455 18.455 0 0 1-.549 4.6c-.018.118-.481 1.3-.481 1.3"
          fill="none"
          stroke="#f0f"
        />
      </g>
      <g filter="url(#VolumeAdjust_svg__d)">
        <path
          data-name="Vol Path 2"
          d="M13.808 7.124c1.03 1.133.967 2.414 1.236 3.639a10.947 10.947 0 0 1-1 5.218"
          fill="none"
          stroke="#f0f"
        />
      </g>
      <g filter="url(#VolumeAdjust_svg__e)">
        <path
          data-name="Vol Path 3"
          d="M15.517 7.98a7.5 7.5 0 0 1 1 2.884 5.581 5.581 0 0 1 0 1.648 9.132 9.132 0 0 1-.721 2.643"
          fill="none"
          stroke="#f0f"
        />
      </g>
    </g>
  </svg>
);
}

export default VolumeAdjust;