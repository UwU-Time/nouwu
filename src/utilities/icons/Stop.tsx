import * as React from "react";

import { SVGProps } from "react";

function Stop(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
            <defs>
                <filter
                    id="Stop_svg__a"
                    x={0}
                    y={0}
                    width={16}
                    height={16}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur" />
                    <feFlood floodOpacity={0.776} />
                    <feComposite operator="in" in2="blur" />
                </filter>
                <filter
                    id="Stop_svg__b"
                    x={0}
                    y={0}
                    width={16}
                    height={16}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset />
                    <feGaussianBlur stdDeviation={1.5} result="blur-2" />
                    <feFlood floodColor="#f0f" result="color" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
                    <feComposite operator="in" in="color" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
            </defs>
            <g data-type="innerShadowGroup">
                <g filter="url(#Stop_svg__a)">
                    <g data-name="Path 2" fill="#fff">
                        <path d="M11 15.5H5c-.827 0-1.5-.673-1.5-1.5V8c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5Z" />
                        <path
                            d="M5 7c-.551 0-1 .449-1 1v6c0 .551.449 1 1 1h6c.551 0 1-.449 1-1V8c0-.551-.449-1-1-1H5m0-1h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                            fill="#f0f" />
                    </g>
                </g>
                <g data-name="Path 2" fill="#fff">
                    <path d="M11 15.5H5c-.827 0-1.5-.673-1.5-1.5V8c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5Z" />
                    <path d="M5 7c-.551 0-1 .449-1 1v6c0 .551.449 1 1 1h6c.551 0 1-.449 1-1V8c0-.551-.449-1-1-1H5m0-1h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                </g>
                <g filter="url(#Stop_svg__b)">
                    <g data-name="Path 2" fill="#fff">
                        <path d="M11 15.5H5c-.827 0-1.5-.673-1.5-1.5V8c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5Z" />
                        <path d="M5 7c-.551 0-1 .449-1 1v6c0 .551.449 1 1 1h6c.551 0 1-.449 1-1V8c0-.551-.449-1-1-1H5m0-1h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                    </g>
                </g>
                <g data-name="Path 2" fill="none">
                    <path d="M11 15.5H5c-.827 0-1.5-.673-1.5-1.5V8c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5Z" />
                    <path
                        d="M5 7c-.551 0-1 .449-1 1v6c0 .551.449 1 1 1h6c.551 0 1-.449 1-1V8c0-.551-.449-1-1-1H5m0-1h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                        fill="#f0f" />
                </g>
            </g>
        </svg>
    );
}

export default Stop;