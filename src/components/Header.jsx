import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const handleLoginPage = () => [router.push("/login")];
  return (
    <>
      <div className="absolute -z-10">
        <img src="/homebg.png" alt="home" className="object-cover h-[90vh] w-[100vw]" />
      </div>
      <div className="flex flex-col items-center mt-[20vh] mb-[20vh] gap-2 text-center">
        <div className="text-2xl lg:text-4xl tracking-[0.2rem] lg:tracking-[0.4rem]">
          Discover the ultimate hub
        </div>
        <div className="text-2xl lg:text-4xl tracking-[0.2rem] lg:tracking-[0.4rem]">
          for creativity and innovation
        </div>
        <button
          className="border-2 bg-black hover:bg-transparent hover:text-black hover:border-black text-white rounded-xl my-4 text-xl py-1 px-10 tracking-[0.1rem]"
          onClick={handleLoginPage}
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default Header;
