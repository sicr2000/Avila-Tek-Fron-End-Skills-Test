// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { IoBagOutline } from "react-icons/io5";
// import { VscAccount } from "react-icons/vsc";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { SideBar } from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import "../css/app.css";

export const Navbar = () => {
  // const navigate = useNavigate();
  // const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed flex justify-between items-center z-[100] w-screen py-5 font-serif text-black bg-white top-0 left-0">
      <div className="resp:hidden">
        <div className="flex gap-10 ms-32">
          <img src="/Logo.png" className="w-40 h-10 cursor-pointer"></img>
          <ul className="flex gap-10 items-center resp:mt-5 resp:flex-col">
            <li className="my-2.5 hover:text-violet-800 transition duration-300 cursor-pointer font-normal">
              Home
            </li>
            <li className="my-2.5 hover:text-violet-800 transition duration-300 cursor-pointer font-normal">
              Products
            </li>
            <li className="my-2.5 hover:text-violet-800 transition duration-300 cursor-pointer font-normal">
              Resources
            </li>
            <li className="my-2.5 hover:text-violet-800 transition duration-300 cursor-pointer font-normal">
              Pricing
            </li>
          </ul>
        </div>
        <div className="flex gap-10 me-36">
          <button className="font-semibold hover:text-violet-800 transition duration-300 rounded-xl py-3 px-5">
            Log in
          </button>
          <button className="bg-violet-800 hover:bg-violet-900 transition duration-300 text-white rounded-xl py-3 px-5 ">
            Sign up
          </button>
        </div>
      </div>
      <div className="hidden resp:block resp:flex resp:justify-between resp:items-center resp:w-full resp:mx-7">
        <img src="/Logo.png" className="w-40 h-10 cursor-pointer"></img>
        <RxHamburgerMenu className="text-2xl"/>
      </div>
    </header>
  );
};
