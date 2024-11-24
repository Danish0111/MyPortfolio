import React, { useEffect, useState } from 'react';
import './Skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';
import { database } from '../firebase';
import { getDatabase, ref, onValue, get, child } from "firebase/database";

const Skills = () => {
  const percentage = 90;
  const db = database;
  const [skills, setSkills] = useState([])

  useEffect(() => {
    get(child(ref(db), "Skills")).then(snapshot => {
      console.log(snapshot.val());
      const data = snapshot.val();
      const skillsArray = data ? Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })) : [];
      setSkills(skillsArray);
    });
  }, [])


  return (
    <>
      <div className="myskills flex flex-col justify-center items-center py-10">
        <h1 className='text-2xl font-bold'>My Skills</h1>
        <div className="line w-[110px] h-[1px] bg-white"></div>
      </div>
      <div className='container py-2'>
        {skills.map(skill => (
          <div key={skill.id} className="skill flex flex-col gap-2 justify-center items-center">
            <div style={{ width: 80, height: 80 }}>
              <ProgressProvider valueStart={0} valueEnd={skill.percentage}>
                {(value) => (
                  <CircularProgressbar
                    value={value}
                    text={`${Math.round(value)}%`}
                    styles={buildStyles({
                      pathColor: "#d82d25",
                      textColor: "white",
                      trailColor: "black",
                      pathTransition: "stroke-dashoffset 0.7s ease 0s",
                    })}
                  />
                )}
              </ProgressProvider>
            </div>
            {/* <h1 className='text-xl font-bold'>HTML</h1> */}
            <img className='w-16' src={skill.imageURL} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
