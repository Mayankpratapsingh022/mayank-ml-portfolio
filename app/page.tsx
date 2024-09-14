import Image from "next/image";
import ProfileCard from "./component/hero/page";
import CardGrid from "./component/projects/page";
import Changelog from "./component/Life_Update/page";
import Header from "./component/header";

export default function Home() {
  return (
    <>
    
   

    <div className="flex justify-center   h-full bg-neutral-900">
      
      <Header/>
   <div className="lg:w-3/5  px-12  w-full">
   <ProfileCard/>
   <hr className=" border-neutral-500 my-16 border-4"/>
   <CardGrid/>
   <hr className=" border-neutral-500 my-16 border-4"/>
   <Changelog/>
   </div>
    </div>
    </>
  );
}
