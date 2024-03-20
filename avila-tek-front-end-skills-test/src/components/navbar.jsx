import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-[100] w-screen py-5 font-serif text-black bg-white top-0 left-0">
      <div className="resp:hidden flex justify-between items-center">
        <div className="flex gap-10 ms-32">
          <img src="/Logo.png" className="w-40 h-10 mt-1 cursor-pointer"></img>
          <ul className="flex gap-10 items-center resp:mt-5 resp:flex-col">
            <li className="my-2.5 hover:text-[#714dbe] transition duration-300 cursor-pointer font-normal">
              Home
            </li>
            <li className="my-2.5 hover:text-[#714dbe] transition duration-300 cursor-pointer font-normal">
              Products
            </li>
            <li className="my-2.5 hover:text-[#714dbe] transition duration-300 cursor-pointer font-normal">
              Resources
            </li>
            <li className="my-2.5 hover:text-[#714dbe] transition duration-300 cursor-pointer font-normal">
              Pricing
            </li>
          </ul>
        </div>
        <div className="flex gap-10 me-36">
          <button className="font-semibold hover:text-[#714dbe] transition duration-300 rounded-xl py-3 px-5">
            Log in
          </button>
          <button className="bg-[#7F56D9] hover:bg-[#714dbe] transition duration-300 text-white rounded-xl py-3 px-5 ">
            Sign up
          </button>
        </div>
      </div>
      <div className="hidden resp:block resp:flex resp:justify-between resp:items-center resp:mx-7">
        <img src="/Logo.png" className="w-40 h-10 cursor-pointer"></img>
        <RxHamburgerMenu
          className="text-2xl"
          onClick={() => {
            setIsOpen(true);
          }}
        />
        <div
          className={
            "resp:fixed resp:top-0 resp:left-0 resp:w-full resp:h-screen resp:bg-[rgba(0,0,0,0.5)]" +
            " " +
            (isOpen ? "resp:block" : "hidden")
          }
          id="back__menu"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
        <nav
          className={
            "navbar-home mr-4 lg:mr-16  resp:bg-white resp:m-0 resp:fixed resp:w-60 resp:h-screen resp:top-0 resp:p-7 resp:z-10" +
            " " +
            (isOpen ? "resp:right-0" : "resp:-right-60")
          }
        >
          <img src="/Logo.png" className="w-40 h-10 mt-1 cursor-pointer"></img>

          <ul className="flex items-center resp:mt-5 resp:flex-col">
            <li
              className="my-2.5 hover:text-[#714dbe] transition duration-300 cursor-pointer font-normal"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </li>
            <li
              className="my-2.5 hover:text-[#714dbe] transition duration-300 cursor-pointer font-normal"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Products
            </li>
            <li
              className="my-2.5 hover:text-[#714dbe] transition duration-300 cursor-pointer font-normal"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Resources
            </li>
            <li
              className="my-2.5 hover:text-[#714dbe] transition duration-300 cursor-pointer font-normal"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Pricing
            </li>
          </ul>
          <div className="flex flex-col justify-center gap-5 mt-5">
            <button className="font-semibold border border-neutral-200 hover:text-[#714dbe] transition duration-300 rounded-xl py-3 px-5">
              Log in
            </button>
            <button className="bg-[#7F56D9] hover:bg-[#714dbe] transition duration-300 text-white rounded-xl py-3 px-5 ">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
