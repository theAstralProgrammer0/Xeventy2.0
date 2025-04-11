"use client";
import React from "react";

const variants = {
  primary:
    "border-black-900_01 border border-solid checked:border-black-900_01 checked:border-[3px] checked:border-solid checked:bg-black-900_01 checked:focus:bg-black-900_01 checked:focus:border-black-900_01 checked:hover:bg-black-900_01 checked:hover:border-black-900_01",
} as const;

const sizes = {
  xs: "h-[18px] w-[18px] rounded-[3px]",
} as const;

type CheckboxProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    onChange: (checked: boolean) => void; // Fixed: Explicitly defined onChange type
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    onClick: () => void;
  }>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className + " flex items-center gap-[5px] cursor-pointer"}>
          <input
            className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`} // Fixed: Used 'sizes' instead of 'size'
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
      </>
    );
  },
);

CheckBox.displayName = "CheckBox"; // Fixed: Added display name

export { CheckBox };

