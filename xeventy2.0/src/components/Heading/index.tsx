import React from "react";

const sizes = {
  headingxs: "text-[15px] font-semibold",
  headings: "text-[27px] font-semibold md:text-[25px] sm:text-[23px]",
  headingmd: "text-[40px] font-semibold md:text-[38px] sm:text-[36px]",
  headinglg: "text-[48px] font-semibold md:text-[44px] sm:text-[38px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HT<LSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children.
  className = "",
  size = "headinglg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900_01 font-inter ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };

