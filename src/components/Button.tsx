import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    href?: string;
    external?: boolean;
    className?: string; // Allow custom classes
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    href,
    external = false,
    className = '',
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 overflow-hidden font-tech group";

    const variants = {
        primary: "bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.8)] border border-transparent",
        secondary: "bg-secondary text-black hover:bg-secondary/90 shadow-[0_0_20px_-5px_rgba(168,85,247,0.6)] hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.8)] border border-transparent",
        outline: "bg-transparent text-white border border-white/20 hover:border-primary/50 hover:bg-white/5 hover:text-primary hover:shadow-[0_0_20px_-10px_rgba(34,197,94,0.4)]",
        ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-3 text-base rounded-xl",
        lg: "px-8 py-4 text-lg rounded-xl"
    };

    const content = (
        <>
            {/* Inner Glow Effect for Outline/Ghost */}
            {(variant === 'outline' || variant === 'ghost') && (
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />

            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
            </span>
        </>
    );

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={combinedClassName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={combinedClassName}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props as any}
        >
            {content}
        </motion.button>
    );
};

export default Button;
