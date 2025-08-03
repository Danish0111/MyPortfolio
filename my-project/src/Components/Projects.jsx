import React from 'react'
import './Projects.css';
import { useEffect, useState } from 'react';
import { database } from '../firebase';
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { motion, scale, useScroll } from 'motion/react'

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
      <div className="projects_container mb-20 lg:my-28 lg:mb-40 flex flex-col justify-center items-center max-w-6xl mx-auto max-md:mt-20">
        <div className="myProjects flex flex-col justify-center items-center py-8 mb-10">
          <motion.h1 initial={{ opacity: 0, y: -50, scale: 0.5 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className='text-5xl font-bold uppercase'>Projects</motion.h1>
        </div>
        <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? [...Array(projects.length || 3)].map((_, index) => (
              <div key={index} className="project-skeleton flex justify-center pt-8 rounded-xl w-[90%] bg-gray-400 h-[400px] animate-pulse">

              </div>
            ))
            : projects.map((project, index) => (
              <motion.div initial={{ opacity: 0, y: index * 50 + 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} key={project.id} id={`project-${index}`} className="project border-white rounded-lg w-80 min-h-[390px] relative">
                <img className='mb-2' src={project.imageURL} alt="project" />
                <div className="project-title font-bold uppercase text-center text-black  pointer-events-none mb-1">{project.title}</div>
                <div className="description text-center text-sm pointer-events-none font-semibold">{project.description}</div>
                <div className="flex justify-between p-4">
                    <motion.a whileTap={{ scale: 0.9 }} className="bg-black absolute bottom-0 left-0 m-4 text-white font-bold p-2 rounded-lg hover:cursor-pointer hover:bg-white border-2 border-black hover:border-white hover:text-black" target="_blank" href={project.code}>Source Code</motion.a>
                    <motion.a whileTap={{ scale: 0.9 }} className="border-2 absolute bottom-0 right-0 m-4 border-black text-center p-2 rounded-lg font-bold hover:cursor-pointer hover:border-white hover:bg-white hover:text-black" target="_blank" href={project.demo}>Demo</motion.a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
  )
}

export default Projects
