import * as React from "react";

import { SVGProps } from "react";

function Inbox(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={23.524} height={17} {...props}>
            <defs>
                <filter
                    id="Inbox_svg__a"
                    x={0}
                    y={0}
                    width={23.524}
                    height={17}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur" />
                </filter>
                <filter
                    id="Inbox_svg__b"
                    x={0}
                    y={0}
                    width={23.524}
                    height={17}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={1} />
                    <feGaussianBlur stdDeviation={1.5} result="blur-2" />
                    <feFlood floodColor="#f0f" floodOpacity={0.89} result="color" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
                    <feComposite operator="in" in="color" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
                <filter
                    id="Inbox_svg__c"
                    x={3}
                    y={6}
                    width={17.524}
                    height={7.716}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={1} />
                    <feGaussianBlur stdDeviation={1.5} result="blur-3" />
                    <feFlood floodColor="#f0f" floodOpacity={0.419} result="color-2" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur-3" />
                    <feComposite operator="in" in="color-2" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
            </defs>
            <g data-name="Inbox Icon">
                <g data-type="innerShadowGroup" transform="translate(3 6)">
                    <g transform="translate(-3 -6)" filter="url(#Inbox_svg__a)">
                        <g
                            data-name="Envelope"
                            transform="translate(3 6)"
                            fill="rgba(255,255,255,0.89)"
                            stroke="#f0f"
                        >
                            <rect width={17.524} height={11} rx={3} stroke="none" />
                            <rect
                                x={0.5}
                                y={0.5}
                                width={16.524}
                                height={10}
                                rx={2.5}
                                fill="none" />
                        </g>
                    </g>
                    <rect
                        data-name="Envelope"
                        width={17.524}
                        height={11}
                        rx={3}
                        fill="rgba(255,255,255,0.89)" />
                    <g transform="translate(-3 -6)" filter="url(#Inbox_svg__b)">
                        <rect
                            data-name="Envelope"
                            width={17.524}
                            height={11}
                            rx={3}
                            transform="translate(3 6)"
                            fill="#fff" />
                    </g>
                    <g data-name="Envelope" fill="none" stroke="#f0f">
                        <rect width={17.524} height={11} rx={3} stroke="none" />
                        <rect x={0.5} y={0.5} width={16.524} height={10} rx={2.5} />
                    </g>
                </g>
                <g data-type="innerShadowGroup">
                    <g data-name="Lid" fill="rgba(255,255,255,0.89)">
                        <path d="M5.009 6.5h13.506c.863 0 1.325.608 1.459 1.128.133.519.022 1.271-.731 1.685L12.49 13.03a1.514 1.514 0 0 1-1.456 0L4.281 9.313c-.752-.414-.864-1.166-.73-1.685.133-.52.595-1.128 1.458-1.128Z" />
                        <path d="M11.762 12.716c.17 0 .338-.043.487-.125l6.753-3.716c.63-.347.533-.947.487-1.122-.045-.177-.25-.753-.974-.753H5.01c-.724 0-.929.576-.974.753-.045.175-.143.775.487 1.122l6.753 3.716c.149.082.317.125.487.125m0 1c-.333 0-.667-.083-.969-.249L4.04 9.751c-1.814-.998-1.103-3.75.969-3.75h13.506c2.073 0 2.784 2.752.97 3.75l-6.754 3.716a2.009 2.009 0 0 1-.969.249Z" />
                    </g>
                    <g filter="url(#Inbox_svg__c)">
                        <g data-name="Lid" fill="#fff">
                            <path d="M5.005 6.504h13.506c.863 0 1.325.608 1.459 1.128.133.519.022 1.271-.731 1.685l-6.753 3.716a1.514 1.514 0 0 1-1.456 0L4.277 9.317c-.752-.414-.864-1.166-.73-1.685.133-.52.595-1.128 1.458-1.128Z" />
                            <path d="M11.758 12.72c.17 0 .338-.043.487-.125l6.753-3.716c.63-.347.533-.947.487-1.122-.045-.177-.25-.753-.974-.753H5.005c-.724 0-.929.576-.974.753-.045.175-.143.775.487 1.122l6.753 3.716c.149.082.317.125.487.125m0 1c-.333 0-.667-.083-.969-.249L4.036 9.755c-1.814-.998-1.103-3.75.969-3.75h13.506c2.073 0 2.784 2.752.97 3.75l-6.754 3.716a2.009 2.009 0 0 1-.969.249Z" />
                        </g>
                    </g>
                    <g data-name="Lid" fill="none">
                        <path d="M5.009 6.5h13.506c.863 0 1.325.608 1.459 1.128.133.519.022 1.271-.731 1.685L12.49 13.03a1.514 1.514 0 0 1-1.456 0L4.281 9.313c-.752-.414-.864-1.166-.73-1.685.133-.52.595-1.128 1.458-1.128Z" />
                        <path
                            d="M11.762 12.716c.17 0 .338-.043.487-.125l6.753-3.716c.63-.347.533-.947.487-1.122-.045-.177-.25-.753-.974-.753H5.01c-.724 0-.929.576-.974.753-.045.175-.143.775.487 1.122l6.753 3.716c.149.082.317.125.487.125m0 1c-.333 0-.667-.083-.969-.249L4.04 9.751c-1.814-.998-1.103-3.75.969-3.75h13.506c2.073 0 2.784 2.752.97 3.75l-6.754 3.716a2.009 2.009 0 0 1-.969.249Z"
                            fill="#f0f" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default Inbox;