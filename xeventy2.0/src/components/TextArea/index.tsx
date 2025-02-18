"use client";
import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;

const variants = {
  tarOutlineBlack9003f: "!border-black-900_3f border-[0.85px] border-solid bg-white-a700",
} as const;

const sizes = {
  xs: "h-[258px] p-3",
} as const;

type TextAreaProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    onChange?: (value: string) => void;
    shape: keyof typeof variants | null;
    size: keyof typeof sizes;
    variant: keyof typeof variants;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarOutlineBlack9003f",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) onChange(e.target.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };

