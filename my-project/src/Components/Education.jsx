import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, onValue } from "firebase/database";
import './Education.css'
import {motion} from 'motion/react'

const Education = () => {
    const db = database;
    const [educations, setEducations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const educationRef = ref(db, "Educations");
        const unsubscribe = onValue(educationRef, (snapshot) => {
            const data = snapshot.val();
            const educationsArray = data ? Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            })) : [];
            setEducations(educationsArray);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <div className="education_container min-h-screen md:min-h-[100%] mb-10 lg:mb-4 lg:my-20 flex flex-col justify-center items-center">
                <div className="educations flex flex-col justify-center items-center py-10">
                    <motion.h1 initial={{opacity: 0, scale: 0.5, y: -100}} whileInView={{ opacity: 1, scale: 1, y: 0}} viewport={{once: true}} transition={{duration: 1.5}} className='text-5xl font-bold uppercase'>Education</motion.h1>
                </div>

                {/* Skeleton Loader */}
                {loading
                    ? (<div className="timeline-items relative w-[80%] max-w-5xl mx-auto animate-pulse">
                        <div className="timeline-line-skeleton bg-gray-600" />
                        {[...Array(educations.length || 3)].map((_, index) => (
                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="content-skeleton text-white p-5 rounded-3xl bg-gray-600">
                                    <h2 className="text-lg font-bold "></h2>
                                    <p className="text-sm"></p>
                                </div>
                                <span className="dot-skeleton bg-gray-600" />
                                <span className='duration-skeleton text-white font-bold bg-gray-600 w-[15%] h-[30px] rounded-xl'></span>
                            </div>
                        ))}
                    </div>
                    )
                    : (
                        <div className="timeline-items relative w-[80%] max-w-5xl mx-auto">
                            <div className="timeline-line" />
                            {educations.map((education, index) => (
                                <motion.div initial={{opacity: 0, scale: 0.8, y: 100}} whileInView={{ opacity: 1, scale: 1, y: 0}}  transition={{duration: 1}}  key={education.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                    <div className="content text-white p-5 rounded-3xl border-2 border-[var(--main-color)]">
                                        <h2 className="text-lg font-bold">{education.name}</h2>
                                        <p className="text-sm">{education.schoolName}</p>
                                    </div>
                                    <span className="dot" />
                                    <span className='duration text-white font-bold'>{education.year}</span>
                                </motion.div>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    );

}

export default Education;
