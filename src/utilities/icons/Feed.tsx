import * as React from "react";

import { SVGProps } from "react";

function Feed(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={21} {...props}>
            <defs>
                <filter
                    id="Feed_svg__a"
                    x={0}
                    y={0}
                    width={18}
                    height={21}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur" />
                </filter>
                <filter
                    id="Feed_svg__b"
                    x={0}
                    y={0}
                    width={18}
                    height={21}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={1} />
                    <feGaussianBlur stdDeviation={1.5} result="blur-2" />
                    <feFlood floodColor="#f0f" result="color" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
                    <feComposite operator="in" in="color" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
            </defs>
            <g data-name="Feed Icon">
                <g data-type="innerShadowGroup" transform="translate(3 6)">
                    <g transform="translate(-3 -6)" filter="url(#Feed_svg__a)">
                        <g
                            data-name="Feed"
                            transform="translate(3 6)"
                            fill="#fff"
                            stroke="#f0f"
                        >
                            <rect width={12} height={15} rx={3} stroke="none" />
                            <rect x={0.5} y={0.5} width={11} height={14} rx={2.5} fill="none" />
                        </g>
                    </g>
                    <rect data-name="Feed" width={12} height={15} rx={3} fill="#fff" />
                    <g transform="translate(-3 -6)" filter="url(#Feed_svg__b)">
                        <rect
                            data-name="Feed"
                            width={12}
                            height={15}
                            rx={3}
                            transform="translate(3 6)"
                            fill="#fff" />
                    </g>
                    <g data-name="Feed" fill="none" stroke="#f0f">
                        <rect width={12} height={15} rx={3} stroke="none" />
                        <rect x={0.5} y={0.5} width={11} height={14} rx={2.5} />
                    </g>
                </g>
                <path
                    data-name="Sentence 4"
                    fill="none"
                    stroke="#00e5ff"
                    d="M5.5 10.5h7" />
                <path
                    data-name="Sentence 3"
                    fill="none"
                    stroke="#00e5ff"
                    d="M5.5 12.5h7" />
                <path
                    data-name="Sentence 2"
                    fill="none"
                    stroke="#00e5ff"
                    d="M5.5 14.5h7" />
                <path
                    data-name="Sentence 1"
                    fill="none"
                    stroke="#00e5ff"
                    d="M5.5 16.5h7" />
            </g>
        </svg>
    );
}

export default Feed;