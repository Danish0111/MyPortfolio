import React from 'react'
import { useEffect, useState } from 'react';
import { database } from '../firebase';
import { getDatabase, ref, onValue, get, child } from "firebase/database";

const Education = () => {
    const db = database;
    const [educations, setEducations] = useState([])

    useEffect(() => {
        get(child(ref(db), "Educations")).then(snapshot => {
            console.log(snapshot.val());
            const data = snapshot.val();
            const educationsArray = data ? Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            })) : [];
            setEducations(educationsArray);
        });
    }, [])
    return (
        <>
            <div className="educations flex flex-col justify-center items-center py-10">
                <h1 className='text-2xl font-bold'>Education</h1>
                <div className="line w-[130px] h-[1px] bg-white"></div>
            </div>
            {educations.map(education => (
                <div key={education.id} className="flex justify-center pb-5">
                    <div className="sidebar flex flex-col justify-center items-center px-2">
                        <div className="dot w-[15px] h-[15px] rounded-full bg-[#d82d25]"></div>
                        <div className="line w-[3px] h-[65px] bg-[#d82d25] rounded-full"></div>
                    </div>
                    <div className="education w-[40vw] bg-[#3d3d3d] flex flex-col  px-5 py-2 rounded-md text-white">
                        <h2 className='text-red-600 font-bold'>{education.year}</h2>
                        <h1 className='text-xl text-blue-400 font-bold pb-2'>{education.name}</h1>
                        <p><span className=''>{education.schoolName}</span></p>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem repellendus voluptate officiis nisi. Eligendi veniam laboriosam qui maiores aspernatur, ex provident ab.</p> */}
                    </div>
                </div>
            ))}

        </>
    )
}

export default Education
