import React from "react";
import { NewYorkLogo } from "./Icons";

const SectionsOptions = [
  "News",
  "Crossword",
  "Books & Culture",
  "Video",
  "Fiction & Poetry",
  "Podcasts",
  "Humor & Cartoons",
  "Archive",
  "Magazine",
  "Goings On",
];
const Footer = () => {
  return (
    <section className="flex h-[1398px] w-screen items-center justify-center bg-[#121212] xl:h-[665px] xl:items-start">
      <section className="h-full w-[80%]  xl:h-[524px] xl:w-[50%]">
        {/* <NewYorkLogo /> */}
        <div className="flex h-[98px] w-full items-center justify-center xl:h-[65px]">
          <img
            // w-32 h-8
            className="h-8 w-32 cursor-pointer"
            src="/newYorkerLogo-White.svg"
            alt=""
          />
        </div>
        <nav className="h-max w-full border-y border-[#333333]">
          <MobileFooterLayout />
        </nav>
      </section>
    </section>
  );
};

export default Footer;
// https://www.newyorker.com/verso/static/the-new-yorker/assets/logo-reverse.f915b516b6ca9c0c2a9bdf9b749519365b2b2e4a.svg

const DesktopFooterLayout = () => {
  return <section></section>;
};
const MobileFooterLayout = () => {
  return (
    <section className="h-[362px] w-full max-w-[342px] pt-8 md:h-max">
      <div className="mb-8 font-Didot text-sm text-white">
        <i>SECTIONS</i>
      </div>
      <div className="flex h-max w-full flex-row flex-wrap  font-Graphie text-sm text-[#a2a2a2]">
        {SectionsOptions.map((section, index) => (
          <div
            key={index}
            className="mb-8 h-[23.94px] w-[50%] cursor-pointer hover:underline md:h-1 "
          >
            {section}
          </div>
        ))}
      </div>
    </section>
  );
};
