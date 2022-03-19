import { SVGProps } from "react";

function SvgTeamgrid(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={327} height={734} {...props}>
            <g fill="none" stroke="#707070" strokeLinecap="square" strokeWidth={4}>
                <path data-name="Line 3" d="M2 184h321" />
                <path data-name="Line 4" d="M2 367h321" />
                <path data-name="Line 5" d="M2 552h321" />
                <path data-name="Line 6" d="M325 732V2" />
            </g>
        </svg>
    );
}

export default SvgTeamgrid;