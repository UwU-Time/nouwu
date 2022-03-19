import * as React from "react";

import { SVGProps } from "react";

function Pause(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} {...props}>
            <defs>
                <filter
                    id="Pause_svg__a"
                    x={0}
                    y={0}
                    width={11}
                    height={17}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur" />
                </filter>
                <filter
                    id="Pause_svg__b"
                    x={0}
                    y={0}
                    width={11}
                    height={17}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset />
                    <feGaussianBlur stdDeviation={1} result="blur-2" />
                    <feFlood floodColor="#f0f" result="color" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
                    <feComposite operator="in" in="color" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
                <filter
                    id="Pause_svg__c"
                    x={6}
                    y={0}
                    width={11}
                    height={17}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur-3" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur-3" />
                </filter>
                <filter
                    id="Pause_svg__d"
                    x={6}
                    y={0}
                    width={11}
                    height={17}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset />
                    <feGaussianBlur stdDeviation={1} result="blur-4" />
                    <feFlood floodColor="#f0f" result="color-2" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur-4" />
                    <feComposite operator="in" in="color-2" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
            </defs>
            <g data-name="Pause Icon">
                <g data-type="innerShadowGroup" transform="translate(3 6)">
                    <g transform="translate(-3 -6)" filter="url(#Pause_svg__a)">
                        <g
                            data-name="Pause Left"
                            transform="translate(3 6)"
                            fill="#fff"
                            stroke="#f0f"
                        >
                            <rect width={5} height={11} rx={2} stroke="none" />
                            <rect x={0.5} y={0.5} width={4} height={10} rx={1.5} fill="none" />
                        </g>
                    </g>
                    <rect data-name="Pause Left" width={5} height={11} rx={2} fill="#fff" />
                    <g transform="translate(-3 -6)" filter="url(#Pause_svg__b)">
                        <rect
                            data-name="Pause Left"
                            width={5}
                            height={11}
                            rx={2}
                            transform="translate(3 6)"
                            fill="#fff" />
                    </g>
                    <g data-name="Pause Left" fill="none" stroke="#f0f">
                        <rect width={5} height={11} rx={2} stroke="none" />
                        <rect x={0.5} y={0.5} width={4} height={10} rx={1.5} />
                    </g>
                </g>
                <g data-type="innerShadowGroup" transform="translate(3 6)">
                    <g transform="translate(-3 -6)" filter="url(#Pause_svg__c)">
                        <g
                            data-name="Pause Right"
                            transform="translate(9 6)"
                            fill="#fff"
                            stroke="#f0f"
                        >
                            <rect width={5} height={11} rx={2} stroke="none" />
                            <rect x={0.5} y={0.5} width={4} height={10} rx={1.5} fill="none" />
                        </g>
                    </g>
                    <rect
                        data-name="Pause Right"
                        width={5}
                        height={11}
                        rx={2}
                        transform="translate(6)"
                        fill="#fff" />
                    <g transform="translate(-3 -6)" filter="url(#Pause_svg__d)">
                        <rect
                            data-name="Pause Right"
                            width={5}
                            height={11}
                            rx={2}
                            transform="translate(9 6)"
                            fill="#fff" />
                    </g>
                    <g
                        data-name="Pause Right"
                        transform="translate(6)"
                        fill="none"
                        stroke="#f0f"
                    >
                        <rect width={5} height={11} rx={2} stroke="none" />
                        <rect x={0.5} y={0.5} width={4} height={10} rx={1.5} />
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Pause;