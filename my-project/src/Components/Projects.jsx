import React from 'react'
import './Projects.css';
import { useEffect, useState } from 'react';
import { database } from '../firebase';
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import {motion, scale, useScroll} from 'motion/react'

const Projects = () => {
  const db = database;
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const projectsRef = ref(db, "Projects");
    const unsubscribe = onValue(projectsRef, (snapshot) => {
      console.log(snapshot.val());
      const data = snapshot.val();
      const projectsArray = data ? Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })) : [];
      setProjects(projectsArray);
      setLoading(false)
    })
    return () => unsubscribe();
  }, [])

  const handleMouseMove = (e, index) => {
    const projectCard = document.getElementById(`project-${index}`);
    if (projectCard) {
      const rect = projectCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      projectCard.style.setProperty('--mouse-x', `${x}px`);
      projectCard.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div>
      <div className="projects_container min-h-screen lg:min-h-[100%] mb-20 lg:mb-0 lg:my-28 flex flex-col justify-center items-center">
        <div className="myProjects flex flex-col justify-center items-center py-8">
          <motion.h1 initial={{opacity: 0, y: 50}} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }} transition={{duration: 1}} className='text-5xl font-bold uppercase'>Projects</motion.h1>
        </div>
        <div className="projects w-[90%] lg:w-[80%] m-5 grid md:grid-cols-2 gap-y-8 lg:grid-cols-3 place-items-center">
          {loading
            ? [...Array(projects.length || 3)].map((_, index) => (
              <div key={index} className="project-skeleton flex justify-center pt-8 rounded-xl w-[90%] bg-gray-400 h-[400px] animate-pulse">

              </div>
            ))
            : projects.map((project, index) => (
              <motion.div initial={{opacity: 0, y: index*30+100}} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }} transition={{duration: 1}} key={project.id} id={`project-${index}`} className="project w-[90%]  border-white p-5"  >
                <div className="img pb-2">
                  <img className='rounded-xl' src={project.imageURL} alt="project" />
                </div>
                <div className="project-title text-lg font-bold uppercase text-center text-black  pointer-events-none mb-2">{project.title}</div>
                <div className="description text-center text-sm mb-2 pointer-events-none font-semibold">{project.description}</div>
                <div className="links flex justify-between">
                  <motion.span whileTap={{scale: 0.9}} className="code bg-white text-black font-bold p-2 rounded-lg hover:cursor-pointer hover:bg-black border-2 border-black hover:text-white">
                    <a target="_blank" href={project.code}>Source Code</a>
                  </motion.span>
                  <motion.span whileTap={{scale: 0.9}} className="demo border-2 border-black text-center p-2 rounded-lg font-bold hover:cursor-pointer hover:border-white hover:bg-white hover:text-black">
                  <a target="_blank" href={project.demo}>Demo</a>
                  </motion.span>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
