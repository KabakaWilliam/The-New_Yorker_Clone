import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";
import DesktopContentWrapper from "../components/DesktopContentWrapper";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { width, height } = useWindowSize();
  if (width <= 640) {
    <>
      <Head>
        <title>The New Yorker</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-[100vh] w-screen items-center justify-center">
        <section>
          <Image
            className="cursor-pointer hover:animate-pulse"
            src={"/Waiting.png"}
            width={300}
            height={400}
            alt="Working on it image"
            placeholder="blur"
            blurDataURL="/Waiting.png"
          />
        </section>
      </main>
    </>;
  }
  return (
    <>
      <Head>
        <title>The New Yorker</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex h-[100vh] w-screen items-center justify-center"> */}
      {/* <section>
          <Image
            className="cursor-pointer hover:animate-pulse"
            src={"/Waiting.png"}
            width={300}
            height={400}
            alt="Working on it image"
            placeholder="blur"
            blurDataURL="/Waiting.png"
          />
        </section> */}
      <DesktopContentWrapper>
        <section className="my-4 flex h-[169px] w-[87%] flex-col items-center justify-center gap-y-2 gap-x-5 border-y border-y-[#e5e5e5] text-xl md:h-[93px] md:flex-row md:gap-y-0   ">
          <div className="h-[75px] w-[75px]">
            <img
              src="/coverImage.webp"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className=" flex h-[75px] w-[90%] flex-col flex-wrap items-center justify-center  font-acp md:w-max md:flex-row md:flex-nowrap">
            <span>
              {" "}
              Support <em className=" italic">The New Yorkers</em> award-winning
              journalism.{" "}
              <span className="cursor-pointer text-[#0879bf] underline hover:text-slate-500">
                {" "}
                Subscribe today »
              </span>
            </span>{" "}
          </div>
        </section>
      </DesktopContentWrapper>
      <DesktopContentWrapper>
        <section className="flex h-[40vh] w-screen items-center justify-center">
          <Image
            className="cursor-pointer hover:animate-pulse"
            src={"/Waiting.png"}
            width={300}
            height={400}
            alt="Working on it image"
            placeholder="blur"
            blurDataURL="/Waiting.png"
          />
        </section>
      </DesktopContentWrapper>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
