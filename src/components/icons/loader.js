import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* H left vertical line */}
      <rect
        id="h-left"
        x="20"
        y="20"
        width="6"
        height="60"
        fill="currentColor"
        style={{ opacity: 0, transform: 'scaleY(0)', transformOrigin: 'top center' }}
      />
      {/* H right vertical (shared with E left) */}
      <rect
        id="h-shared"
        x="40"
        y="20"
        width="6"
        height="60"
        fill="currentColor"
        style={{ opacity: 0, transform: 'scaleY(0)', transformOrigin: 'top center' }}
      />
      {/* H horizontal bar */}
      <rect
        id="h-horizontal"
        x="20"
        y="47"
        width="26"
        height="6"
        fill="currentColor"
        style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left center' }}
      />
      {/* E top bar */}
      <rect
        id="e-top"
        x="40"
        y="20"
        width="24"
        height="6"
        fill="currentColor"
        style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left center' }}
      />
      {/* E middle bar */}
      <rect
        id="e-middle"
        x="40"
        y="47"
        width="18"
        height="6"
        fill="currentColor"
        style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left center' }}
      />
      {/* E bottom bar */}
      <rect
        id="e-bottom"
        x="40"
        y="74"
        width="24"
        height="6"
        fill="currentColor"
        style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left center' }}
      />
      {/* Italicized A */}
      <g transform="skewX(-15)">
        <rect
          id="a-left"
          x="79"
          y="20"
          width="6"
          height="60"
          fill="currentColor"
          style={{ opacity: 0, transform: 'scaleY(0)', transformOrigin: 'bottom center' }}
        />
        <rect
          id="a-cross"
          x="79"
          y="47"
          width="20"
          height="6"
          fill="currentColor"
          style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left center' }}
        />
      </g>
      <g transform="skewX(5)">
        <rect
          id="a-right"
          x="76"
          y="20"
          width="6"
          height="60"
          fill="currentColor"
          style={{ opacity: 0, transform: 'scaleY(0)', transformOrigin: 'bottom center' }}
        />
      </g>
    </g>
  </svg>
);

export default IconLoader;
