"use client";
import React from "react";
import {IoHomeOutline} from "react-icons/io5";
import Image from "next/image";
import house from "../../public/house.png";
import project from "../../public/project.png";
import about from "../../public/help.png";
import resume from "../../public/resume.png";
import List from "./List";
export default function Sidebar() {
  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="h-screen">
      <div className="h-full">
        <ul className="p-4 w-1/6 bg-[#1e2124] h-full flex-col  ">
        <List img={house} name="Home"/>
            <List img={project} name="Projects"/>
            <List img={about} name="About"/>
            <List img={resume} name="Resume"/>
        </ul>
      </div>
    </div>
  );
}




{/* <button><GiExpand className="border-white"/></button> */}
{/* <RxResume className="w-8 h-8 m-2"/> */}
{/* <FcAbout className="w-8 h-8 m-2" /> */}
{/* <AiOutlineHome className="w-8 h-8 m-2"/> */}
{/* <AiOutlineFundProjectionScreen className="w-8 h-8 m-2"/> */}