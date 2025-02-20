"use client";
import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;

const variants = {
  fill: {
    blue_A700_5b: "bg-blue-a700_5b shadow-xs text-black-900_01 border border-green-a700",
    blue_A700_e5: "bg-blue-a700_e5 shadow-xs text-black-900_01 border border-green-a700",
    black_900_01: "bg-black-900_01 text-white-a700 border border-green-a700",
  },
} as const;

const sizes = {
  xs: "h-[30px] px-1.5 text-[13px]",
  sm: "h-[50px] px-[34px] text-[18px]",
  md: "h-[72px] px-[34px] text-[18px]",
  lg: "h-[76px] px-[34px] text-[20px]",
  xl: "h-[84px] px-[34px] text-[24px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
    hoverColor?: string;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "blue_A700_5b",
  hoverColor,
  ...restProps
}) => {
  // Define the background color variable based on the color prop.
  // Expecting that the CSS variable is named in lowercase, e.g. --blue_a700_5b.
  const bgColorVar = `var(--${color.toLowerCase()})`;

  // Compute hover background: default uses color-mix() to blend the background with border-green.
  // You can override via the hoverColor prop.
  const computedHoverColor = hoverColor || `color-mix(in srgb, ${bgColorVar}, #00a754 50%)`;

  return (
    <>
      <button
        className={`${className} custom-hover-bg flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap transition-colors duration-300 ease-in-out ${shape ? shapes[shape] : ""} ${size ? sizes[size] : ""} ${
          variant ? variants[variant]?.[color as keyof (typeof variants)[typeof variant]] : ""
        }`}
        style={{ "--bg-color": bgColorVar, "--hover-bg": computedHoverColor } as React.CSSProperties}
        {...restProps}
      >
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </button>
      <style jsx>{`
        .custom-hover-bg:hover {
          background-color: var(--hover-bg);
        }
      `}</style>
    </>
  );
};

export { Button };

