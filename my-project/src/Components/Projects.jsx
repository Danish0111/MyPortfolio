import React from 'react'
import './Projects.css';
import { useEffect, useState } from 'react';
import { database } from '../firebase';
import { getDatabase, ref, onValue, get, child } from "firebase/database";

const Projects = () => {
  const db = database;
  const [projects, setProjects] = useState([])

  useEffect(() => {
    get(child(ref(db), "Projects")).then(snapshot => {
      console.log(snapshot.val());
      const data = snapshot.val();
      const projectsArray = data ? Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })) : [];
      setProjects(projectsArray);
    });
  }, [])
  return (
    <>
      <div className="myProjects flex flex-col justify-center items-center py-10">
        <h1 className='text-2xl font-bold'>Projects</h1>
        <div className="line w-[110px] h-[1px] bg-white"></div>
      </div>
      {projects.map((project) => (
        <div key={project.id} className="projects flex justify-center items-center">
          <div className="project">
            <div className="img">
              <img className='' src={project.imageURL} alt="project" />
              <div className="overlay">
                <div className="project-title">{project.title}</div>
                {/* <div className="project-description">{project.description}</div> */}
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  )
}

export default Projects
