export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40  max-h-[160px] w-screen bg-white shadow-md">
      <section className="flex h-14  w-full border-b border-[#e5e5e5] xl:h-[112px]">
        <div className="flex h-full w-[25%] items-center pl-5 xl:block xl:w-[20%]">
          <img
            className="hidden cursor-pointer object-contain xl:block xl:h-[110px] xl:w-[230px]"
            src="/SubscribeSticker.png"
            alt=""
          />
          <div className="block hover:cursor-pointer xl:hidden">
            <Bars3 />
          </div>
        </div>
        <div className="flex h-14 w-[50%] items-center justify-center  xl:h-full xl:w-[60%]">
          {/* <NewYorkLogo /> */}
          <img
            // w-32 h-8
            className="h-8 w-32 cursor-pointer xl:h-[70px] xl:w-[300px]"
            src="/newYorkerLogo-Black.svg"
            alt=""
          />
        </div>
        <div className="flex h-full w-[25%] items-center justify-center   xl:w-[20%]  ">
          <section className=" hidden h-8 w-[320px] items-center justify-start gap-x-4 text-[12px] font-semibold  xl:flex">
            <div className="cursor-pointer hover:underline">Newsletter</div>
            <div className="cursor-pointer hover:underline">Sign In</div>
            <button className="h-[30px] w-28 rounded-sm bg-[#0787ca] text-white">
              Subscribe
            </button>
            <a href="/Search" className="cursor-pointer">
              <SearchIcon />
            </a>
          </section>
        </div>
      </section>
      <section className="hidden xl:flex xl:h-12 xl:w-full ">
        <div className="h-full w-[10%]"></div>
        <div className="flex h-full w-[80%] items-center justify-center">
          <ul className="flex h-4 w-max gap-x-5 text-[12px] font-semibold ">
            <li className="hover:underline">
              <a href="/News">News</a>
            </li>
            <li className="hover:underline">
              <a href="/Books & Culture">Books & Culture</a>
            </li>
            <li className="hover:underline">
              <a href="/Fiction & Poetry">Fiction & Poetry</a>
            </li>
            <li className="hover:underline">
              <a href="/Humor & Cartoons">Humor & Cartoons</a>
            </li>
            <li className="hover:underline">
              <a href="/Magazine">Magazine</a>
            </li>
            <li className="hover:underline">
              <a href="/Puzzles & Games">Puzzles & Games</a>
            </li>
            <li className="hover:underline">
              <a href="/Video">Video</a>
            </li>
            <li className="hover:underline">
              <a href="/Podcasts">Podcasts</a>
            </li>
            <li className="hover:underline">
              <a href="/Archive">Archive</a>
            </li>
            <li className="hover:underline">
              <a href="/Goings On">Goings On</a>
            </li>
            <li className="hover:underline">
              <a href="/Shop">Shop</a>
            </li>
          </ul>
        </div>
        <div className="h-full w-[10%]"></div>
      </section>
    </nav>
  );
};

const NewYorkLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="132"
      height="32"
      viewBox="0 0 132 32"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.05881 12.1776H3.26419L12.615 23.8764V12.1776H14.0559V30.3919L2.47026 15.7104V30.1602H1L1.05881 12.1776ZM16.5259 12.1776H23.2009L24.1418 14.2625C24.1418 14.2625 23.0244 13.1622 20.9367 13.1622H19.3194V19.5039H22.0247C23.4067 19.5039 23.6125 19.3591 24.1418 18.8378V21.5019C24.1418 21.5019 23.5537 20.6042 22.0247 20.6042H19.3194V28.944H23.0832C26.7295 28.944 28.6114 27.4382 28.6114 27.4382L27.2588 30.1602H16.4965L16.5259 12.1776ZM109.24 12.1776H116.65L117.591 14.2625C117.591 14.2625 116.533 13.1622 114.239 13.1622H111.798V19.5039H114.739C115.827 19.5039 116.15 19.417 116.562 19.0116V21.1544C116.562 21.1544 116.268 20.5174 114.739 20.5174H111.798V28.944H113.592C116.797 28.944 118.062 27.9884 118.062 27.9884L116.444 30.1602H109.24V12.1776ZM24.9652 12.1776H27.7881L33.8749 25.3533L35.1393 22.6023L30.4933 12.1776H33.1692L36.5508 19.2143L39.7853 12.1776H41.1674L37.3153 21.1255L39.2855 25.3533L45.1959 12.1776H46.8132L38.6974 30.305L35.8745 24.4266L33.1398 30.334L24.9652 12.1776ZM72.2486 11.5405C78.5413 11.5405 82.3639 15.9131 82.3639 20.778C82.3639 27.0328 78.9235 31 72.3956 31C65.8677 31 61.9862 26.1641 61.9862 21.3282C61.9862 15.8842 66.1029 11.5405 72.2486 11.5405ZM64.6915 20.9228C64.6915 25.1506 67.1027 29.7548 72.572 29.7548C77.6297 29.7548 79.6293 25.6718 79.6293 21.0386C79.6293 17.332 77.071 12.612 72.1016 12.612C68.6612 12.612 64.6915 15.305 64.6915 20.9228ZM84.5105 12.1776H88.8037C91.0679 12.1776 92.9498 13.4517 92.9498 15.8552C92.9498 18.6641 90.862 19.388 89.4212 19.8514C92.0088 20.2857 92.9792 21.5019 92.9792 24.9479C92.9792 28.3938 93.8613 29.639 94.6553 29.639C95.2728 29.639 95.7433 29.2336 95.9197 28.973L96.2726 29.2046C96.1549 29.3784 95.4492 30.4788 93.7731 30.4788C92.097 30.4788 90.8326 28.973 90.8326 25.3822C90.8326 20.2278 89.4212 20.112 88.2744 20.112V19.7355C88.3038 19.7355 90.6856 19.2143 90.6856 16.3185C90.6856 13.5965 89.0095 13.1622 88.3332 13.1622H87.0982V30.1892H84.4517L84.5105 12.1776ZM119.238 12.1776H123.531C125.795 12.1776 127.677 13.4517 127.677 15.8552C127.677 18.6641 125.589 19.388 124.149 19.8514C126.736 20.2857 127.707 21.5019 127.707 24.9479C127.707 28.3938 128.589 29.639 129.383 29.639C130 29.639 130.471 29.2336 130.647 28.973L131 29.2046C130.882 29.3784 130.177 30.4788 128.501 30.4788C126.824 30.4788 125.56 28.973 125.56 25.3822C125.56 20.2278 124.149 20.112 123.002 20.112V19.7355C123.031 19.7355 125.413 19.2143 125.413 16.3185C125.413 13.5965 123.737 13.1622 123.061 13.1622H121.826V30.1892H119.179L119.238 12.1776ZM104.888 24.89C104.888 28.3359 105.77 29.5811 106.564 29.5811C107.182 29.5811 107.652 29.1757 107.829 28.9151L108.182 29.1467C108.064 29.3205 107.358 30.4208 105.682 30.4208C104.006 30.4208 102.742 28.9151 102.742 25.3243V24.6004C102.742 22.4575 102.624 20.8069 102.271 19.7355C101.977 18.8958 100.919 18.2587 100.477 18.2587H99.9188V30.1313H97.2723L97.3017 12.1197H99.9188V17.4189L104.712 12.1197H106.417L101.36 17.7085C103.947 18.1429 104.859 20.0541 104.859 24.166V24.89H104.888ZM63.6035 1H64.9855V4.24324H68.1613V1H69.5433V8.52896H68.1613V4.82239H64.9855V8.52896H63.6035V1ZM72.1604 1H75.689L76.1301 2.10039C76.1301 2.10039 75.4243 1.57915 74.8362 1.57915H73.5424V4.21429H74.6892C75.3361 4.21429 75.5126 3.92471 75.5126 3.92471V5.14093C75.5126 5.14093 75.3067 4.79344 74.6892 4.79344H73.5424V7.97876H75.1597C76.3947 7.97876 76.8946 7.3417 76.8946 7.3417L76.2771 8.55791H72.131V1H72.1604ZM59.0751 1.57915H59.0457V8.52896H57.6048V1.57915H56.8697C55.7229 1.57915 54.8114 2.38996 54.8114 2.38996L55.223 1.02896H61.4569L61.8686 2.38996C61.8686 2.38996 60.957 1.57915 59.8102 1.57915H59.0751ZM58.2223 30.1602H55.4289V20.8649L50.3418 12.1776H51.9885L56.8109 20.4305L61.6627 12.1776H63.3094L58.2223 20.8649V30.1602Z"
        fill="#121212"
        stroke="black"
        stroke-width="0.1"
      />
    </svg>
  );
};

const SearchIcon = () => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="iconSearch"
    >
      <title>Search</title>
      <path
        d="M14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm5.249 8.335l4.458 4.458-1.414 1.414-4.458-4.458a6.5 6.5 0 1 1 1.414-1.414z"
        fill-rule="nonzero"
      ></path>
    </svg>
  );
};

const Bars3 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
