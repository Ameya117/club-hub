import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const Archive = () => {

  const data = [
    {
        id: '1',
        clubName: 'Juvenile Care',
        eventName: 'Juvenile Care Premiere League',
        date: '29/02/2024',
        imgSrc: "/jcp.png",
        desc: 'The Juvenile Care Outreach Event aims to foster community engagement by organizing activities focused on youth welfare, education, and empowerment. Through various initiatives, including workshops, mentorship programs, and social campaigns, the event strives to create a supportive environment for young individuals, promoting their holistic development and well-being.'
    },

    {
        id: '2',
        clubName: 'IEEE',
        eventName: 'Bolt 2.0',
        date: '19/02/2024 - 20/02/24',
        imgSrc: "/bol.png",
        desc: 'IEEE Bolt Hackathon ignites innovation with its immersive tech challenge. Fueled by passion and expertise, participants converge to solve real-world problems, pushing the boundaries of technology. Through collaboration and ingenuity, the event cultivates a vibrant ecosystem where creativity flourishes, ideas collide, and groundbreaking solutions emerge, shaping the future of technology.'
    },

    {
        id: '3',
        clubName: 'ISTE',
        eventName: 'Technica',
        date: '14/03/2024 - 16/03/2024',
        imgSrc: "/tec.png",
        desc: 'The ISTEs Technica event stands as a beacon of technological exploration, inspiring innovation and fostering collaboration among enthusiasts. With a diverse array of workshops, competitions, and talks, it creates a dynamic platform for learning and experimentation. Participants delve into cutting-edge technologies, unlocking new possibilities and gaining invaluable insights to navigate the ever-evolving landscape of technology.'
    },

    {
        id: '4',
        clubName: 'Code Chef',
        eventName: 'Devsoc',
        date: '17/03/2024 - 19/03/2024',
        imgSrc: "/dev.png",
        desc: 'The Code Chef DevSoc initiative empowers aspiring programmers to refine their skills and tackle real-world challenges. Through interactive workshops, coding competitions, and mentorship programs, it cultivates a vibrant community of developers. Participants engage in collaborative projects, share knowledge, and push the boundaries of innovation, fostering a culture of continuous learning and growth.'
    },

    {
        id: '5',
        clubName: 'Pixelate',
        eventName: 'Design Odessey',
        date: '21/03/2024 - 22/03/2024',
        imgSrc: "/des.png",
        desc: 'Pixelate s Design Odyssey offers a creative journey, where enthusiasts explore the art of pixel art and digital design. Through workshops, challenges, and showcases, participants delve into various design techniques, from pixel art basics to advanced digital creations. It fosters a supportive community, inspiring collaboration, experimentation, and artistic expression in the realm of digital design.'
    },

    {
        id: '6',
        clubName: 'SAE',
        eventName: 'Grand Prix',
        date: '18/03/2024',
        imgSrc: "/gra.png",
        desc: 'SAE s Grand Prix event epitomizes speed, innovation, and engineering excellence. It s a thrilling showcase where automotive enthusiasts push the limits of engineering, designing, and racing. From concept cars to high-performance vehicles, teams compete in a dynamic environment, demonstrating cutting-edge technology and precision engineering. It s a celebration of automotive ingenuity, passion, and relentless pursuit of speed.'
    },

    {
        id: '7',
        clubName: 'Quiz Club',
        eventName: 'Code Jencture',
        date: 'TBD',
        imgSrc: "/cod.png",
        desc: 'Quiz Club s Code Juncture event combines the thrill of coding with the excitement of competition. Participants delve into a series of challenging coding puzzles and trivia questions, testing their programming skills and knowledge. With each code snippet decoded and each quiz question answered, contestants embark on a journey of learning and problem-solving, aiming to emerge victorious.'
    },

    {
        id: '8',
        clubName: 'VARC',
        eventName: 'Wireless Wonder',
        date: '20/03/2024',
        imgSrc: "/wir.png",
        desc: 'VARC s  Wireless Wonder  event explores the marvels of wireless technology, unraveling its intricacies and applications. From the evolution of wireless communication to the latest advancements in the field, participants delve into a fascinating journey of discovery. Through workshops, demonstrations, and discussions, attendees gain insights into the transformative power of wireless innovations, igniting their curiosity and creativity.'
    },

    {
        id: '9',
        clubName: 'Innovation & Creation Club',
        eventName: 'Techno Quarrel',
        date: '21/03/2024',
        imgSrc: "/tech.png",
        desc: 'The Techno Quarrel event, hosted by the Innovation & Creation Club, ignites passionate debates and discussions on technological innovations. Participants delve into the realm of cutting-edge technology, exploring its impact on society, economy, and culture. Through interactive sessions and brainstorming activities, attendees foster creativity and collaboration, driving forward the spirit of innovation in the digital age.'
    },

    {
        id: '10',
        clubName: 'SPE',
        eventName: 'Petro Quest',
        date: '17/03/2024',
        imgSrc: "/pet.png",
        desc: 'The Petro Quest event, organized by SPE (Society of Petroleum Engineers), delves into the exploration and extraction of petroleum resources. Participants engage in discussions and workshops focusing on the latest technologies and practices in the oil and gas industry. Through hands-on activities and expert insights, attendees gain valuable knowledge and insights into the dynamic world of energy exploration and production.'
    },
]

  return (
    <>
    <Navbar />
    <div className="mx-5">
      <div className="text-3xl m-5 text-black font-semibold">
        Event Archives
      </div>
      <hr />
      <div className="flex flex-wrap gap-x-6 gap-y-10 justify-center h-screen mt-10">
        {data.map((dataItem) => 
          <div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          key={dataItem.id}          >
            <div className="border-2 rounded-xl overflow-hidden h-full transition-transform duration-300 transform hover:scale-110">
              <img
                className="w-full h-48 object-cover"
                src={dataItem.imgSrc}
                alt={dataItem.eventName}
                />
              <div className="p-3 bg-white">
                <div className="text-2xl font-semibold italic">
                  {dataItem.eventName}
                </div>
                <div>{dataItem.clubName}</div>
                <div className="font-light text-slate-500">{dataItem.date}</div>
                <div>{dataItem.desc}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
        </>
  );
};

export default Archive;
