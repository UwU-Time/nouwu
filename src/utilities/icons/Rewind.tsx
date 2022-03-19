import * as React from "react";

import { SVGProps } from "react";

function Rewind(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={18.591} height={17} {...props}>
            <defs>
                <filter
                    id="Rewind_svg__a"
                    x={0}
                    y={0}
                    width={18.591}
                    height={17}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <filter
                    id="Rewind_svg__b"
                    x={0}
                    y={0}
                    width={18.591}
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
            </defs>
            <g data-type="innerShadowGroup" data-name="Replay Icon">
                <g filter="url(#Rewind_svg__a)">
                    <path
                        data-name="Replay Icon"
                        d="M9.3 6c3.477 0 6.3 2.462 6.3 5.5S12.773 17 9.3 17c-1.312 0 10.84-6.24.869-9.342-.516-.072-1.693.108-1.486.162-.253-.008-.467.184-.7.289-.578.343-.856.841-.888.721-1.08 1.01-.716 3.234-.833 2.87-.032-.1 1.4.486 1.321.361-.145-.227-2.725 2.289-2.89 1.966C4.367 13.387 3 12.3 3 11.5c0-.076 1.791.122 1.8 0C4.93 8.615 5.906 6 9.3 6Z"
                        fill="#f0f" />
                </g>
                <g filter="url(#Rewind_svg__b)">
                    <path
                        data-name="Replay Icon"
                        d="M9.3 6c3.477 0 6.3 2.462 6.3 5.5S12.773 17 9.3 17c-1.312 0 10.84-6.24.869-9.342-.516-.072-1.693.108-1.486.162-.253-.008-.467.184-.7.289-.578.343-.856.841-.888.721-1.08 1.01-.716 3.234-.833 2.87-.032-.1 1.4.486 1.321.361-.145-.227-2.725 2.289-2.89 1.966C4.367 13.387 3 12.3 3 11.5c0-.076 1.791.122 1.8 0C4.93 8.615 5.906 6 9.3 6Z"
                        fill="#fff" />
                </g>
            </g>
        </svg>
    );
}

export default Rewind;