import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;

const variants = {
  fill: {
    blue_A700_5b: "bg-blue-a700_5b shadow-xs text-black-900_01",
    black_900_01: "bg-black-900_01 text-white-a700",
    blue_A700_e5: "bg-blue-a700_e5 shadow-xs text-black-900_01",
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
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
