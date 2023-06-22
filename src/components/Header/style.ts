import { w } from "windstitch";

export const Container = w.header(`
  w-full
  flex
  items-center 
  justify-center 
  bg-gradient-to-r from-[#94146D] to-[#F14D1A]
`);

export const Nav = w.nav(`
  px-4 
  lg:px-[11.375rem] 
  flex  container 
  items-center 
  justify-between
`);
