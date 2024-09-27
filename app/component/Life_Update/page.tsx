// components/Changelog.tsx
import React from 'react';

const updates = [
  {
    year: '2024',
    items: [
      {
        title: 'Started working on MLOps Projects 🚀',
        description: 'Dived into MLOps, mastering tools like MLflow, ZenML, and orchestrating models for seamless deployment. Worked with data pipelines, versioning, and production-level model management.',
      },
      {
        title: 'Built a Stroke Detection AI 🧠',
        description: 'Created an healthcare project focused on stroke detection using machine learning models, improving accuracy in early diagnosis.',
      },
      
    ],
  },
  {
    year: '2023',
    items: [
      {
        title: 'Developed a Landing Page for FinTech Startups 💼',
        description: 'Worked as a freelance FullStack Developer with fintech startups to enhance user experiences on landing pages and streamline backend workflows. Leveraged technologies like Next.js, Node.js, and PostgreSQL.',
      },
      {
        title: 'Developed Custom Video Editor 🎬',
        description: 'Created a custom video editor for as a passion project , enabling efficient year-end video wrap-ups. Technologies used: Next.js, Node.js, PostgreSQL, and Remotion.',
      },
      {
        title: 'Developed AI Portfolio Generator 📂',
        description: 'Built an AI-powered portfolio generator that crafts personalized portfolios for job seekers in tech, (Wrapper Project) used: React, Node.js and OpenAI API for dynamic content code generation.',
      },
    ],
  },
  {
    year: '2022',
    items: [
      {
        title: 'Embarking on My Full-Time Coding Journey 💻',
        description: 'Committed to pursuing software development full-time, I transitioned into coding, dedicating myself to mastering key technologies and building impactful projects. With a focus on full-stack development',
      },
      {
        title: 'Enhanced Learning for EdTech Companies ✨',
        description: 'As a Motion Designer & Editor, created engaging educational content and animations that captivated audiences, improving the learning experience for EdTech companies.',
      },
    ],
  },
  {
    year: '2021',
    items: [
      {
        title: 'Motion Graphics & Video Editor 🎨',
        description: 'Developed high-quality animations and visual content for content creators and business owners, contributing to a diverse range of multimedia projects as a freelance Motion Graphics Designer & Animator.',
      },
    ],
  },
];


const Changelog = () => {
  return (
    <div id="experience" className="bg-neutral-900  text-white min-h-screen py-12 ">
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
