import React from "react";
import Link from "next/link";
import { FloatingDockDemo } from "../floating-dock/page";

const ProfileCard: React.FC = () => {
  return (
    <div id='home' className="relative flex md:pt-32 pt-12 flex-col w-full text-balance min-w-0 mb-6 break-words bg-clip-border rounded-2xl bg-light/30 draggable">
      {/* card body */}
      <div className="pt-9 flex-auto min-h-20 pb-0 bg-transparent">
        {/* Apply flex-row-reverse for large displays */}
        <div className="flex flex-wrap mb-6 xl:flex-nowrap lg:flex-row-reverse">
          <div className="mb-5 mr-5 lg:ml-5 lg:mr-0">
            <div className="relative inline-block shrink-0 rounded-2xl">
              <img
                className="inline-block shrink-0 rounded-2xl w-32 h-32 md:w-32 md:h-32 lg:w-36 lg:h-36"
                src="/profile.jpg"
                alt="Profile"
              />
            </div>
          </div>
          <div className="grow">
            <div className="flex flex-wrap items-start justify-between mb-2">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <h1 className="text-secondary-inverse  font-semibold lg:text-5xl text-3xl  mr-1">
                    Mayank Pratap Singh
                  </h1>
                </div>
                <p className="text-neutral-300 text-2xl md:text-3xl font-semibold mt-4">ML Engineer</p>
                <p className="text-neutral-400 text:xl  md:text-2xl mt-4">
                  I specialize in optimizing models and deploying AI-driven <br/> solutions for <b className="text-neutral-300">real-world </b>impact.
                  <br/>
     
                </p>
                <div className="flex"> <FloatingDockDemo/> </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
