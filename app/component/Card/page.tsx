"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FiArrowRight } from 'react-icons/fi';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';
export function CardComponent() {
  return (
    <div className="">
      
      <Card className="lg:w-96 w-[20rem]  my-6 bg-neutral-800 shadow-sm border-none">
        <CardHeader className="relative border-none">
          <div className="relative h-56 overflow-hidden text-white rounded-md">
            <Image
              src="/image.jpg"
              alt="card-image"
              layout="fill"
              objectFit="cover"
              className="rounded-md border-none"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-2xl text-neutral-100 font-semibold mb-2">Fastag Fraud Detection Model</CardTitle>
          <CardDescription className="text-neutral-200 lg:text-lg sm:text-base leading-normal font-light">
            Developed a machine learning model specifically designed to detect fraudulent activities related to Fastag transactions in car-based scenarios, 
          </CardDescription>


          <div className="p-2 my-2 flex gap-2 flex-wrap">

          <span className="inline-flex items-center  gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">MLOps</span>
          <span className="inline-flex items-center  gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">StreamLit</span>

          <span className="inline-flex items-center  gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">MLFlow</span>
          <span className="inline-flex items-center  gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">ZenML</span>
          <span className="inline-flex items-center  gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">Linear Regression</span>

          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 mt-2 border-none">
          <div className="flex justify-between w-full">
          <Button className="border-none">View</Button>

        <Link href="https://github.com/your-github-username" className="flex items-center" legacyBehavior  passHref >
        <a   target="_blank"
          rel="noopener noreferrer"> <p className="text-neutral-300 px-5 underline hover:decoration-neutral-100 flex items-center space-x-2">
    <span>Github</span>
    <FiArrowRight className="" />
  </p></a>
</Link>


</div>

        </CardFooter>
      </Card>


      
    </div>
  );
}
