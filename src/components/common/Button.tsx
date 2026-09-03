import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 cursor-pointer select-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-theme-accent via-theme-accent-secondary to-theme-accent text-white shadow-glow hover:shadow-glow-lg hover:scale-105 active:scale-95 border border-white/20',
    secondary:
      'bg-theme-surface/90 hover:bg-theme-surface-hover text-theme-text-primary border border-theme-border shadow-glass hover:border-theme-border-hover hover:scale-105 active:scale-95',
    glass:
      'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 shadow-glass hover:scale-105 active:scale-95',
    ghost:
      'bg-transparent hover:bg-theme-surface-hover text-theme-text-secondary hover:text-theme-text-primary active:scale-95',
  };

  return (
    <motion.button
      whileHover={disabled || loading ? {} : { scale: 1.03 }}
      whileTap={disabled || loading ? {} : { scale: 0.96 }}
      disabled={disabled || loading}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* Subtle shine / sweep light effect on primary buttons */}
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
          <span className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-45 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </span>
      )}

      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon && <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
