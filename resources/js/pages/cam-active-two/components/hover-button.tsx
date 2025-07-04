import React from 'react';

type HoverButtonProps = {
    label: string;
    icon?: React.ReactNode;
    gradientFrom?: string;
    gradientTo?: string;
    onClick?: () => void;
};

const HoverButton: React.FC<HoverButtonProps> = ({ label, icon, gradientFrom = 'from-purple-500', gradientTo = 'to-indigo-800', onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`relative whitespace-nowrap overflow-hidden rounded-md bg-gradient-to-r ${gradientFrom} ${gradientTo} group cursor-pointer text-lg font-medium tracking-wide text-white transition-transform active:scale-95`}
        >
            {/* Moving skew layer */}
            <span className="bg-primary absolute inset-0 -left-[10%] w-[120%] skew-x-12 transition-transform duration-500 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></span>

            {/* Content */}
            <span className="transition-color text-background relative z-10 flex items-center px-5 py-1.5 duration-500 group-hover:text-white">
                {icon && <span className="mr-2 h-5 w-5">{icon}</span>}
                {label}
            </span>
        </button>
    );
};

export default HoverButton;
