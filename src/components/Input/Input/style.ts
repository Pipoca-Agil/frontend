import { w } from "windstitch";

export const Container = w.fieldset(`
  relative 
  flex w-full 
  items-center 
  justify-center
`);

export const Input = w.input(`
  focus:outline-none  
  h-14    
  w-full    
  rounded-3xl 
  border 
  border-2
  border-custom-GRAY
  bg-transparent
  px-3.5
  py-5 
  text-base  
  font-normal 
  placeholder-black
`);
