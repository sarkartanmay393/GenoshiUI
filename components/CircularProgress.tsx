import React from 'react';

const CircularProgress = ({
  radius,
  strokeWidth
}: {
  radius: number;
  strokeWidth: number;
}) => {
  return (
    <svg height={radius * 2} width={radius * 2} viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r={50 - strokeWidth}
        fill="none"
        stroke="lightgreen"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="1,200"
        transform="rotate(0)"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default CircularProgress;
