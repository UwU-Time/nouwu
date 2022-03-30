import * as React from "react";

import { SVGProps } from "react";

function Pip(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={21} preserveAspectRatio="xMidYMid"{...props}>
                <defs>
                    <filter
                        id="Pip_svg__a"
                        x={0}
                        y={0}
                        width={22}
                        height={17}
                        filterUnits="userSpaceOnUse"
                        >
                        <feOffset dy={-3} />
                        <feGaussianBlur stdDeviation={1} result="blur" />
                        <feFlood floodOpacity={0.78} />
                        <feComposite operator="in" in2="blur" />
                    </filter>
                    <filter
                        id="Pip_svg__b"
                        x={0}
                        y={0}
                        width={22}
                        height={17}
                        filterUnits="userSpaceOnUse"
                        >
                        <feOffset dy={-3} />
                        <feGaussianBlur stdDeviation={2.5} result="blur-2" />
                        <feFlood floodColor="#ff00f7" floodOpacity={0.161} result="color" />
                        <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
                        <feComposite operator="in" in="color" />
                        <feComposite operator="in" in2="SourceGraphic" />
                    </filter>
                    <filter
                        id="Pip_svg__c"
                        x={7}
                        y={8}
                        width={17}
                        height={13}
                        filterUnits="userSpaceOnUse"
                        >
                        <feOffset dy={-1} />
                        <feGaussianBlur stdDeviation={1} result="blur-3" />
                        <feFlood floodOpacity={0.78} />
                        <feComposite operator="in" in2="blur-3" />
                    </filter>
                    <filter
                        id="Pip_svg__d"
                        x={7}
                        y={8}
                        width={17}
                        height={13}
                        filterUnits="userSpaceOnUse"
                        >
                        <feOffset dy={-2} />
                        <feGaussianBlur stdDeviation={1} result="blur-4" />
                        <feFlood floodColor="#00edff" floodOpacity={0.231} result="color-2" />
                        <feComposite operator="out" in="SourceGraphic" in2="blur-4" />
                        <feComposite operator="in" in="color-2" />
                        <feComposite operator="in" in2="SourceGraphic" />
                    </filter>
                </defs>
                <g data-name="Pip Icon">
                    <g data-type="innerShadowGroup" transform="translate(3 6)">
                        <g transform="translate(-3 -6)" filter="url(#Pip_svg__a)">
                            <g
                                data-name="BigScreen"
                                transform="translate(3 6)"
                                fill="#fff"
                                stroke="#f0f"
                                >
                                <rect width={16} height={11} rx={3} stroke="none" />
                                <rect x={0.5} y={0.5} width={15} height={10} rx={2.5} fill="none" />
                            </g>
                        </g>
                        <rect data-name="BigScreen" width={16} height={11} rx={3} fill="#fff" />
                        <g transform="translate(-3 -6)" filter="url(#Pip_svg__b)">
                            <rect
                                data-name="BigScreen"
                                width={16}
                                height={11}
                                rx={3}
                                transform="translate(3 6)"
                                fill="#fff" />
                        </g>
                        <g data-name="BigScreen" fill="none" stroke="#f0f">
                            <rect width={16} height={11} rx={3} stroke="none" />
                            <rect x={0.5} y={0.5} width={15} height={10} rx={2.5} />
                        </g>
                    </g>
                    <g data-type="innerShadowGroup" transform="translate(3 6)">
                        <g transform="translate(-3 -6)" filter="url(#Pip_svg__c)">
                            <g
                                data-name="LittleScreen"
                                transform="translate(10 12)"
                                fill="#fff"
                                stroke="#00e5ff"
                                >
                                <rect width={11} height={7} rx={2} stroke="none" />
                                <rect x={0.5} y={0.5} width={10} height={6} rx={1.5} fill="none" />
                            </g>
                        </g>
                        <rect
                            data-name="LittleScreen"
                            width={11}
                            height={7}
                            rx={2}
                            transform="translate(7 6)"
                            fill="#fff" />
                        <g transform="translate(-3 -6)" filter="url(#Pip_svg__d)">
                            <rect
                                data-name="LittleScreen"
                                width={11}
                                height={7}
                                rx={2}
                                transform="translate(10 12)"
                                fill="#fff" />
                        </g>
                        <g
                            data-name="LittleScreen"
                            transform="translate(7 6)"
                            fill="none"
                            stroke="#00e5ff"
                            >
                            <rect width={11} height={7} rx={2} stroke="none" />
                            <rect x={0.5} y={0.5} width={10} height={6} rx={1.5} />
                        </g>
                    </g>
                    <g fill="none" stroke="#00e5ff">
                        <path data-name="Arrow Stalk" d="m5.5 7.5 4 4.5" />
                        <path data-name="Arrow Left" d="M9.5 12.492V9.131" />
                        <path data-name="Arrow Right" d="M9.5 12H6.67" />
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default Pip;