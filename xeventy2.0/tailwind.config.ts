module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          "900": "var(--black_900)",
          "900_01": "var(--black_900_01)",
          "900_07": "var(--black_900_07)",
          "900_0a": "var(--black_900_0a)",
          "900_3f": "var(--black_900_3f)",
          "900_93": "var(--black_900_93)",
        },
        blue: { 
          "700": "var(--blue_700)",
          "a700_5b": "var(--blue_a700_5b)",
          "a700_e5": "var(--blue_a700_e5)" 
        },
        blue_gray: {
          "100": "var(--blue_gray_100)"
        },
        gray: { 
          "700": "var(--gray_700)",
          "900": "var(--gray_900)"
        },
        green: {
          "300": "var(--green_300)",
          "a700": "var(--green_a700)",
          "a700_01": "var(--green_a700_01)",
          "a700_3f": "var(--green_a700_3f)",
          "a700_a5": "var(--green_a700_a5)"
        },
        white: {
          "a700": "var(--white_a700)"
        },
      },
      boxShadow: {
        "xs": "0 2.26px 2px 0 #0000003f",
        "sm": "3.76px 3.76px 3px 0 #0000003f",
        "md": "0 3.76px 3px 0 #0000003f",
        "lg": "1.88px 1.88px 1px 0 #0000003f",
        "xl": "1.88px 3.76px 3px 0 #0000003f"
      },
      fontFamily: {
        "inter": "Inter",
        "montserrat": "Montserrat",
        "merriweather": "Merriweather",
        "merriweathersans": "Merriweather Sans"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
