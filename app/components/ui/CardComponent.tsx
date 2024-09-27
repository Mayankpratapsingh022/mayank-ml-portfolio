"use client"; // This ensures the component runs on the client side
import { useRouter } from "next/navigation"; // Updated for Next.js 13+
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"; // Assuming you have this from Shadcn

// TypeScript interface for props
interface CardComponentProps {
  title: string;
  paragraph: string;
  techStack: string[]; // Array of technologies (badges)
  viewUrl: string; // URL to redirect when clicking "View"
  githubUrl: string; // URL for GitHub link
  imageSrc: string; // URL for the card image
}

export function CardComponent({ title, paragraph, techStack, viewUrl, githubUrl, imageSrc }: CardComponentProps) {
  const router = useRouter();

  // Redirect to the view page when the "View" button is clicked
  const handleViewClick = () => {
    router.push(viewUrl);
  };

  return (
    <div className="">
      <Card className="lg:w-96 w-[20rem] my-6 bg-neutral-800 shadow-sm border-none">
        <CardHeader className="relative border-none">
          <div className="relative h-56 overflow-hidden text-white rounded-md">
            <Image
              src={imageSrc} // Use the imageSrc prop here
              alt="card-image"
              fill
              className="rounded-md border-none object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-2xl text-neutral-100 font-semibold mb-2">{title}</CardTitle>
          <CardDescription className="text-neutral-200 lg:text-base sm:text-sm leading-normal font-light">
            {paragraph}
          </CardDescription>

          <div className="p-2 my-2 flex gap-2 flex-wrap">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-[#873afa] text-white  hover:bg-[#a061ff]  "
              >

                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 mt-2 border-none">
          <div className="flex justify-between w-full">
            {/* View Button redirects to the provided URL */}
            <Button className="border-none" onClick={handleViewClick}>
              View
            </Button>

            {/* GitHub Link */}
            <Link href={githubUrl} className="flex items-center" legacyBehavior passHref>
              <a target="_blank" rel="noopener noreferrer">
                <p className="text-neutral-300 px-5 underline hover:decoration-neutral-100 flex items-center space-x-2">
                  <span>GitHub</span>
                  <FiArrowRight className="" />
                </p>
              </a>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
