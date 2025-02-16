import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, onValue } from "firebase/database";

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
            <div className="education_container min-h-screen md:min-h-[100%] mb-4">
                <div className="educations flex flex-col justify-center items-center py-10">
                    <h1 className='text-2xl font-bold'>Education</h1>
                    <div className="line w-[130px] h-[1px] bg-white"></div>
                </div>

                {/* Skeleton Loader */}
                {loading
                    ? [...Array(educations.length || 3)].map((_, index) => (
                        <div key={index} className="flex justify-center pb-5 animate-pulse mx-3 sm:mx-10 lg:mx-0">
                            <div className="sidebar flex flex-col justify-center items-center px-2">
                                <div className="dot w-[15px] h-[15px] rounded-full bg-gray-300"></div>
                                <div className="line w-[3px] h-[65px] bg-gray-300 rounded-full"></div>
                            </div>
                            <div className="education w-[100%] lg:w-[50%] bg-[#3d3d3d] flex flex-col px-2 lg:px-5 py-2 rounded-md text-white">
                                <div className="w-16 h-4 bg-gray-300 rounded mb-2"></div>
                                <div className="w-28 h-6 bg-gray-400 rounded mb-2"></div>
                                <div className="w-36 h-4 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    ))
                    : educations.map(education => (
                        <div key={education.id} className="flex justify-center pb-5 mx-3 sm:mx-10 lg:mx-0">
                            <div className="sidebar flex flex-col justify-center items-center sm:px-1 lg:px-2">
                                <div className="dot w-[15px] h-[15px] rounded-full bg-[#d82d25]"></div>
                                <div className="line w-[3px] h-[80px] sm:h-[65px] bg-[#d82d25] rounded-full"></div>
                            </div>
                            <div className="education w-[100%] lg:w-[50%] bg-[#3d3d3d] flex flex-col px-2 lg:px-5 py-2 rounded-md text-white">
                                <h2 className='text-red-600 font-bold'>{education.year}</h2>
                                <h1 className='text-xl text-blue-400 font-bold pb-2'>{education.name}</h1>
                                <p>{education.schoolName}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Education;
