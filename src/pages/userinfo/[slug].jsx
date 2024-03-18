import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import User from "../../../Models/User";
import mongoose from "mongoose";


const Userinfo = ({user}) => {
  const [name, setName] = useState();
  const [regno, setRegno] = useState();
  const [desc, setDesc] = useState();
 

  const handleOnSubmit = ()=>{
    
  }
  return (
    <>
      <Navbar />
      <div className="mx-auto bg-slate-200 h-[100vh] p-10">
        <div className="bg-white w-fit md:w-[50vw] h-[80vh] rounded-xl p-4 lg:p-6 mx-auto">
          <h1 className="text-center w-fit mx-auto text-xl lg:text-2xl font-light">
            Profile
          </h1>
          <form onSubmit={handleOnSubmit} className="grid place-content-center">
            <label htmlFor="name" className="text-blue-400 mt-4">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              // value={name}
              className="border border-black px-2 py-1 rounded-sm "
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder={`${user.name}`}
            />
            <label htmlFor="regno" className="text-blue-400 mt-4">
              Registration Number
            </label>
            <input
              type="text"
              id="regno"
              name="regno"
              // value={regno}
              className="border border-black px-2 py-1 rounded-sm"
              onChange={(e) => {
                setRegno(e.target.value);
              }}
              placeholder={`22BCI1000`}
            />

            <label htmlFor="email" className="text-blue-400 mt-4">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-black px-2 py-1 rounded-sm cursor-not-allowed text-base text-slate-700"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={`${user.email}`}
              disabled
              readOnly
            />

            <label htmlFor="desc" className="text-blue-400 mt-4">
              Description
            </label>

            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="5"
              className="border border-black rounded-md mb-4"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600  px-3 mt-4 mx-auto rounded-md text-white"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let user = await User.findOne({ _id: context.query.slug });
  return {
    
    props: {
      user:JSON.parse(JSON.stringify(user))
    }, // will be passed to the page component as props
  };
}

export default Userinfo;
