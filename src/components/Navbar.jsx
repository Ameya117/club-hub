import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { Toaster, toast } from "sonner";

const Navbar = () => {
  const [userId, setUserId] = useState();
  const [token,setToken] = useState();
  useEffect(() => {
    setUserId(localStorage.getItem('userid'));
    setToken(localStorage.getItem('token'));
  }, []);
  const router = useRouter();
  const [icon, setIcon] = useState("bars");
  const [dropdown, setDropdown] = useState();
  const [selected, setSelected] = useState(false);
  const handleIcon = () => {
    icon === "bars" ? setIcon("close") : setIcon("bars");
  };
  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  // });

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    toast.success("logged out");
    setTimeout(function () {
      router.push("/login");
    }, 1000);
  };

  return (
    <nav className={`sticky top-0 bg-white z-10`}>
      <Toaster richColors position="top-right" duration={2000} />
      <div className={`h-16 shadow-md flex flex-row justify-between z-50`}>
        <Link
          href="/"
          className="my-auto hover:cursor-pointer ml-4 relative h-12"
        >
          <img src="/Logo.png" alt="logo" className="h-full" />
        </Link>

        <div className="my-auto cursor-pointer">
          <h1
            onClick={() => {
              router.push("/");
            }}
            className="leading-8"
          >
            <img  className="h-12" src="/clubhub.png" alt="clubhub" />
          </h1>
        </div>

        <div className="text-xl flex">
          {token && (
          <span
            className="text-3xl my-auto h-fit cursor-pointer"
            // onClick={toggleDropdown}
          >
            <RiArrowDropDownLine
              onMouseOver={() => {
                setDropdown(true);
              }}
            />
          </span>
           )} 
          {dropdown && localStorage.getItem('token') && ( 
            <div
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
              className="absolute top-16 bg-white shadow-lg border py-2 w-40 right-2 rounded-lg my-1"
            >
              <ul className="text-sm font-semibold text-center">
                <li className="hover:bg-slate-100 cursor-pointer">
                  <span className="px-1">
                    <Link href={`/userinfo/${userId}`}>My account</Link>
                  </span>
                </li>

                <li className="hover:bg-slate-100 cursor-pointer my-1">
                  <span className="px-1">
                    <button onClick={handleLogout} href="/orders">
                      Logout
                    </button>
                  </span>
                </li>
              </ul>
            </div>
          )}
          <Link href={"/login"} className={`my-auto mx-2 text-2xl`}>
            <FaUserCircle />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
