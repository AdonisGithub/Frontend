import React from "react";
import EcommerceHumburgerMenu from "./EcommerceHumburgermenu";
import logo_laptop from "../../assets/images/logo_laptop.png";
import logo_mobile from "../../assets/images/logo_mobile.png";

const EcommerceHeader = () => {
  return (
    <nav
      id="nav"
      className=" flex absolute top-0  z-10 w-full p-6 bg-stone-800 h-[79px] lg:h-[100px] 2xl:h-[130px] transition-[top] duration-300"
    >
      <div className="flex flex-row justify-between w-full pl-1 2xl:pl-20">
        <div className="flex flex-row justify-start w-full">
          <div className="flex items-center">
            <a href="/">
              <img
                src={logo_laptop}
                alt="logo"
                className="hidden md:flex h-[44px] w-[150px] 2xl:h-[70px] 2xl:w-[258px] mr-[30px]"
              />
              <img
                src={logo_mobile}
                alt="logo"
                className="flex md:hidden h-[52px] w-[67px]"
              />
            </a>
          </div>
          <div className="hidden lg:flex">
            <a
              href="/"
              className="flex items-center px-4 py-2 text-white hover:text-red-600 ml-2 "
            >
              About
            </a>
            <a
              href="/"
              className="flex items-center px-4 py-2 text-white  hover:text-red-600 ml-2 "
            >
              Services
            </a>
            <a
              href="/"
              className="flex items-center px-4 py-2 text-white  hover:text-red-600 ml-2 "
            >
              Events
            </a>
            <a
              href="/"
              className="flex items-center px-4 py-2 text-white  hover:text-red-600 ml-2 "
            >
              Careeres
            </a>
          </div>
        </div>
        <div className="flex flex-row xs:w-6/12 gap-5 justify-end mr-5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 35.237 35.237"
            
          >
            <g
              id="Icon_feather-search"
              data-name="Icon feather-search"
              transform="translate(-3 -3)"
            >
              <path
                id="Path_10335"
                data-name="Path 10335"
                d="M33.115,18.808A14.308,14.308,0,1,1,18.808,4.5,14.308,14.308,0,0,1,33.115,18.808Z"
                fill="none"
                stroke="#d7141d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_10336"
                data-name="Path 10336"
                d="M31.5,31.5l-6.525-6.525"
                transform="translate(4.615 4.615)"
                fill="none"
                stroke="#d7141d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </g>
          </svg>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 py-[2px] px-1 text-sm font-bold leading-none text-black transform bg-[#FFE498] rounded-full">
              4
            </span>
          </div>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="user-circle"
            className="svg-inline--fa fa-user-circle fa-w-16 ml-3"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            width={30}
          >
            <path
              fill="red"
              d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"
            ></path>
          </svg>
        </div>
        <div className="flex lg:hidden jutisfy-end gap-2">
          <EcommerceHumburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export { EcommerceHeader };
