import React from 'react'
import './Projects.css';
import { useEffect, useState } from 'react';
import { database } from '../firebase';
import { getDatabase, ref, onValue, get, child } from "firebase/database";

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
  return (
    <>
      <div className="projects_container min-h-screen lg:min-h-[100%] mb-20 lg:mb-0">
        <div className="myProjects flex flex-col justify-center items-center py-10">
          <h1 className='text-2xl font-bold'>Projects</h1>
          <div className="line w-[110px] h-[1px] bg-white"></div>
        </div>
        <div className="projects w-[90%] lg:w-[80%] m-5 grid lg:grid-cols-2 place-self-center gap-20">
          {loading
            ? [...Array(projects.length || 4)].map((_, index) => (
              <div key={index} className="project w-[100%] animate-pulse">
                <div className="img pb-2 bg-gray-300 h-60 md:h-72 lg:h-60 rounded-lg"></div>
                <div className="project-title bg-gray-300 h-6 w-3/4 my-2 rounded"></div>
                <div className="description bg-gray-300 h-4 w-full my-2 rounded"></div>
                <div className="links flex justify-between py-4">
                  <span className="bg-gray-300 h-10 w-24 rounded"></span>
                  <span className="bg-gray-300 h-10 w-16 rounded"></span>
                </div>
              </div>
            ))
            : projects.map((project) => (
              <div key={project.id} className="project w-[100%]">
                <div className="img pb-2">
                  <img className='' src={project.imageURL} alt="project" />
                </div>
                <div className="project-title text-xl text-[#d82d25]">{project.title}</div>
                <div className="description text-justify lg:text-left">{project.description}</div>
                <div className="links flex justify-between py-4">
                  <span className="code bg-[#d82d25] text-white font-bold p-2 rounded-lg hover:cursor-pointer">
                    <a href={project.code}>Source Code</a>
                  </span>
                  <span className="border-2 border-[#d82d25] text-center p-2 rounded-lg font-bold hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-[#d82d25] to-[#ff6347] hover:text-white hover:shadow-[0_4px_15px_rgba(216,45,37,0.5)]">
                    Demo
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Projects
