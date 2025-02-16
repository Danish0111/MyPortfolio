import React, { useEffect, useState } from 'react';
import './Skills.css';
import { database } from '../firebase';
import { ref, onValue } from "firebase/database";
import ProgressBar from "@ramonak/react-progress-bar";
import ProgressProvider from './ProgressProvider';

const Skills = () => {
  const db = database;
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="skills_container min-h-screen mb-5 lg:mb-0 lg:min-h-[100%]">
        <div className="myskills flex flex-col justify-center items-center py-10">
          <h1 className='text-2xl font-bold'>My Skills</h1>
          <div className="line w-[110px] h-[1px] bg-white"></div>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 gap-x-0 py-2 mx-0 sm:mx-10 lg:mx-14'>
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
              <div key={skill.id} className="skill flex justify-center items-center">
                <div className='w-[90%] lg:w-[80%] flex justify-center gap-3'>
                  <img className='w-10 rounded-full' src={skill.imageURL} alt={skill.name} />
                  <ProgressProvider valueStart={0} valueEnd={skill.percentage}>
                    {(value) => (
                      <div className="flex flex-col w-[100%]">
                        <div className="flex justify-between">
                          <span>{skill.name}</span>
                          <span>{skill.percentage}%</span>
                        </div>
                        <ProgressBar className='w-[100%] text-sm custom-progress' labelClassName="label" completed={value} height="10px" bgColor='#d82d25' baseBgColor='#ffffff' />
                      </div>
                    )}
                  </ProgressProvider>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Skills;
