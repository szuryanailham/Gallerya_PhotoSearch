import React, { useEffect, useRef, useState } from "react";
import logo from "./img/logo.png";
import photoHome from "./img/natural.jpg";
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { FaBoxOpen, FaCamera } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsTranslate } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import CardPhoto from "./Component/CardPhoto";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdNotifications } from "react-icons/io";

// import CardPhoto from "./Component/CardPhoto";
const App = () => {
  //  Variable untuk membuat slide menu
  const [sidebarActive, SetsidebarActive] = useState(false);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [aktif, setAktif] = useState(false);

  const hamburgerRef = useRef(null);
  const sidebarRef = useRef(null);

  const handleClick = (e) => {
    if (e.target.id !== "sidebar" && e.target.id !== "hamburger") {
      SetsidebarActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [sidebarActive]);

  const toggleSidebar = () => {
    SetsidebarActive(true);
  };

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const sidebar = sidebarRef.current;
    if (sidebarActive) {
      hamburger.classList.add("hamburger-active");
      sidebar.classList.add("sidebar-active");
    } else {
      hamburger.classList.remove("hamburger-active");
      sidebar.classList.remove("sidebar-active");
    }
  }, [sidebarActive]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 10,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  // mengambil isi input dari user....
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(input);
    setAktif(true);
  };
  return (
    <>
      {/* SideBar Element ....... */}
      <nav
        id="sidebar"
        ref={sidebarRef}
        className="bg-white max-w-[250px] w-full h-[531px] fixed z-[9999] top-1 shadow-lg rounded-lg -right-[250px] md:h-[300px]
      "
      >
        <ul className="block">
          {/* item komponen ------ LI  */}
          <li className="group">
            <a href="#home" className="text-base text-dark py-2 mx-8 flex">
              <div className="w-full flex justify-start items-center text-xl py-2">
                {/* logo */}
                <AiFillHome />
                {/* teks */}
                <h2 className="pl-5 text-sm">Home</h2>
              </div>
            </a>
          </li>
          {/* akhir  item komponen ------ LI  */}
          {/* item komponen ------ LI  */}
          <li className="group">
            <a href="#home" className="text-base text-dark py-2 mx-8 flex">
              <div className="w-full flex justify-start items-center text-xl py-2">
                {/* logo */}
                <FaBoxOpen />
                {/* teks */}
                <h2 className="pl-5 text-sm">Product</h2>
              </div>
            </a>
          </li>
          {/* akhir  item komponen ------ LI  */}
          {/* item komponen ------ LI  */}
          <li className="group">
            <a href="#home" className="text-base text-dark py-2 mx-8 flex">
              <div className="w-full flex justify-start items-center text-xl py-2">
                {/* logo */}
                <AiFillInfoCircle />
                {/* teks */}
                <h2 className="pl-5 text-sm">About Us</h2>
              </div>
            </a>
          </li>
          {/* akhir  item komponen ------ LI  */}
          {/* item komponen ------ LI  */}
          <li className="group">
            <a href="#home" className="text-base text-dark py-2 mx-8 flex">
              <div className="w-full flex justify-start items-center text-xl py-2">
                {/* logo */}
                <AiTwotoneSetting />
                {/* teks */}
                <h2 className="pl-5 text-sm">Settings</h2>
              </div>
            </a>
          </li>
          {/* akhir  item komponen ------ LI  */}
          {/* item komponen ------ LI  */}
          <li className="group">
            <a href="#home" className="text-base text-dark py-2 mx-8 flex">
              <div className="w-full flex justify-start items-center text-xl py-2">
                {/* logo */}
                <BsTranslate />
                {/* teks */}
                <h2 className="pl-5 text-sm">Language</h2>
              </div>
            </a>
          </li>
          {/* akhir  item komponen ------ LI  */}
          {/* item komponen ------ LI  */}
          <li className="group mt-[220px] border border-t-black md:hidden ">
            <a href="#home" className="text-base text-dark py-2 mx-8 flex">
              <div className="w-full flex justify-start items-center text-xl py-2">
                {/* logo */}
                <BsPersonCircle />
                {/* teks */}
                <h2 className="pl-5 text-sm">ilham Suryana</h2>
              </div>
            </a>
          </li>
          {/* akhir  item komponen ------ LI  */}
        </ul>
      </nav>
      {/* Akhir SideBar Element ....... */}

      <header className=" w-full h-[89px] bg-navbarColor box-border overflow-hidden">
        <div className="w-contentNavbar pt-2 flex justify-between box-border relative lg:justify-between">
          {/* logo */}
          <a href="coba.com" className="px-2">
            <img src={logo} alt="logo" />
          </a>
          {/* input */}
          <div className=" w-[75%] h-7 md:w-[60%] md:mr-[30px] lg:w-[50%]">
            <form action="submit">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute border-r-2 inset-y-0 left-0 flex items-center pl-2 pr-1">
                  <button onClick={handleSubmit}>
                    <FiSearch />
                  </button>
                </span>
                <input
                  className="  text-sm h-7 placeholder:text-[10px] md:placeholder:text-[10px]  placeholder:italic placeholder:text-slate-400 md:placeholder:text-base  block bg-white w-full border border-slate-300 rounded-lg py-0.5 pl-9  shadow-sm focus:outline-none"
                  placeholder="Search your photo......"
                  type="text"
                  name="search"
                  value={input}
                  onChange={handleInputChange}
                />
              </label>
            </form>
          </div>
          <div className="w-[150px] mr-[60px] hidden md:flex md:justify-between lg:w-[350px]  lg:-mr-[80px] lg:justify-between">
            <BsPersonCircle className="text-colortext text-[25px] lg:text-[20px]" />
            <FaCamera className="text-colortext text-[20px] lg:text-[20px]" />
            <IoMdNotifications className="text-colortext text-[25px] lg:text-[20px]" />
            <button className="text-colortext font-light hidden lg:block lg:text-sm">Blog</button>
            <button className="text-colortext font-light hidden lg:block lg:text-sm">Advertise</button>
            <button className="text-colortext font-light hidden lg:block lg:text-sm">Gallerya++</button>
          </div>

          {/* Humberger Navbar */}
          <div className="flex item-center px-5 lg:mr-40 ">
            <button onClick={toggleSidebar} ref={hamburgerRef} id="hamburger" name="hamburger" className=" block absolute right-2 md:right-10 md top-1 ">
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>
        {/* Slide chategory */}
        <div className=" mt-4 w-full h-8  text-colortext text-[12px] ">
          <Slider {...settings} className="box-border mx-auto md:pl-2 md:text-[13px]">
            <div>
              <h3 className="ml-3 md:ml-0">Nature</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Beauty</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Bisnis</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Education</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Fashion</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Health</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Holidays</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Industry</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">People</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Art</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Sports</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Technology</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Textures</h3>
            </div>
            <div>
              <h3 className="ml-3 md:ml-0">Vintage</h3>
            </div>
          </Slider>
        </div>
      </header>
      {/* landing page ............. */}
      <div className="min-w-full relative">
        <img className="w-full md:max-h-[450px] lg:max-h-[500px] " src={photoHome} alt="landing-page" />
        <div className=" p-5  md:p-1 md:mb-[120px] lg:mb-[150px] md:ml-6 absolute w-20 md:w-[500px] lg:w-[600px] bottom-2 text-white">
          <h1 className="text-[20px] font-semibold md:text-[30px] drop-shadow-md ">Gallerya</h1>
          <p className="text-[12px] font-light w-[170px] md:text-[16px] md:w-[300px] drop-shadow-md">enjoy your beauty of the world with our best photos</p>
          {/*  second input ......  */}
          <div className="py-2 ">
            <form action="submit">
              <label className="relative hidden md:block text-black">
                <span className="sr-only">Search</span>
                <span className="absolute border-r-2 inset-y-0 left-0 flex items-center pl-2 pr-1">
                  <button onClick={handleSubmit}>
                    <FiSearch />
                  </button>
                </span>
                <input
                  className="  md:mt-1 md:h-8 p-5 text-sm h-7 placeholder:text-[10px] md:placeholder:text-[10px] placeholder:italic placeholder:text-slate-400 md:placeholder:text-base  block bg-white w-full border border-slate-300 rounded-lg py-0.5 pl-9  shadow-sm focus:outline-none"
                  placeholder="Search your photo......"
                  type="text"
                  name="search"
                  onChange={handleInputChange}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      {/* akhir dari landing page ......... */}
      <CardPhoto input={search} aktif={aktif} setAktif={setAktif} />
    </>
  );
};

export default App;
