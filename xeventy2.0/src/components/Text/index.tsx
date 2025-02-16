import React from "react";

const sizes = {
  textxs: "text-[10px] font-normal",
  texts: "text-[11px] font-normal",
  textmd: "text-[12px] font-normal",
  textlg: "text-[13px] font-normal",
  textxl: "text-[14px] font-normal",
  text2xl: "text-[16px] font-normal",
  text3xl: "text-[17px] font-normal",
  text4xl: "text-[18px] font-normal",
  text5xl: "text-[19px] font-normal",
  text6xl: "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  text7xl: "text-[27px] font-normal md:text-[25px] sm:text-[23px]",
  text8xl: "text-[30px] font-normal md:text-[28px] sm:text-[26px]",
  text9xl: "text-[33px] font-normal md:text-[31px] sm:text-[29px]",
  text10xl: "text-[34px] font-normal md:text-[32px] sm:text-[30px]",
  text11xl: "text-[47px] font-normal md:text-[43px] sm:text-[37px]",
  text12xl: "text-[49px] font-normal md:text-[45px] sm:text-[39px]",
  text13xl: "text-[56px] font-normal md:text-[48px] sm:text-[42px]",
};

export type TextProps = Partial<{
  className: string,
  as: any;
  size: keyof typeof sizes;
}> & 
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "text4xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-white-a700 font-montserrat ${className} ${sizes[size as keyof typeof sizes]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

