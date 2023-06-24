import { w } from "windstitch";

export const Container = w.button(
  `
  font-bold
  text-sm
  flex 
  justify-center 
  self-center 
  items-center 
  rounded-3xl 
  py-3 
  px-8
  sm:px-[46px] 
  transition duration-300
`,
  {
    variants: {
      variables: {
        deafult: "bg-white",
        primary: "bg-custom-YELLOW",
        secondary:
          "bg-custom-BLACK-100 text-custom-GRAY py-[19px] text-[1.25rem] font-semibold  w-[18.25rem]"
      }
    },
    defaultVariants: {
      variables: "deafult"
    }
  }
);
