import React from 'react'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [submited, setSubmited] = useState(false)
    const onSubmit = async (data) => {
        console.log(data)
        const emailData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        }
        try{
            const response = await fetch("http://localhost:5000", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(emailData)
            })
            let result = await response.json()
            if(result.success == true){
                setSubmited(true)
            }
            console.log(result)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        console.log(submited);
    }, [submited]);
    
    return (
        <>
            {submited ? (
                <div className="flex justify-center items-center my-40">
                    <h1 className='text-5xl font-bold text-red-500'>Thanks for Submiting form</h1>
                </div>
            ):
            <div className="contact w-[100%] h-[80vh] flex flex-col lg:flex-row-reverse justify-center lg:gap-8 items-center">
                <div className="flex flex-col gap-2 justify-center items-center py-10">
                    <h1 className='text-4xl md:text-5xl font-bold flex lg:block gap-2'><div>Contact</div> <div className='flex items-center'><hr className='hidden lg:block' width="100%" size="5"></hr>me</div></h1>
                    <div className="contact_info hidden lg:flex flex-col gap-2">
                        <div className="email flex items-center gap-2">
                            <FontAwesomeIcon icon={faEnvelope} color='red'/>
                            <span>danish150106@gmail.com</span>
                        </div>
                        <div className="phone flex items-center gap-2">
                            <FontAwesomeIcon icon={faPhone} color='red'/>
                            <span>+91 8527801978</span>
                        </div>
                    </div>
                </div>
                <div className="form w-full lg:w-[50%] p-8 lg:p-10 rounded-xl text-white font-semibold">
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="flex flex-col items-center gap-4">
                            {/* Name Field */}
                            <div className="flex w-full flex-col gap-2">
                                {/* <label className="font-semibold text-medium" htmlFor="name">Name:</label> */}
                                <div className="relative flex items-center">
                                    
                                    <input
                                        className="w-full bg-transparent pr-3 py-2 border-b-2 outline-none transition-all focus:border-red-500 text-sm font-light border-white"
                                        placeholder="Your name"
                                        type="text"
                                        {...register("name")}
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-2 w-full">
                                {/* <label className="font-semibold text-medium" htmlFor="email">Email:</label> */}
                                <div className="relative flex items-center">
                                    
                                    <input
                                        className="w-full bg-transparent pr-3 py-2 border-b-2 outline-none transition-all focus:border-red-500 text-sm font-light border-white"
                                        placeholder="Email Address"
                                        type="email"
                                        {...register("email")}
                                    />
                                </div>
                            </div>

                            {/* Phone Field */}
                            <div className="flex flex-col gap-2 w-full">
                                {/* <label className="font-semibold text-medium" htmlFor="phone">Phone Number:</label> */}
                                <div className="relative flex items-center">
                                    
                                    <input
                                        className="w-full bg-transparent pr-3 py-2 border-b-2 outline-none transition-all focus:border-red-500 text-sm font-light border-white"
                                        placeholder="Phone number"
                                        type="phone"
                                        {...register("phone")}
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col gap-2 w-full">
                                {/* <label className="font-semibold text-medium" htmlFor="message">Message:</label> */}
                                <textarea
                                    className="w-full bg-transparent  pr-3 py-2 border-b-2 outline-none transition-all focus:border-red-500 text-sm font-light border-white"
                                    placeholder="Your message"
                                    {...register("message")}
                                />
                            </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-red-500 text-white font-bold py-2 hover:bg-red-600 transition w-full"
                            >
                            Submit
                        </button>
                            </div>
                    </form>
                    <div className="contact_info flex lg:hidden flex-col gap-2 py-5">
                        <div className="email flex items-center gap-2">
                            <FontAwesomeIcon icon={faEnvelope} color='red'/>
                            <span>danish150106@gmail.com</span>
                        </div>
                        <div className="phone flex items-center gap-2">
                            <FontAwesomeIcon icon={faPhone} color='red'/>
                            <span>+91 8527801978</span>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Contact
