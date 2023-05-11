import React, { useRef, useState } from "react";
import { useTheme } from "next-themes";
import { BeakerIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [scroll,setScroll] = useState<boolean>(false);
  const themeref =useRef<HTMLInputElement>(null);
  
  const renderThemeChanger = () :JSX.Element => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="text-yellow-500 w-7 h-7 "
          role="button"
          // onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-4 h-4 text-xs text-white "
          role="button"
          // onClick={() => setTheme("dark")}
        />
      );
    }
  };
  const changeTheme = (): void => {
    setScroll(!scroll)
    if(!scroll){
      themeref.current?.classList.add('active')
      setTheme('dark')
    }else{
      themeref.current?.classList.remove('active')
      setTheme('light')
    }
  };
  return (
    <div>
      <header className="z-10 mt-4 bg-transparent shadow-sm h-15 dark:border-white">
        <div className="flex items-center justify-between px-10"> 
          <Logo />
          <div
            className="relative flex items-center justify-between w-24 h-10 px-2 bg-gray-500 rounded-full cursor-pointer"
            onClick={changeTheme}
          >
            <MoonIcon className="w-6 h-6 text-gray-900" />
            <SunIcon className="w-6 h-6 text-gray-900" />
            <div ref={themeref} className="absolute right-0 -translate-x-[3.75rem] transition-all duration-250 ease-in-out">
              <div className="flex items-center justify-center bg-black rounded-full w-7 h-7 outline outline-yellow-300">
                {renderThemeChanger()}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
