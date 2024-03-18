import React from "react";
import Navbar from "@/components/Navbar";
import { CiFacebook, CiMail, CiMusicNote1 } from "react-icons/ci";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { CiInstagram } from "react-icons/ci";
import mongoose from "mongoose";
const StorePage = ({ club }) => {
  const imgs = ["/jcp.png", "/bol.png", "/pet.png", "/prudenta.jpg"];
  const person_imgs = [
    {
      img: "/person1.jpg",
      name: "Ameya",
      position: "President",
    },
    {
      img: "/person2.jpg",
      name: "Ishaan",
      position: "Vice President",
    },
    {
      img: "/person3.jpg",
      name: "Sujeeth",
      position: "Secretary",
    },
    {
      img: "/person4.jpg",
      name: "Sidharth",
      position: "Co-Secretary",
    },
  ];

  const data = [
    {
      id: "1",
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id: "2",
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id: "3",
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id: "4",
      question:
        "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

  const topic = club;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const intervalDuration = 3000;

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <>
      <Navbar />
      <div className="mx-auto">
        <div className="my-5">
          {topic.includes("music") ? (
            <>
              <div className="flex gap-2 justify-center text-3xl my-10">
                <CiMusicNote1 />
                <div className="tracking-wider  opacity-70 ">MUSIC CLUB</div>
                <IoMusicalNoteOutline />
              </div>
            </>
          ) : (
            <div>{}</div>
          )}
          <div className="flex flex-col md:flex-row gap-2 justify-between h-[50vh] md:[100vh] mt-10">
            <div className="changing-images w-[75vw] lg:mx-4 mx-auto">
              {/* Render the current image */}
              <img
                src={imgs[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="w-full h-[50vh] object-cover border-2 rounded-2xl "
              />
            </div>
            <div className="border-[1.25rem] border-green-950 h-[50vh] md:w-[30vw] rounded-3xl flex flex-col mx-4">
              <div className="font-light text-3xl text-center my-5 font-serif">
                DESCRIPTION
              </div>
              <hr className="m-[5%]" />
              <div className="p-[3%] ">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum porro esse necessitatibus obcaecati consequatur qui
                  tempora officiis, libero ab, accusamus numquam repudiandae,
                  molestiae aliquid ipsa!
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 md:mt-[0vh] mt-[50vh] mx-6">
          <div className=" tracking-widest  text-3xl my-5 opacity-70">
            MEET THE BOARD
          </div>
          <div className="flex-wrap justify-between items-center mt-4 md:flex-row flex flex-col gap-2">
            {person_imgs.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl  h-[50vh] w-[20rem] border-[0.5rem] border-teal-600 "
              >
                <div className=" h-4/5 ">
                  <img
                    src={item.img}
                    alt={`Person ${index + 1}`}
                    className="w-full h-full object-cover rounded-t "
                  />
                </div>
                <div className="  bg-green-950 text-white p-2 text-center h-1/5">
                  {/* Add person name and position here */}
                  <p>{item.name}</p>
                  <p className="text-teal-600">{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex-row flex flex-col">
          <div className="flex flex-col w-1/2 gap-8">
            <div>
              <div className="font-light text-3xl text-center my-5 font-serif tracking-wider   opacity-70">
                UPCOMING EVENTS
              </div>
              <div className="md:flex-row flex flex-col  gap-9 mx-6">
                <div className="p-3 h- md:w-1/2 w-[90vw]  bg-green-950 text-white border-4 border-teal-500 rounded-xl flex flex-col ">
                  <div className="items-center mb-4 text-3xl text-center font-serif ">
                    BeatBox Battle
                  </div>
                  <p className="font-light mb-3 font-serif ">
                    Experience the electrifying clash of vocal rhythms and beats
                    in a fierce and entertaining Beatbox Battle!
                  </p>
                  <p className="font-extralight italic">Date: 24/03/24</p>
                  <p className="font-extralight italic">Time: 6pm onwards</p>
                  <p className="font-extralight italic">Venue: Foodys</p>
                </div>
                <div className="p-3 md:h-[20rem] md:w-1/2 w-[90vw]  bg-green-950 text-white border-4 border-teal-500 rounded-xl flex flex-col ">
                  <div className="items-center  mb-4 text-3xl text-center ">
                    Melody Mixer
                  </div>
                  <p className="font-light mb-3 font-serif ">
                    Immerse yourself in a night of cultural celebration and
                    artistic brilliance at our Flagship Cultural Night
                  </p>
                  <p className="font-extralight italic">Date: 26/03/24</p>
                  <p className="font-extralight italic">Time: 4pm onwards</p>
                  <p className="font-extralight italic">Venue: KC Lawn</p>
                </div>
              </div>
            </div>
            <div className="font-light text-3xl text-center my-5 font-serif tracking-wider   opacity-70">
              FLAGSHIP EVENTS
            </div>

            <div className="md:flex-row flex flex-col  gap-9">
              <div className="p-3 h- md:w-1/2 w-[90vw] mx-6  bg-green-950 text-white border-4 border-teal-500 rounded-xl flex flex-col ">
                <div className="items-center mb-4 text-3xl text-center font-serif ">
                  BeatBox Battle
                </div>
                <img className="h-[12rem] object-cover" src="/Flag-1.jpeg" />
                <p className="font-light font-2xl font-serif  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae tenetur culpa accusantium ad corrupti? Deserunt
                  modi molestias illum quaerat numquam?
                </p>
              </div>
              <div className="p-3  md:w-1/2 w-[90vw] bg-green-950 text-white border-4 border-teal-500 rounded-xl flex flex-col ">
                <div className="items-center  mb-4 text-3xl text-center font-serif ">
                  Melody Mixer
                </div>
                <img className="h-[12rem] object-cover" src="/Flag-2.jpeg" />
                <p className="font-light font-2xl font-serif ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae tenetur culpa accusantium ad corrupti? Deserunt
                  modi molestias illum quaerat numquam?
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 w-1/2 text-center flex flex-col justify-between mx-auto ">
            <div className=" mb-4 text-3xl font-mono tracking-wider mx-auto">FAQs</div>
            <div className="flex justify-center  gap-10">
              <div className="w-96">
                {data && data.length > 0 ? (
                  data.map((dataItem) => (
                    <div className="mb-5" key={dataItem.id}>
                      <div
                        onClick={() => handleSingleSelection(dataItem.id)}
                        className="flex justify-between items-center cursor-pointer bg-gray-200 px-4 py-2 rounded"
                      >
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                      </div>
                      {selected === dataItem.id && (
                        <div className="bg-gray-100 p-4">{dataItem.answer}</div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center">No data found</div>
                )}
              </div>
            </div>

            <div className=" mb-4 text-3xl font-mono tracking-wider ">
              CONTACT US
            </div>
            <div className="flex justify-center">
              <div className="py-10 px-5 md:h-[20rem]  md:w-1/2  w-[90vw] bg-[#25363e] rounded-xl border-4 border-teal-500  ">
                <div className="flex flex-col rounded-xl bg-[#b1dbe1] justify-center gap-2 p-6">
                  <div className="tracking-wider text-xl">
                    Reach out to us at:
                  </div>
                  <div className="tracking-wider text-xl flex gap-3 justify-center">
                    <CiInstagram className="text-3xl" />
                    <div>@musicclubvit</div>
                  </div>
                  <div className="tracking-wider text-xl flex gap-3 justify-center">
                    <CiFacebook className="text-3xl" />
                    <div>Music club VIT</div>
                  </div>
                  <div className="tracking-wider text-xl flex gap-3 justify-center">
                    <CiMail className="text-3xl" />
                    <div>musicclubv@vit.ac.in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // if (!mongoose.connections[0].readyState) {
  //   await mongoose.connect(process.env.MONGO_URI);
  // }
  // let user = await User.findOne({ _id: context.query.slug });
  return {
    props: {
      club: context.query.slug,
    }, // will be passed to the page component as props
  };
}

export default StorePage;
