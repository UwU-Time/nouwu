import * as React from "react";

import { SVGProps } from "react";

function SkipForward(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20.484}
            height={20.471}
            {...props}
        >
            <defs>
                <filter
                    id="SkipForward_svg__a"
                    x={0}
                    y={0}
                    width={16.951}
                    height={20.471}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur" />
                </filter>
                <filter
                    id="SkipForward_svg__b"
                    x={0}
                    y={0}
                    width={16.951}
                    height={20.471}
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
                    id="SkipForward_svg__c"
                    x={10.484}
                    y={1.349}
                    width={10}
                    height={18}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur-3" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur-3" />
                </filter>
                <filter
                    id="SkipForward_svg__d"
                    x={10.484}
                    y={1.349}
                    width={10}
                    height={18}
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
            <g data-name="To Live Icon">
                <g data-type="innerShadowGroup">
                    <g filter="url(#SkipForward_svg__a)">
                        <g data-name="Forward To Live Triangle" fill="#fff">
                            <path d="M3.499 16.752V9.718c0-.56.295-1.055.79-1.32a1.479 1.479 0 0 1 1.537.069l5.323 3.517c.427.282.673.739.673 1.251 0 .513-.246.97-.673 1.252l-5.323 3.517a1.479 1.479 0 0 1-1.538.07 1.479 1.479 0 0 1-.789-1.322Z" />
                            <path
                                d="M11.322 13.235a.985.985 0 0 0-.449-.834L5.55 8.884a.979.979 0 0 0-1.025-.046.979.979 0 0 0-.526.88v7.034c0 .54.368.796.526.88a.979.979 0 0 0 1.025-.046l5.323-3.516a.985.985 0 0 0 .449-.835m1 0c0 .637-.3 1.274-.898 1.669L6.101 18.42C4.771 19.299 3 18.346 3 16.752V9.718c0-1.593 1.773-2.547 3.102-1.668l5.323 3.517c.599.395.898 1.032.898 1.668Z"
                                fill="#f0f" />
                        </g>
                    </g>
                    <g data-name="Forward To Live Triangle" fill="#fff">
                        <path d="M3.5 16.752V9.718c0-.56.295-1.055.79-1.32a1.479 1.479 0 0 1 1.537.069l5.323 3.517c.427.282.673.739.673 1.251 0 .513-.246.97-.673 1.252l-5.323 3.517a1.479 1.479 0 0 1-1.538.07 1.479 1.479 0 0 1-.789-1.322Z" />
                        <path d="M11.323 13.235a.985.985 0 0 0-.449-.834L5.551 8.884a.979.979 0 0 0-1.025-.046.979.979 0 0 0-.526.88v7.034c0 .54.368.796.526.88a.979.979 0 0 0 1.025-.046l5.323-3.516a.985.985 0 0 0 .449-.835m1 0c0 .637-.3 1.274-.898 1.669L6.102 18.42C4.772 19.299 3 18.346 3 16.752V9.718C3 8.125 4.773 7.171 6.102 8.05l5.323 3.517c.599.395.898 1.032.898 1.668Z" />
                    </g>
                    <g filter="url(#SkipForward_svg__b)">
                        <g data-name="Forward To Live Triangle" fill="#fff">
                            <path d="M3.499 16.752V9.718c0-.56.295-1.055.79-1.32a1.479 1.479 0 0 1 1.537.069l5.323 3.517c.427.282.673.739.673 1.251 0 .513-.246.97-.673 1.252l-5.323 3.517a1.479 1.479 0 0 1-1.538.07 1.479 1.479 0 0 1-.789-1.322Z" />
                            <path d="M11.322 13.235a.985.985 0 0 0-.449-.834L5.55 8.884a.979.979 0 0 0-1.025-.046.979.979 0 0 0-.526.88v7.034c0 .54.368.796.526.88a.979.979 0 0 0 1.025-.046l5.323-3.516a.985.985 0 0 0 .449-.835m1 0c0 .637-.3 1.274-.898 1.669L6.101 18.42C4.771 19.299 3 18.346 3 16.752V9.718c0-1.593 1.773-2.547 3.102-1.668l5.323 3.517c.599.395.898 1.032.898 1.668Z" />
                        </g>
                    </g>
                    <g data-name="Forward To Live Triangle" fill="none">
                        <path d="M3.5 16.752V9.718c0-.56.295-1.055.79-1.32a1.479 1.479 0 0 1 1.537.069l5.323 3.517c.427.282.673.739.673 1.251 0 .513-.246.97-.673 1.252l-5.323 3.517a1.479 1.479 0 0 1-1.538.07 1.479 1.479 0 0 1-.789-1.322Z" />
                        <path
                            d="M11.323 13.235a.985.985 0 0 0-.449-.834L5.551 8.884a.979.979 0 0 0-1.025-.046.979.979 0 0 0-.526.88v7.034c0 .54.368.796.526.88a.979.979 0 0 0 1.025-.046l5.323-3.516a.985.985 0 0 0 .449-.835m1 0c0 .637-.3 1.274-.898 1.669L6.102 18.42C4.772 19.299 3 18.346 3 16.752V9.718C3 8.125 4.773 7.171 6.102 8.05l5.323 3.517c.599.395.898 1.032.898 1.668Z"
                            fill="#f0f" />
                    </g>
                </g>
                <g data-type="innerShadowGroup" transform="translate(3 6)">
                    <g transform="translate(-3 -6)" filter="url(#SkipForward_svg__c)">
                        <g
                            data-name="Forward Stop"
                            transform="translate(13.48 7.35)"
                            fill="#fff"
                            stroke="#f0f"
                        >
                            <rect width={4} height={12} rx={2} stroke="none" />
                            <rect x={0.5} y={0.5} width={3} height={11} rx={1.5} fill="none" />
                        </g>
                    </g>
                    <rect
                        data-name="Forward Stop"
                        width={4}
                        height={12}
                        rx={2}
                        transform="translate(10.484 1.349)"
                        fill="#fff" />
                    <g transform="translate(-3 -6)" filter="url(#SkipForward_svg__d)">
                        <rect
                            data-name="Forward Stop"
                            width={4}
                            height={12}
                            rx={2}
                            transform="translate(13.48 7.35)"
                            fill="#fff" />
                    </g>
                    <g
                        data-name="Forward Stop"
                        transform="translate(10.484 1.349)"
                        fill="none"
                        stroke="#f0f"
                    >
                        <rect width={4} height={12} rx={2} stroke="none" />
                        <rect x={0.5} y={0.5} width={3} height={11} rx={1.5} />
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default SkipForward;