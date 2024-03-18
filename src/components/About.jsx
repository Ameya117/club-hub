
import { Parallax } from "react-scroll-parallax";
import React from "react";

const About = () => {
  return (
    <>
      <div className="my-10 lg:my-48">
        <Parallax speed={-12}>
          <div className="justify-between hidden lg:flex lg:flex-row lg:justify-between h-[20vh]">
            <img
              className="w-[30vw] h-[55vh] object-cover mt-48 -z-10 absolute left-4 "
              src="/pic1.jpg"
            />
            <img
              className="w-[30vw] h-[55vh] object-cover ml-auto -z-10 absolute right-4"
              src="/pic2.jpg"
            />
          </div>
        </Parallax>
        <div className=" left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="text-black text-6xl font-light mb-5 tracking-widest font-sans">
            About Us
          </div>
          <div className="w-[75vw] lg:w-[60vw]  border-2 rounded-2xl p-4 md:p-5 text-xl bg-[#D9D9D9] opacity-80 border-black leading-[2rem]">
            Welcome to ClubHub, your gateway to the vibrant world of college
            clubs and events! Here, we invite you to embark on a journey of
            discovery, connecting you with a diverse array of clubs that cater
            to your interests and passions. Dive into our "Discover" section to
            explore the rich tapestry of clubs, each offering unique experiences
            and opportunities for personal and professional growth. Stay updated
            with our comprehensive event calendar, where you can relive the
            excitement of past events and stay ahead with upcoming gatherings
            that promise fun, learning, and networking. We believe that
            participation in these events not only enriches your college
            experience but also fosters invaluable skills, friendships, and
            memories that last a lifetime. Join us in celebrating the spirit of
            community, exploration, and empowerment through ClubHub!
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
