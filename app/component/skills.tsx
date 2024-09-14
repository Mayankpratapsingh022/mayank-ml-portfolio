"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Import icons from react-icons
import { 
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiGit, SiPython, 
    SiTensorflow, SiBlender, SiAdobephotoshop, SiBootstrap, SiCplusplus, SiMongodb, SiMysql, 
    SiNextdotjs, SiOpencv, SiPandas, SiPostgresql, SiAdobeillustrator, SiAdobeaftereffects, SiFigma 
} from 'react-icons/si';

const SectionHeading = ({ children }: any) => (
  <h2 className="text-3xl font-bold mb-12">{children}</h2>
);

export default function Skills() {
    // Skills data list containing the name, icon component, and stack
  
const skillsData = [
    // Web Technology Stack
    {
        name: 'HTML',
        icon: <SiHtml5 />,
        stack: 'Web Technology',
    },
    {
        name: 'CSS',
        icon: <SiCss3 />,
        stack: 'Web Technology',
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript />,
        stack: 'Web Technology',
    },
    {
        name: 'React',
        icon: <SiReact />,
        stack: 'Web Technology',
    },
    {
        name: 'Node.js',
        icon: <SiNodedotjs />,
        stack: 'Web Technology',
    },
    {
        name: 'Tailwind',
        icon: <SiTailwindcss />,
        stack: 'Web Technology',
    },
    {
        name: 'Git',
        icon: <SiGit />,
        stack: 'Web Technology',
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs />,
        stack: 'Web Technology',
    },
    {
        name: 'Bootstrap',
        icon: <SiBootstrap />,
        stack: 'Web Technology',
    },
    {
        name: 'C++',
        icon: <SiCplusplus />,
        stack: 'Web Technology',
    },

    // ML Stack
    {
        name: 'Python',
        icon: <SiPython />,
        stack: 'ML',
    },
    {
        name: 'TensorFlow',
        icon: <SiTensorflow />,
        stack: 'ML',
    },
    {
        name: 'OpenCV',
        icon: <SiOpencv />,
        stack: 'ML',
    },
    {
        name: 'Pandas',
        icon: <SiPandas />,
        stack: 'ML',
    },

    // Database Stack
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
        stack: 'Database',
    },
    {
        name: 'MySQL',
        icon: <SiMysql />,
        stack: 'Database',
    },
    {
        name: 'PostgreSQL',
        icon: <SiPostgresql />,
        stack: 'Database',
    },

    // Miscellaneous Stack
    {
        name: 'Blender',
        icon: <SiBlender />,
        stack: 'Miscellaneous',
    },
    {
        name: 'Photoshop',
        icon: <SiAdobephotoshop />,
        stack: 'Miscellaneous',
    },
    {
        name: 'Adobe Illustrator',
        icon: <SiAdobeillustrator />,
        stack: 'Miscellaneous',
    },
    {
        name: 'After Effects',
        icon: <SiAdobeaftereffects />,
        stack: 'Miscellaneous',
    },
    {
        name: 'Figma',
        icon: <SiFigma />,
        stack: 'Miscellaneous',
    },
];

    // Animation variants for fading in each skill item
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            }
        }),
    };

    // Filter skills by stack
    const filterByStack = (stack: string) => {
        return skillsData.filter(skill => skill.stack === stack);
    };

    return (
        <section id="skills" className="mb-28  flex justify-center flex-col   scroll-mt-28 sm:mb-40">
            <h1 className="text-secondary-inverse font-semibold text-4xl py-5 mb-5 mr-1">Tech Stack</h1>


       {/* ML Stack */}

       <div className='flex m-5 justify-center'>
            <Image
                            src='/stats.svg'
                            alt='web'
                            width={24} // Adjust size according to emoji size
                            height={24}
                            className="mr-2" // Add margin to space between icon and text
                        /></div>

        
            <ul className="flex flex-wrap p-5 justify-center gap-6 text-lg text-gray-100">
                {filterByStack('ML').map((skill, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        className="inline-flex items-center gap-x-1s py-1.5 px-3 rounded-lg text-xs font-medium bg-neutral-800 text-gray-100 shadow-sm dark:bg-neutral-700 dark:text-white"
                    >
                        <span className="text-2xl mr-2">{skill.icon}</span>
                        <span className="text-gray-100 font-medium">{skill.name}</span>
                    </motion.li>
                ))}
            </ul>
            {/* Web Technology Stack */}
            <div className='flex m-5 justify-center'>
            <Image
                            src='/web.svg'
                            alt='web'
                            width={24} // Adjust size according to emoji size
                            height={24}
                            className="mr-2" // Add margin to space between icon and text
                        /> </div>
              
            <ul className="flex flex-wrap p-5  justify-center gap-6 text-lg text-gray-100">
                {filterByStack('Web Technology').map((skill, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        className="inline-flex items-center gap-x-1s py-1.5 px-3 rounded-lg text-xs font-medium bg-neutral-800 text-gray-100 shadow-sm dark:bg-neutral-700 dark:text-white"
                    >
                        <span className="text-2xl mr-2">{skill.icon}</span>
                        <span className="text-gray-100 font-medium">{skill.name}</span>
                    </motion.li>
                ))}
            </ul>

     

            {/* Miscellaneous Stack */}
            <div className='flex m-5 justify-center'>
            <Image
                            src='/tools.svg'
                            alt='web'
                            width={21} // Adjust size according to emoji size
                            height={21}
                            className="mr-2" // Add margin to space between icon and text
                        /></div>

            <div className='flex justify-center border-neutral-500'>
          </div>
            <ul className="flex flex-wrap p-5  justify-center gap-6 text-lg text-gray-100">
                {filterByStack('Miscellaneous').map((skill, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        className="inline-flex items-center gap-x-1s py-1.5 px-3 rounded-lg text-xs font-medium bg-neutral-800 text-gray-100 shadow-sm dark:bg-neutral-700 dark:text-white"
                    >
                        <span className="text-2xl mr-2">{skill.icon}</span>
                        <span className="text-gray-100 font-medium">{skill.name}</span>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
