import React from "react";
import { NewYorkLogo } from "./Icons";

const Footer = () => {
  return (
    <section className="flex h-[1398px] w-screen items-center justify-center bg-[#121212] xl:h-[760px] xl:items-start">
      <section className="h-full w-[80%]  xl:h-[80%] xl:w-[50%]">
        {/* <NewYorkLogo /> */}
        <div className="flex h-[98px] w-full items-center justify-center xl:h-[65px]">
          <img
            // w-32 h-8
            className="h-8 w-32 cursor-pointer"
            src="https://www.newyorker.com/verso/static/the-new-yorker/assets/logo-reverse.f915b516b6ca9c0c2a9bdf9b749519365b2b2e4a.svg"
            alt=""
          />
        </div>
        <nav className="h-[210px] w-full border-y border-[#333333]"></nav>
      </section>
    </section>
  );
};

export default Footer;
// https://www.newyorker.com/verso/static/the-new-yorker/assets/logo-reverse.f915b516b6ca9c0c2a9bdf9b749519365b2b2e4a.svg
