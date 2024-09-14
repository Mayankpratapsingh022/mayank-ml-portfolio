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
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full  text-neutral-200 dark:text-neutral-900" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
  


    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex  justify-center py-5">
      <FloatingDock
      
        items={links}
      />
    </div>
  );
}
