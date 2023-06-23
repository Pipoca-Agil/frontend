import { w } from "windstitch";

export const Container = w.main(`
  mx-auto
  min-h-screen 
  container 
  flex 
  flex-col 
  items-center
  justify-between 
`);

export const Section = w.section(`
  my-10 
  w-full  
  max-w-[1920px] 
  max-[1290px]:flex-col 
  flex 
  items-center 
  justify-center 
  px-4 
  lg:px-[11.375rem]
  md:gap-6 
  lg:justify-between 
`);

export const Form = w.form(`
  flex 
  flex-col 
  justify-between 
  lg:items-center 
  gap-6 
  rounded-lg 
  border-2 
  border-[#DCDCDC] 
  px-3  
  lg:px-6 
  pb-20 
  lg:pb-36 
  pt-7 
  lg:pt-14"
`);
