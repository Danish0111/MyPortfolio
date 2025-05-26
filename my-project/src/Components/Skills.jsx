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
          <motion.h1 initial={{opacity: 0, scale: 0.5, y: -100}} whileInView={{ opacity: 1, scale: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}} className='text-5xl font-bold uppercase'>My Skills</motion.h1>
          {/* <div className="line w-[110px] h-[1px] bg-white"></div> */}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 gap-x-0 py-2 mx-0 sm:mx-10 lg:mx-16 justify-items-center'>
          {loading
            ? [...Array(skills.length || 10)].map((_, index) => (
              <div key={index} className="skillCard w-32 sm:w-36 flex flex-col justify-center items-center gap-2 h-40 bg-[#3b3b3bee] animate-pulse rounded-xl shadow-xl p-4">
                <span className=''></span>
                <span className=''></span>
              </div>
            ))
            : skills.map(skill => (
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
