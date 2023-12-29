import React from 'react';

const Input = ({
  value,
  label,
  labelProps = '',
  valueProps = ''
}: {
  value: string;
  label: string;
  valueProps?: string;
  labelProps?: string;
}) => {
  return (
    <div className="flex items-center mb-2">
      <div className={'w-32 text-gray-300 font-medium mr-1' + labelProps}>
        {label}
      </div>
      <div className={'flex-1 text-gray-100 font-semibold' + valueProps}>
        {value}
      </div>
    </div>
  );
};

export default Input;
