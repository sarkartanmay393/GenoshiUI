import React from 'react';

const Input = ({
  value,
  label,
  labelProps = '',
  valueProps = '',
  forcedLabelProps = '',
  forcedValueProps = '',
  rootProps = ''
}: {
  value: string;
  label: string;
  valueProps?: string;
  labelProps?: string;
  forcedLabelProps?: string;
  forcedValueProps?: string;
  rootProps?: string;
}) => {
  return (
    <div className={`flex items-center mb-2 ${rootProps}`}>
      <div
        className={
          forcedLabelProps + 'w-32 text-gray-300 font-medium mr-1' + labelProps
        }
      >
        {label}
      </div>
      <div
        className={
          forcedValueProps + 'flex-1 text-gray-100 font-semibold' + valueProps
        }
      >
        {value}
      </div>
    </div>
  );
};

export default Input;
