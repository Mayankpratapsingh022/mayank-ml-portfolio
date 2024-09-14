// components/Changelog.tsx
import React from 'react';

const updates = [
  {
    year: '2024',
    items: [
      {
        title: 'Started working on MLOps Projects 🚀',
        description: 'Dived into MLOps, learning tools like MLflow, ZenML, and orchestrating models for deployment at scale.',
      },
      {
        title: 'Deployed GAN-based Image Generator 🎨',
        description: 'Built and deployed a GAN model that generates high-quality images. This project helped me explore deep learning and its generative capabilities.',
      },
      {
        title: 'Completed Machine Learning Bootcamp 🏅',
        description: 'Finished an extensive bootcamp covering linear regression, logistic regression, neural networks, and more.',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        title: 'Started learning Machine Learning 📘',
        description: 'Began my machine learning journey with a focus on linear regression, decision trees, and overfitting/underfitting concepts.',
      },
      {
        title: 'Built a Stroke Detection AI 🧠',
        description: 'Created a healthcare project focused on stroke detection using machine learning models.',
      },
      {
        title: 'First AI Research Paper Published 📝',
        description: 'Published my first research paper on the applications of deep learning in natural language processing.',
      },
      {
        title: 'Developed AI Portfolio Generator 📂',
        description: 'Built an AI-based portfolio generator that creates personalized portfolios for job seekers in tech.',
      },
    ],
  },
];

const Changelog = () => {
  return (
    <div id="contact" className="bg-neutral-900  text-white min-h-screen py-12 px-8">
  <h1 className="text-secondary-inverse font-semibold text-4xl py-5 mr-1">
  Life Changelog and Updates
                  </h1>
      {updates.map((update) => (
        <div key={update.year} className="mb-8">
          <h2 className="text-3xl font-bold mb-4 border-b border-neutral-700 pb-2">
            {update.year}
          </h2>
          {update.items.map((item, idx) => (
            <div
              key={idx}
              className="mb-4 p-4 rounded-lg bg-neutral-800 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold flex items-center space-x-2">
                {item.title}
              </h3>
              <p className="text-neutral-400">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Changelog;
