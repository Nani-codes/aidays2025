import React from "react";
import { Button } from "../ui/button";
import Navbar from "./navbar";
import Link from "next/link";
import Image from "next/image";

import mainIcon from "../../public/images/AI Icon.svg";
import horizontal from "../../public/2025.png";

import bgImage from "../../public/images/hereo_bg.jpg";
import RegisterButton from "components/RegisterButton";

export default function HeaderSection() {
  return (
    <div
      className="bg-[#e6f7ff] bg-cover pb-10 pt-12"
      style={
        {
          // backgroundImage: `url(${bgImage.src})`,
        }
      }
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl  font-black uppercase text-gray-900 md:tracking-[0.3em]">
            India&apos;s Largest AI Conference
          </h2>
          <Image
            alt="AI Days"
            className="mx-auto my-10 w-[700px] text-blue-600"
            src={horizontal.src}
            width={700}
            height={20}
          />
          {/* <h1 className="text-6xl font-bold text-blue-800">AI DAYS 2024</h1> */}
          {/* <p className="mt-2 text-2xl text-gray-800">AI For Society</p> */}
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-0 md:space-x-10">
            <p className="text-lg text-gray-700">📆 08 - 09 February 2025</p>
            <p className="text-lg text-gray-700">
              Come learn and celebrate with us!
            </p>
            {/* <RegisterButton /> */}

            <div className="flex justify-center space-x-10">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-800">02</p>
                <p className="text-sm uppercase tracking-wide text-gray-600">
                  Days
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-800">60+</p>
                <p className="text-sm uppercase tracking-wide text-gray-600">
                  Speakers
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-800">2000+</p>
                <p className="text-sm uppercase tracking-wide text-gray-600">
                  Delegates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
