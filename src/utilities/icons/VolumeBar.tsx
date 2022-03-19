import * as React from "react";

import { SVGProps } from "react";

function VolumeBar(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={41} height={9} {...props}>
            <defs>
                <filter
                    id="VolumeBar_svg__a"
                    x={0}
                    y={0}
                    width={41}
                    height={9}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur" />
                </filter>
                <filter
                    id="VolumeBar_svg__b"
                    x={0}
                    y={0}
                    width={41}
                    height={9}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={1} />
                    <feGaussianBlur stdDeviation={0.5} result="blur-2" />
                    <feFlood floodOpacity={0.234} result="color" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
                    <feComposite operator="in" in="color" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
            </defs>
            <g
                data-type="innerShadowGroup"
                transform="translate(3 6)"
                data-name="Vol Bar"
            >
                <g transform="translate(-3 -6)" filter="url(#VolumeBar_svg__a)">
                    <g
                        data-name="Vol Bar"
                        transform="translate(3 6)"
                        fill="rgba(255,255,255,0.46)"
                        stroke="#00e5ff"
                    >
                        <rect width={35} height={3} rx={1.5} stroke="none" />
                        <rect x={0.5} y={0.5} width={34} height={2} rx={1} fill="none" />
                    </g>
                </g>
                <rect
                    data-name="Vol Bar"
                    width={35}
                    height={3}
                    rx={1.5}
                    fill="rgba(255,255,255,0.46)" />
                <g transform="translate(-3 -6)" filter="url(#VolumeBar_svg__b)">
                    <rect
                        data-name="Vol Bar"
                        width={35}
                        height={3}
                        rx={1.5}
                        transform="translate(3 6)"
                        fill="#fff" />
                </g>
                <g data-name="Vol Bar" fill="none" stroke="#00e5ff">
                    <rect width={35} height={3} rx={1.5} stroke="none" />
                    <rect x={0.5} y={0.5} width={34} height={2} rx={1} />
                </g>
            </g>
        </svg>
    );
}

export default VolumeBar;