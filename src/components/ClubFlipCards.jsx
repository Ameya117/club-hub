import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

const ClubFlipCards = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1((prevState) => !prevState);
  };
  const handleClick2 = () => {
    setIsFlipped2((prevState) => !prevState);
  };
  const handleClick3 = () => {
    setIsFlipped3((prevState) => !prevState);
  };

  const handleClick4 = () => {
    setIsFlipped4((prevState) => !prevState);
  };

  const handleClick5 = () => {
    setIsFlipped5((prevState) => !prevState);
  };

  const handleClick6 = () => {
    setIsFlipped6((prevState) => !prevState);
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * custom,
      },
    }),
  };

  return (
    <>
      <div className="flex flex-col items-center gap-3 mt-64">
        <Parallax translateX={["-200px", "50px"]} easing="easeInQuad">
          <span className="text-2xl tracking-[0.5rem] opacity-80 font-mono ">
            explore
          </span>
        </Parallax>
        <Parallax translateX={["200px", "-75px"]} easing="easeInQuad">
          <div className="text-5xl tracking-[0.5rem] font-mono  ">Clubs </div>
        </Parallax>
      </div>

      <div className="gap-y-[2rem] grid md:grid-cols-2 lg:grid-cols-3 mt-[2rem]">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
        >
          <ReactCardFlip isFlipped={isFlipped1} flipDirection="verical">
            <div
              onClick={handleClick1}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col  mx-auto border-2 rounded-2xl relative"
            >
              <img
                className="absolute bottom-0 h-[60%] w-full object-cover mx-auto"
                src="/cultural.png"
                alt="cultural"
              />
              <h1 className="p-2 text-2xl font-semibold text-center mt-[10%]">
                Cultural
              </h1>
              <button>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick1}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>
                  <Link className="link" href="/clubs/music">
                    <span>Music Club</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>Arts Club</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>Dance</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>Photography Club</span>
                  </Link>
                </li>
              </div>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
        >
          <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
            <div
              onClick={handleClick2}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col  mx-auto border-2 rounded-2xl relative"
            >
              <img
                className="absolute bottom-0 h-[65%] w-full object-cover object-top mx-auto"
                src="/technical.png"
                alt="cultural"
              />
              <h1 className="p-2 text-2xl font-semibold text-center mt-[10%]">
                Technical
              </h1>
              <button onClick={handleClick2}>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick2}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>
                  <Link className="link" href="#">
                    <span>Codechef</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>GDSC</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>TAM</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>Robovitics</span>
                  </Link>
                </li>
              </div>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
        >
          <ReactCardFlip isFlipped={isFlipped3} flipDirection="vertical">
            <div
              onClick={handleClick3}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col mx-auto border-2 rounded-2xl relative"
            >
              <img
                className="absolute bottom-0 h-[60%] w-full object-cover object-top mx-auto"
                src="/language.png"
                alt="cultural"
              />
              <h1 className="p-2 text-2xl font-semibold text-center mt-[10%]">
                Literary and Language
              </h1>
              <button>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick3}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>
                  <Link className="link" href="#">
                    <span>English Literary Association</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>Hindi Literary Association</span>
                  </Link>
                </li>
              </div>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={2}
        >
          <ReactCardFlip isFlipped={isFlipped4} flipDirection="vertical">
            <div
              onClick={handleClick4}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col  mx-auto border-2 rounded-2xl relative"
            >
              <img
                className="absolute bottom-0 h-[60%] w-full object-cover mx-auto"
                src="/sports.png"
                alt="cultural"
              />
              <h1 className="p-2 text-2xl font-semibold text-center mt-[10%]">
                Sports & Fitness
              </h1>
              <button>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick4}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>
                  <Link className="link" href="#">
                    <span>Football</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>Cricket</span>
                  </Link>
                </li>
              </div>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={2}
        >
          <ReactCardFlip isFlipped={isFlipped5} flipDirection="vertical">
            <div
              onClick={handleClick5}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col  mx-auto border-2 rounded-2xl relative"
            >
              <img
                className="absolute bottom-0 h-[55%] w-full object-cover object-top mx-auto"
                src="/social.png"
                alt="cultural"
              />
              <h1 className="p-2 text-2xl font-semibold text-center mt-[10%]">
                Social and Community Services
              </h1>
              <button onClick={handleClick5}>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick5}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2 rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>
                  <Link className="link" href="#">
                    <span>Juvenile Care</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>Anokha</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>FEPSI</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>LEO</span>
                  </Link>
                </li>
              </div>
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={2}
        >
          <ReactCardFlip isFlipped={isFlipped6} flipDirection="vertical">
            <div
              onClick={handleClick6}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col  mx-auto border-2 rounded-2xl relative"
            >
              <img
                className="absolute bottom-0 h-[50%] w-full object-cover object-top mx-auto"
                src="/business.png"
                alt="cultural"
              />
              <h1 className="p-2 text-2xl font-semibold text-center mt-[10%]">
                Entrepreneurship and Business
              </h1>
              <button onClick={handleClick6}>Tap to Flip</button>
            </div>
            <div
              onClick={handleClick6}
              className="h-[20rem] w-[20rem] bg-gray-100 flex flex-col justify-center items-center mx-auto border-2  rounded-2xl"
            >
              <div className="p-2 font-extralight ">
                <li>
                  <Link className="link" href="#">
                    <span>ECELL</span>
                  </Link>
                </li>
                <li>
                  <Link className="link" href="#">
                    <span>Bulls and Bears</span>
                  </Link>
                </li>
              </div>
            </div>
          </ReactCardFlip>
        </motion.div>
      </div>
    </>
  );
};
export default ClubFlipCards;
