import React from "react";
import { useRouter } from "next/router";
import { FaCircleArrowRight } from "react-icons/fa6";
const PastEvents = () => {
  const router = useRouter();
  const handleViewAll = () => {
    router.push("/allpastevents");
  };
  return (
    <div className="mx-5 mb-8 mt-10">
      <div className="flex justify-between">
        <div className="text-3xl m-5 text-black font-semibold  z-50 ">
          Past Events
        </div>
        <div
          onClick={handleViewAll}
          className="text-3xl m-5 flex gap-2 hover:underline hover:cursor-pointer"
        >
          <span href="/allpastevents" className="text-2xl">View All</span>
          <FaCircleArrowRight />
        </div>
      </div>

      <hr className="w-[95vw] mx-auto" />

      <div className="flex flex-col gap-3 my-8">
        <div className="flex h-[20rem] border-2 rounded-xl">
          <div className="w-[90vw]">
            <img
              className="w-full h-full object-cover border-l-2 rounded-l-xl"
              src="/jcpl.jpg"
            />
          </div>
          <div className="gap-1 p-3 hidden md:flex md:flex-col">
            <div className="text-2xl font-semibold italic">
              Juvenile Care Premiere League
            </div>
            <div>Juvenil Care</div>
            <div className="font-light text-slate-500">29-02-2024</div>
            <div className="font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium distinctio laborum consequuntur maxime nihil
              doloremque fugit adipisci molestiae, illo eum eius quis nisi ex
              quidem explicabo animi consequatur dolor similique aliquam.
              Debitis laudantium repellendus ullam laboriosam. Commodi quasi
              aliquid id tempore fugit possimus totam quam, nemo quis voluptates
              facere nam minus, aperiam iusto. Incidunt reiciendis saepe facilis
              expedita quisquam dignissimos nisi?
            </div>
          </div>
        </div>
        <div className="flex h-[20rem]  border-2 rounded-xl">
          <div className="w-[90vw]">
            <img
              className="w-full h-full object-cover border-l-2 rounded-l-xl"
              src="/bolt.jpg"
            />
          </div>
          <div className="gap-1 p-3 hidden md:flex md:flex-col">
            <div className="text-2xl font-semibold italic">Bolt 2.0</div>
            <div>IEEE</div>
            <div className="font-light text-slate-500">
              19/02/2024 - 20/02/24
            </div>
            <div className="font-serif">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et atque
              ad voluptatem iure, voluptatum illo fugit iusto aliquid hic autem
              temporibus perferendis. Accusantium quas voluptas magnam adipisci
              ipsam ullam impedit assumenda excepturi maiores dicta unde,
              repellat cum quisquam incidunt, voluptates nihil sapiente quam
              quibusdam asperiores pariatur at aliquam, quod ipsum? Dicta earum
              nostrum ratione. Nesciunt libero, facilis animi ea corrupti
              dolore, quae earum aliquid deleniti, enim laudantium eligendi nam
              nobis molestiae dolorum sit!
            </div>
          </div>
        </div>
        <div className="flex h-[20rem]  border-2 rounded-xl ">
          <div className="w-[90vw] md:w-[100%]">
            <img
              className="w-full h-full object-cover border-l-2 rounded-l-xl"
              src="/technica.jpg"
            />
          </div>

          <div className="gap-1 p-3 hidden md:flex md:flex-col">
            <div className="text-2xl font-semibold italic">Technica</div>
            <div>ISTE</div>
            <div className="font-light text-slate-500">
              14/03/2024 - 16/03/2024
            </div>
            <div className="font-serif">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              blanditiis nobis sapiente iure minus vel cumque ut reprehenderit
              aperiam, magnam sit molestias animi quo error est in obcaecati
              dolorum adipisci optio voluptatem laborum labore eum facere quod!
              Doloremque atque eum facilis distinctio pariatur aliquid? Natus
              culpa ab facilis explicabo praesentium perspiciatis sint rerum
              tempore iusto. Molestias perspiciatis minima debitis laborum fugit
              ipsa iste dolorum quas, nihil cumque molestiae sequi assumenda
              exercitationem fuga necessitatibus facere!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
