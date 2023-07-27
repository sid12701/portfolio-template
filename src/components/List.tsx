"use client";
import React from "react";
import Image from "next/image";

interface Props{
    name : string;
    img: any | undefined;
}


const List = (props:Props) => {
    return(
        <li
        className=" mt-8 mx-4 text-white text-center flex w-32 justify-center  hover:scale-125 hover:border-b-2  transition ease duration-200"
      ><Image src={props.img} alt="house" className="h-10 mx-5"/>{props.name}
      </li>
    )
}

export default List;