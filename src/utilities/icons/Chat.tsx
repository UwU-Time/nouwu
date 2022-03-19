import { SVGProps } from "react";

function Chat(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25.051}
            height={23.765}
            {...props}
        >
            <defs>
                <filter
                    id="Chat_svg__a"
                    x={0}
                    y={0}
                    width={18.051}
                    height={16.765}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-3} />
                    <feGaussianBlur stdDeviation={1} result="blur" />
                    <feFlood floodOpacity={0.78} />
                    <feComposite operator="in" in2="blur" />
                </filter>
                <filter
                    id="Chat_svg__b"
                    x={0}
                    y={0}
                    width={18.051}
                    height={16.765}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset />
                    <feGaussianBlur stdDeviation={1.5} result="blur-2" />
                    <feFlood floodColor="#f0f" result="color" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
                    <feComposite operator="in" in="color" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
                <filter
                    id="Chat_svg__c"
                    x={1}
                    y={1}
                    width={24.051}
                    height={22.765}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset dy={-2} />
                    <feGaussianBlur stdDeviation={2} result="blur-3" />
                    <feFlood />
                    <feComposite operator="in" in2="blur-3" />
                </filter>
                <filter
                    id="Chat_svg__d"
                    x={1}
                    y={1}
                    width={24.051}
                    height={22.765}
                    filterUnits="userSpaceOnUse"
                >
                    <feOffset />
                    <feGaussianBlur stdDeviation={1.5} result="blur-4" />
                    <feFlood floodColor="#f0f" result="color-2" />
                    <feComposite operator="out" in="SourceGraphic" in2="blur-4" />
                    <feComposite operator="in" in="color-2" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
            </defs>
            <g data-name="Chat Icon">
                <g data-type="innerShadowGroup">
                    <g filter="url(#Chat_svg__a)">
                        <g data-name="Bubble" fill="#fff">
                            <path d="m3.75 15.444.07-.287c.224-.903.455-1.836.455-2.342V9c0-1.379 1.121-2.5 2.5-2.5h5.276c1.379 0 2.5 1.121 2.5 2.5v3c0 1.379-1.121 2.5-2.5 2.5H5.64c-.475 0-1.265.474-1.89.944Z" />
                            <path
                                d="M6.775 7c-1.103 0-2 .897-2 2v3.815c0 .37-.092.868-.244 1.527.561-.298.892-.342 1.108-.342h6.412c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2H6.775m0-1h5.276a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5.64c-.59 0-2.213 1.273-2.376 1.538-.81 1.194.512-2.656.512-3.723V9a3 3 0 0 1 3-3Z"
                                fill="#f0f" />
                        </g>
                    </g>
                    <g data-name="Bubble" fill="#fff">
                        <path d="m3.75 15.444.07-.287c.224-.903.455-1.836.455-2.342V9c0-1.379 1.121-2.5 2.5-2.5h5.276c1.379 0 2.5 1.121 2.5 2.5v3c0 1.379-1.121 2.5-2.5 2.5H5.64c-.475 0-1.265.474-1.89.944Z" />
                        <path d="M6.775 7c-1.103 0-2 .897-2 2v3.815c0 .37-.092.868-.244 1.527.561-.298.892-.342 1.108-.342h6.412c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2H6.775m0-1h5.276a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5.64c-.59 0-2.213 1.273-2.376 1.538-.81 1.194.512-2.656.512-3.723V9a3 3 0 0 1 3-3Z" />
                    </g>
                    <g filter="url(#Chat_svg__b)">
                        <g data-name="Bubble" fill="#fff">
                            <path d="m3.75 15.444.07-.287c.224-.903.455-1.836.455-2.342V9c0-1.379 1.121-2.5 2.5-2.5h5.276c1.379 0 2.5 1.121 2.5 2.5v3c0 1.379-1.121 2.5-2.5 2.5H5.64c-.475 0-1.265.474-1.89.944Z" />
                            <path d="M6.775 7c-1.103 0-2 .897-2 2v3.815c0 .37-.092.868-.244 1.527.561-.298.892-.342 1.108-.342h6.412c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2H6.775m0-1h5.276a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5.64c-.59 0-2.213 1.273-2.376 1.538-.81 1.194.512-2.656.512-3.723V9a3 3 0 0 1 3-3Z" />
                        </g>
                    </g>
                    <g data-name="Bubble" fill="none">
                        <path d="m3.75 15.444.07-.287c.224-.903.455-1.836.455-2.342V9c0-1.379 1.121-2.5 2.5-2.5h5.276c1.379 0 2.5 1.121 2.5 2.5v3c0 1.379-1.121 2.5-2.5 2.5H5.64c-.475 0-1.265.474-1.89.944Z" />
                        <path
                            d="M6.775 7c-1.103 0-2 .897-2 2v3.815c0 .37-.092.868-.244 1.527.561-.298.892-.342 1.108-.342h6.412c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2H6.775m0-1h5.276a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5.64c-.59 0-2.213 1.273-2.376 1.538-.81 1.194.512-2.656.512-3.723V9a3 3 0 0 1 3-3Z"
                            fill="#f0f" />
                    </g>
                </g>
                <path
                    data-name="Chat Sentence 1"
                    fill="none"
                    stroke="#00e5ff"
                    d="M6.275 8.5h6.277" />
                <path
                    data-name="Chat Sentence 2"
                    fill="none"
                    stroke="#00e5ff"
                    d="M6.275 10.5h6.277" />
                <path
                    data-name="Chat Sentence 3"
                    fill="none"
                    stroke="#00e5ff"
                    d="M6.275 12.5h6.277" />
                <g data-name="Chat Bubble 1">
                    <g data-type="innerShadowGroup">
                        <g filter="url(#Chat_svg__c)">
                            <g data-name="Bubble" fill="#fff">
                                <path d="M18.302 18.444c-.624-.47-1.415-.944-1.89-.944H10A2.503 2.503 0 0 1 7.5 15v-3c0-1.378 1.122-2.5 2.5-2.5h5.277c1.378 0 2.5 1.122 2.5 2.5v3.815c0 .506.23 1.44.454 2.342l.071.287Z" />
                                <path
                                    d="M10 10c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h6.412c.216 0 .547.044 1.108.342-.152-.659-.243-1.157-.243-1.527V12c0-1.103-.898-2-2-2H10m0-1h5.277a3 3 0 0 1 3 3v3.815c0 1.067 1.322 4.917.511 3.723-.163-.265-1.786-1.538-2.376-1.538H10a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z"
                                    fill="#f0f" />
                            </g>
                        </g>
                        <g data-name="Bubble" fill="#fff">
                            <path d="M18.302 18.444c-.624-.47-1.415-.944-1.89-.944H10A2.503 2.503 0 0 1 7.5 15v-3c0-1.378 1.122-2.5 2.5-2.5h5.277c1.378 0 2.5 1.122 2.5 2.5v3.815c0 .506.23 1.44.454 2.342l.071.287Z" />
                            <path d="M10 10c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h6.412c.216 0 .547.044 1.108.342-.152-.659-.243-1.157-.243-1.527V12c0-1.103-.898-2-2-2H10m0-1h5.277a3 3 0 0 1 3 3v3.815c0 1.067 1.322 4.917.511 3.723-.163-.265-1.786-1.538-2.376-1.538H10a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z" />
                        </g>
                        <g filter="url(#Chat_svg__d)">
                            <g data-name="Bubble" fill="#fff">
                                <path d="M18.302 18.444c-.624-.47-1.415-.944-1.89-.944H10A2.503 2.503 0 0 1 7.5 15v-3c0-1.378 1.122-2.5 2.5-2.5h5.277c1.378 0 2.5 1.122 2.5 2.5v3.815c0 .506.23 1.44.454 2.342l.071.287Z" />
                                <path d="M10 10c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h6.412c.216 0 .547.044 1.108.342-.152-.659-.243-1.157-.243-1.527V12c0-1.103-.898-2-2-2H10m0-1h5.277a3 3 0 0 1 3 3v3.815c0 1.067 1.322 4.917.511 3.723-.163-.265-1.786-1.538-2.376-1.538H10a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z" />
                            </g>
                        </g>
                        <g data-name="Bubble" fill="none">
                            <path d="M18.302 18.444c-.624-.47-1.415-.944-1.89-.944H10A2.503 2.503 0 0 1 7.5 15v-3c0-1.378 1.122-2.5 2.5-2.5h5.277c1.378 0 2.5 1.122 2.5 2.5v3.815c0 .506.23 1.44.454 2.342l.071.287Z" />
                            <path
                                d="M10 10c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h6.412c.216 0 .547.044 1.108.342-.152-.659-.243-1.157-.243-1.527V12c0-1.103-.898-2-2-2H10m0-1h5.277a3 3 0 0 1 3 3v3.815c0 1.067 1.322 4.917.511 3.723-.163-.265-1.786-1.538-2.376-1.538H10a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z"
                                fill="#f0f" />
                        </g>
                    </g>
                    <path
                        data-name="Chat Sentence 1"
                        fill="none"
                        stroke="#00e5ff"
                        d="M15.777 11.5H9.5" />
                    <path
                        data-name="Chat Sentence 2"
                        fill="none"
                        stroke="#00e5ff"
                        d="M15.777 13.5H9.5" />
                    <path
                        data-name="Chat Sentence 3"
                        fill="none"
                        stroke="#00e5ff"
                        d="M15.777 15.5H9.5" />
                </g>
            </g>
        </svg>
    );
}

export default Chat;