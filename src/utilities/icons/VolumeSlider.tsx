import * as React from "react";

import { SVGProps } from "react";

function VolumeSlider(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} {...props}>
            <defs>
                <filter
                    id="VolumeSlider_svg__a"
                    x={0}
                    y={0}
                    width={11}
                    height={11}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur" />
                </filter>
                <filter
                    id="VolumeSlider_svg__b"
                    x={0}
                    y={0}
                    width={11}
                    height={11}
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
            <g
                data-type="innerShadowGroup"
                transform="translate(3 6)"
                data-name="Volume Slider Icon"
            >
                <g transform="translate(-3 -6)" filter="url(#VolumeSlider_svg__a)">
                    <g
                        data-name="Volume Slider Icon"
                        transform="translate(3 6)"
                        fill="#fff"
                        stroke="#f0f"
                    >
                        <circle cx={2.5} cy={2.5} r={2.5} stroke="none" />
                        <circle cx={2.5} cy={2.5} r={2} fill="none" />
                    </g>
                </g>
                <circle
                    data-name="Volume Slider Icon"
                    cx={2.5}
                    cy={2.5}
                    r={2.5}
                    fill="#fff" />
                <g transform="translate(-3 -6)" filter="url(#VolumeSlider_svg__b)">
                    <circle
                        data-name="Volume Slider Icon"
                        cx={2.5}
                        cy={2.5}
                        r={2.5}
                        transform="translate(3 6)"
                        fill="#fff" />
                </g>
                <g data-name="Volume Slider Icon" fill="none" stroke="#f0f">
                    <circle cx={2.5} cy={2.5} r={2.5} stroke="none" />
                    <circle cx={2.5} cy={2.5} r={2} />
                </g>
            </g>
        </svg>
    );
}

export default VolumeSlider;