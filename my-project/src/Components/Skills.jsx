import React, { useEffect, useState } from 'react';
import './Skills.css';
import { database } from '../firebase';
import { ref, onValue } from "firebase/database";
import ProgressBar from "@ramonak/react-progress-bar";
import ProgressProvider from './ProgressProvider';
import {motion, scale, useScroll} from 'motion/react'

const Skills = () => {
  const db = database;
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const skillsRef = ref(db, "Skills");

    const unsubscribe = onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      const skillsArray = data ? Object.keys(data).map(id => ({
        id,
        ...data[id]
      })) : [];
      setSkills(skillsArray);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="skills_container h-full mb-24 lg:mb-0 lg:min-h-[100%] flex flex-col justify-center">
        <div className="myskills flex flex-col justify-center items-center mt-10 my-8 sm:py-10 sm:mt-0">
          <motion.h1 initial={{opacity: 0, scale: 0.5, y: -100}} whileInView={{ opacity: 1, scale: 1, y: 0}}  transition={{duration: 1}} className='text-5xl font-bold uppercase'>My Skills</motion.h1>
          {/* <div className="line w-[110px] h-[1px] bg-white"></div> */}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 gap-x-0 py-2 mx-0 sm:mx-10 lg:mx-16 justify-items-center'>
          {loading
            ? [...Array(skills.length || 7)].map((_, index) => (
              <div key={index} className="skill flex flex-col gap-2 justify-center items-center animate-pulse">
                <div className='w-[80%] flex justify-center gap-3'>
                  <div className='w-12 h-10 rounded-full bg-gray-300'></div>
                  <div className="flex flex-col gap-2 w-[100%]">
                    <div className="flex justify-between">
                      <span className='w-16 h-4 bg-gray-300 rounded'></span>
                      <span className='w-10 h-4 bg-gray-300 rounded'></span>
                    </div>
                    <div className="w-full h-2 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            ))
            : skills.map(skill => (
              // <motion.div initial={{scale: 0.5, y: -100, opacity: 0}} whileInView={{scale: 1, opacity: 1, y: 0}} transition={{duration: 1}} key={skill.id} className="skill flex justify-center items-center">
              //   <div className='w-[90%] lg:w-[80%] flex justify-center gap-3'>
              //     <span className=''><img className='w-14 hover:scale-110 transition-all duration-[0.3s]' src={skill.imageURL} alt={skill.name} /></span>
              //     <ProgressProvider valueStart={0} valueEnd={skill.percentage}>
              //       {(value) => (
              //         <div className="flex flex-col w-[100%]">
              //           <div className="flex justify-between">
              //             <span>{skill.name}</span>
              //             <span>{skill.percentage}%</span>
              //           </div>
              //           <ProgressBar className='w-[100%] text-sm custom-progress' labelClassName="label" completed={value} height="10px" bgColor='var(--main-color)' baseBgColor='#646464' />
              //         </div>
              //       )}
              //     </ProgressProvider>
              //   </div>
              // </motion.div>
              <motion.div initial={{scale: 0.5, y: -100, opacity: 0}} whileHover={{scale: 1.14}} whileInView={{scale: 1, opacity: 1, y: 0}} transition={{duration: 1}} key={skill.id} className="skillCard w-32 sm:w-36 flex flex-col justify-center items-center gap-2 bg-[#121213ee] rounded-xl shadow-xl p-4">
                <motion.img whileHover={{scale: 1.02}} src={skill.imageURL} alt="" />
                <span className='font-bold'>{skill.name}</span>
              </motion.div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Skills;
