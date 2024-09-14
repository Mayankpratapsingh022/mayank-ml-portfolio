import { CardComponent } from "../Card/page";
import { IoIosArrowDown } from "react-icons/io";


const CardGrid: React.FC = () => {


  return (
    <>
     <h1 className="text-secondary-inverse font-semibold text-4xl  mr-1">
                    Projects
                  </h1>
    <div id='projects' className="flex justify-center flex-wrap gap-5 py-8">
        
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>
   <CardComponent/>

 
    </div>

    <div className="flex justify-center items-center ">
    <p className="text-secondary-inverse text-center  transition-colors duration-200 ease-in-out font-light text-2xl  mr-1">
                    See More
                  </p>  <IoIosArrowDown className="text-2xl" /></div>
    </>
  );
};

export default CardGrid;
