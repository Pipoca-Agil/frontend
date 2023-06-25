import { w } from "windstitch";

export const Container = w.fieldset(`
  relative 
  flex w-full 
  flex-col
  items-start
  justify-center
  border-0
`);

export const Input = w.input(
  `
  focus:outline-none  
  h-14    
  w-full 
  border-custom-GRAY   
  rounded-3xl 
  border-2
  bg-transparent
  px-3.5
  py-5 
  text-base  
  font-normal 
`
);
export const P = w.span(`
  text-custom-RED
  text-base
  font-thin
  text-left
`);
