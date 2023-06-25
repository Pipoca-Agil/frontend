//import checked from "../../../assets/checked.svg";

import { w } from "windstitch";

export const Input = w.input(`
  cursor-pointer
  peer      
  relative 
  shrink-0 
  w-4 h-4 
  appearance-none 
  border rounded-sm 
  focus:outline-none  
  checked:bg-transparent
  after:content-['']
  after:w-full
  after:h-full
  after:absolute
  after:left-0
  after:top-0
  after:bg-[length:10px] 
  after:bg-center 
  after:bg-no-repeat
  checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDExIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDQuNzc2NTZMMy4yNSA3LjYwODk4QzMuNjY0MTUgOC4xMzAzNCA0LjMzNTg1IDguMTMwMzQgNC43NSA3LjYwODk4TDEwIDEiIHN0cm9rZT0iIzE0MTQxNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=')] 

`);

export const Label = w.label(`
  cursor-pointer
  text-base
  font-normal
  text-custom-BLACK-100
`);
export const Link = w.a(`
  font-normal 
  text-custom-GOLD 
  underline
`);
export const P = w.span(`
  text-[#DB3838] 
  text-base
  font-thin
  text-left
`);
