// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { IoBagOutline } from "react-icons/io5";
// import { VscAccount } from "react-icons/vsc";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { SideBar } from "./Sidebar";
import "../css/app.css";

export const Navbar = () => {
  // const navigate = useNavigate();
  // const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed flex justify-between items-center z-[100] w-screen py-5 font-serif text-black bg-white top-0 left-0 transition duration-300">
        <div className="flex ms-10 ">
          <img src="/Logo.png"></img>
          <ul className="flex items-center resp:mt-5 resp:flex-col">
            <li className="my-2.5">Home</li>
            <li className="my-2.5">Products</li>
            <li className="my-2.5">Resources</li>
            <li className="my-2.5">Pricing</li>
          </ul>
        </div>
        <ul className="flex items-center resp:mt-5 resp:flex-col">
          <li className="my-2.5">
            <button className="w-40 hover:bg-cyan-300 dark:hover:bg-cyan-300 transition duration-300 dark:hover:text-white text-xl p-2 text-white dark:text-black ml-6 hover:text-black bg-black dark:bg-white rounded-full resp:dark:bg-gray-100 resp:m-0 resp:border resp:border-gray-400 resp:dark:hover:text-gray-black resp:dark:hover:bg-gray-200">
              Login
            </button>
          </li>
          <li className="my-2.5">
            <button className="hover:bg-cyan-300 dark:hover:bg-cyan-300 transition duration-300 dark:hover:text-white hover:text-black w-40 text-xl p-2 text-white dark:text-black rounded-full bg-black dark:bg-white ml-4 resp:dark:bg-gray-100 resp:m-0 resp:border resp:border-gray-400 resp:dark:hover:text-gray-black resp:dark:hover:bg-gray-200">
              Signup
            </button>
          </li>
        </ul>
    </header>
  );
};
