import * as React from "react";

import { SVGProps } from "react";

function Home(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12.811}
            height={14.228}
            {...props}
        >
            <defs>
            <filter
                id="Home_svg__a"
                x={0}
                y={0}
                width={12.811}
                height={14.228}
                filterUnits="userSpaceOnUse"
            >
                <feOffset dy={-3} />
                <feGaussianBlur stdDeviation={1} result="blur" />
                <feFlood floodOpacity={0.776} />
                <feComposite operator="in" in2="blur" />
            </filter>
            <filter
                id="Home_svg__b"
                x={0}
                y={0}
                width={12.811}
                height={14.228}
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
            <g data-name="Home Icon">
            <g data-type="innerShadowGroup">
                <g filter="url(#Home_svg__a)">
                <g data-name="Home" fill="#fff">
                    <path d="M9.295 13.732H3.512c.001-.398-.002-.98-.007-1.707-.005-.743-.01-1.51-.005-1.872l2.25-3.451c.06-.083.298-.198.642-.198.342 0 .566.11.617.189l.002.002.001.003 2.294 3.448c-.01.692-.03 2.506-.011 3.586Z" />
                    <path
                    d="M6.392 7.004a.81.81 0 0 0-.27.042l-2.123 3.258c-.002.4.002 1.091.006 1.718l.007 1.21h4.777c-.007-1.02.007-2.32.015-2.938L6.64 7.04a.803.803 0 0 
        0-.247-.035m0-1c.43 0 .856.139 1.037.417l2.38 3.578c-.011.571-.044 3.294 0 4.233H3.004c.027-.458-.021-3.65 0-4.233l2.331-3.578c.192-.277.626-.417 1.057-.417Z"   
                    fill="#f0f"
                    />
                </g>
                </g>
                <g data-name="Home" fill="#fff">
                <path d="M9.297 13.728H3.514c.001-.398-.002-.98-.007-1.707-.005-.743-.01-1.51-.005-1.872l2.25-3.451c.06-.083.298-.198.642-.198.342 0 .566.11.617.189l.002.002.001.003 2.294 3.448c-.01.692-.03 2.506-.011 3.586Z" />
                <path d="M6.394 7a.81.81 0 0 0-.27.042L4 10.3c-.002.4.002 1.091.006 1.718l.007 1.21H8.79c-.007-1.02.007-2.32.015-2.938L6.641 7.035A.803.803 0 0 0 6.394 7m0-1c.43 0 .856.139 1.037.417l2.38 3.578c-.011.571-.044 3.294 0 4.233H3.006c.027-.458-.021-3.65 0-4.233l2.331-3.578C5.53 6.14 5.963 6 6.394 6Z" />
                </g>
                <g filter="url(#Home_svg__b)">
                <g data-name="Home" fill="#fff">
                    <path d="M9.295 13.732H3.512c.001-.398-.002-.98-.007-1.707-.005-.743-.01-1.51-.005-1.872l2.25-3.451c.06-.083.298-.198.642-.198.342 0 .566.11.617.189l.002.002.001.003 2.294 3.448c-.01.692-.03 2.506-.011 3.586Z" />
                    <path d="M6.392 7.004a.81.81 0 0 0-.27.042l-2.123 3.258c-.002.4.002 1.091.006 1.718l.007 1.21h4.777c-.007-1.02.007-2.32.015-2.938L6.64 7.04a.803.803 
        0 0 0-.247-.035m0-1c.43 0 .856.139 1.037.417l2.38 3.578c-.011.571-.044 3.294 0 4.233H3.004c.027-.458-.021-3.65 0-4.233l2.331-3.578c.192-.277.626-.417 1.057-.417Z" />
                </g>
                </g>
                <g data-name="Home" fill="none">
                <path d="M9.297 13.728H3.514c.001-.398-.002-.98-.007-1.707-.005-.743-.01-1.51-.005-1.872l2.25-3.451c.06-.083.298-.198.642-.198.342 0 .566.11.617.189l.002.002.001.003 2.294 3.448c-.01.692-.03 2.506-.011 3.586Z" />
                <path
                    d="M6.394 7a.81.81 0 0 0-.27.042L4 10.3c-.002.4.002 1.091.006 1.718l.007 1.21H8.79c-.007-1.02.007-2.32.015-2.938L6.641 7.035A.803.803 0 0 0 6.394 7m0-1c.43 0 .856.139 1.037.417l2.38 3.578c-.011.571-.044 3.294 0 4.233H3.006c.027-.458-.021-3.65 0-4.233l2.331-3.578C5.53 6.14 5.963 6 6.394 6Z"
                    fill="#f0f"
                />
                </g>
            </g>
            <path fill="none" stroke="#f0f" d="M6.405 13.54v-2" />
            <path
                data-name="Left Window"
                fill="none"
                stroke="#f0f"
                d="M4.85 11.783v-1"
            />
            <path
                data-name="Right Window"
                fill="none"
                stroke="#f0f"
                d="M7.96 11.783v-1"
            />
            </g>
        </svg>
    );
}
export default Home;