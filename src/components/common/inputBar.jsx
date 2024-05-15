import React from 'react';

const InputBar = React.forwardRef(({ className, placeholder = 'Enter your text', type = 'text', id = '', autoComplete, ...props }, ref) => {
    return (
        <div className="mb-6">
            <div>
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    className={`
                        block
                        w-full
                        h-10
                        px-4
                        py-2
                        text-base
                        text-gray-700
                        placeholder-custom_Gray
                        bg-gray-100
                        border
                        border-gray-300
                        rounded-lg
                        focus:outline-none
                        focus:ring-2
                        focus:ring-custom_Orang
                        focus:border-transparent
                        dark:bg-custom_white
                        dark:text-white
                        dark:placeholder-custom_Gray
                        dark:border-gray-600
                    ${className}
                    `}
                    ref={ref}
                    {...props}
                />
            </div>
        </div>
    );
});

export default InputBar;
