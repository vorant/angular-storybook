import React from 'react';

const Abstract = () => (
    <svg viewBox="0 0 68 68">
        {/* <defs>
            <clipPath id="clip-path">
                <path fill="none" d="M0 0h68v68H0z"/>
            </clipPath>
        </defs> */}

        <g className="cls-2">
            <path
                fill="currentColor"
                d="M28.42 32.94a6.64 6.64 0 1 0 6.64 6.64 6.65 6.65 0 0 0-6.64-6.64"
            />
            <path
                fill="currentColor"
                d="M34 0C6.8 0 0 6.8 0 34s6.8 34 34 34 34-6.8 34-34S61.2 0 34 0m-5.58 52.59a13 13 0 1 1 13-13 13 13 0 0 1-13 13m23.64-.53h-6.37V22.31H15.94v-6.37h36.12z"
            />
        </g>
    </svg>
);

const Html = () => (
    <svg viewBox="0 0 22 22">
        <path
            fill="currentColor"
            d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"
        />
    </svg>
);

const Compare = () => (
    <svg viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"
        />
    </svg>
);

const Invert = () => (
    <svg viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M12,19.58V19.58C10.4,19.58 8.89,18.96 7.76,17.83C6.62,16.69 6,15.19 6,13.58C6,12 6.62,10.47 7.76,9.34L12,5.1M17.66,7.93L12,2.27V2.27L6.34,7.93C3.22,11.05 3.22,16.12 6.34,19.24C7.9,20.8 9.95,21.58 12,21.58C14.05,21.58 16.1,20.8 17.66,19.24C20.78,16.12 20.78,11.05 17.66,7.93Z"
        />
    </svg>
);

export { Abstract, Html, Compare, Invert };
