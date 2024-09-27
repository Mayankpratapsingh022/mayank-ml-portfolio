import { CardComponent } from "@/app/components/ui/CardComponent";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";

const CardGrid: React.FC = () => {
  // Dummy data for multiple cards
  const cardData = [
    {
      title: "Machine Learning Algorithms From Scratch",
      paragraph: "Implemented key machine learning algorithms from scratch using Python & Numpy. This project provides a deeper understanding of algorithmic internals without relying on libraries like scikit-learn or TensorFlow.",
      techStack: ["Linear Regression", "Logistic Regression", "Support Vector Machine (SVM)", "Naive Bayes", "K-Means", "PCA"],
      viewUrl: "https://github.com/Mayankpratapsingh022/ML_from_Scratch",
      githubUrl: "https://github.com/Mayankpratapsingh022/ML_from_Scratch",
      imageSrc: "/Ml_from_S.jpg", // Add imageSrc here
    },
    {
      title: "Neural Network From Scratch",
      paragraph: "Implemented a neural network from scratch using Python and Numpy. This project explores how neural networks work at a fundamental level without relying on frameworks like TensorFlow or PyTorch.",
      techStack: ["Python", "Numpy", "Backpropagation", "Gradient Descent", "Activation Functions"],
      viewUrl: "",
      githubUrl: "",
      imageSrc: "/neutral_net.jpg", // Add imageSrc here
    },    

    {
      title: "Customer Satisfaction Prediction using ZenML",
      paragraph: "Predicted customer satisfaction scores for future orders using historical e-commerce data from the Brazilian E-Commerce Public Dataset by Olist. This project leverages multiple machine learning models like CatBoost, XGBoost, and LightGBM, built within a ZenML pipeline to create a production-ready solution.",
      techStack: [ "XGBoost", "Optuna", "ZenML", "Streamlit", "MLflow"],
      viewUrl: "",
      githubUrl: "",
      imageSrc: "/customer_pipeline.jpg", 
    }

  ];

  return (
    <>
      <h1 className="text-secondary-inverse font-semibold text-4xl mr-1">Projects</h1>
      <div id="projects" className="flex justify-center flex-wrap gap-5 py-8">
        {/* Map through cardData to render each card */}
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            paragraph={card.paragraph}
            techStack={card.techStack}
            viewUrl={card.viewUrl}
            githubUrl={card.githubUrl}
            imageSrc={card.imageSrc} // Pass imageSrc here
          />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <p className="text-secondary-inverse text-center transition-colors duration-200 ease-in-out font-light text-2xl mr-1">
          See More
        </p>
        <IoIosArrowDown className="text-2xl" />
      </div>
    </>
  );
};

export default CardGrid;
