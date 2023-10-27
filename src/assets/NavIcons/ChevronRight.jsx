import React from 'react'

const ChevronRight = ({isActive}) => {
    return (
        <svg
            width="24"
            height="25" viewBox="0 0 24 25"
            fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <g id="chevron_right">
                <mask id="mask0_2_2367" 
                // style="mask-type:alpha"
                 maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                    <rect id="Bounding box" y="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2_2367)">
                    <path id="chevron_right_2" d="M12.6 12.5L8 7.9L9.4 6.5L15.4 12.5L9.4 18.5L8 17.1L12.6 12.5Z" fill={isActive ? '#33CC9F' : "black"} />
                </g>
            </g>
        </svg>

    )
}

export default ChevronRight