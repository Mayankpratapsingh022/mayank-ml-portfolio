'use client'
import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  
} from "@tabler/icons-react";
import { SiLinkedin,SiInstagram,SiYoutube  } from 'react-icons/si';
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "https://x.com/Mayank_022",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "https://github.com/Mayankpratapsingh022",
    },
    {   title: "LinkedIn",
      icon: (
          <SiLinkedin className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/mayankpratapsingh022/",},
      {
        title: "Instagram",
        icon: (
            <SiInstagram className="h-full w-full text-neutral-200 dark:text-neutral-300" />
        ),
        href: "https://www.instagram.com/mayankpratapsingh_022/",
    },
    {
      title: "YouTube",
      icon: (
          <SiYoutube className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "https://www.youtube.com/@mayankpratapsingh022",
  }
  ];
  return (
    <div className="flex  justify-center py-5">
      <FloatingDock
      
        items={links}
      />
    </div>
  );
}
