import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Clubs = () => {
  const imgs = [
    "/devsoc.jpg",
    "/sae.jpg",
    "/design_odyssey.jpg",
    "/codejencture.jpg",
    "/wirelesswonder.jpg",
    "/prudenta.jpg",
    "/technoquarrel.jpg",
    "/blogathon.jpg",
    "/petroquest.jpg",
  ];
  return (
    <>
      <Navbar />
      <div className="my-10">
        <Marquee pauseOnHover speed={150}>
          <div className="flex flex-row">
            {imgs.map((item) => {
              return (
                <div
                  key={`${item}`}
                  className="mx-4 rounded-xl overflow-hidden border border-black"
                >
                  <Dialog>
                    <DialogTrigger>
                      {" "}
                      <img
                        src={`${item}`}
                        alt={`${item}`}
                        className="h-48 object-cover"
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <img
                        src={`${item}`}
                        alt={`${item}`}
                        className="h-70 object-cover"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Clubs;
