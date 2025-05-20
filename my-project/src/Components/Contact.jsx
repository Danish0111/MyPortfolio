import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import contact from '../assets/contact.png'
import { motion } from 'motion/react'

const Contact = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [submited, setSubmited] = useState(false);
    const [alert, setAlert] = useState(false);
    const messageRef = useRef();

    const onSubmit = async (data) => {
        console.log(data)
        const emailData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        }
        try {
            const response = await fetch("https://danish-portfolio.up.railway.app/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(emailData)
            })
            let result = await response.json()
            if (result.success == true) {
                setSubmited(true)
                reset();
            }
            console.log(result)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        console.log(submited);
    }, [submited]);

    useEffect(() => {
        if (submited) {
            const timer = setTimeout(() => {
                const messageElement = messageRef.current;
                if (messageElement) {
                    messageElement.classList.add('shake-out');
                }
                setTimeout(()=> setSubmited(false), 300)
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submited]);

    return (
        <>
            {submited && (
                <div ref={messageRef} className="message fixed top-[-80px] right-0 flex justify-self-center justify-center items-center gap-4 my-40 bg-gray-700 z-50 md:w-[40%] lg:w-[25%] p-4">
                    <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"></path></svg>
                    <h1 className='text-sm font-semibold text-gray-300 text-center'>Message sent successfully</h1>
                    <button onClick={() => setSubmited(false)} type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    <div className='line absolute w-full h-1 bg-[var(--main-color)] bottom-0'></div>
                </div>
            )}
            <div className='flex flex-col justify-center items-center h-[100%] mb-8 lg:my-10'>
                <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='text-4xl md:text-5xl font-bold flex lg:block gap-2 uppercase my-4 md:my-8'><span>Contact</span> <span className='text-[var(--main-color)]'>me</span></motion.h1>
                <motion.div initial={{ opacity: 0, y: 100, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1 }} className="contact w-[90%] px-5 lg:px-0 lg:w-[70%] bg-gray-800 rounded-xl  lg:gap-8">

                    <div className="form w-[100%] lg:w-[100%] lg:py-4 rounded-xl text-white font-semibold">
                        <form onSubmit={handleSubmit(onSubmit)} className=''>
                            <div className="flex flex-col md:flex-row justify-center gap-5 w-full px-0 py-5 lg:p-10">
                                <div className="flex flex-col items-center gap-5 w-full">
                                    {/* Name Field */}
                                    <div className="flex w-full flex-col gap-2">
                                        <div className="relative flex flex-col items-start">

                                            <input
                                                className="w-full bg-transparent p-4 rounded-xl border-2 outline-none transition-all focus:border-[var(--main-color)] text-sm font-light border-white"
                                                placeholder="Your name"
                                                type="text"
                                                {...register("name", {
                                                    required: "*Name is required",
                                                    minLength: {
                                                        value: 3,
                                                        message: "*Name must be at least 3 characters"
                                                    }
                                                })}
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="flex flex-col gap-2 w-full">
                                        {/* <label className="font-semibold text-medium" htmlFor="email">Email:</label> */}
                                        <div className="relative flex flex-col items-start">

                                            <input
                                                className="w-full bg-transparent p-4 rounded-xl border-2 outline-none transition-all focus:border-[var(--main-color)] text-sm font-light border-white"
                                                placeholder="Email Address"
                                                type="email"
                                                {...register("email", {
                                                    required: "*Email is required",
                                                })}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    {/* Phone Field */}
                                    <div className="flex flex-col gap-2 w-full">
                                        {/* <label className="font-semibold text-medium" htmlFor="phone">Phone Number:</label> */}
                                        <div className="relative flex flex-col items-start">

                                            <input
                                                className="w-full bg-transparent p-4 rounded-xl border-2 outline-none transition-all focus:border-[var(--main-color)] text-sm font-light border-white"
                                                placeholder="Phone number"
                                                type="number"
                                                {...register("phone", {
                                                    minLength: {
                                                        value: 10,
                                                        message: "*Phone no. must contain 10 digits."
                                                    }
                                                })}
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                        </div>
                                    </div>
                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="submit hidden md:block  bg-[var(--main-color)] text-black font-bold py-2 rounded-xl w-full"
                                    >
                                        Submit
                                    </button>
                                </div>

                                <div className="w-full">
                                    {/* Message Field */}
                                    <div className="flex flex-col gap-2 w-full">
                                        <textarea
                                            className="w-full h-[210px] bg-transparent p-2 outline-none transition-all focus:border-[var(--main-color)] text-sm font-light border-2 rounded-lg   border-white"
                                            placeholder="Your message"
                                            {...register("message", {
                                                required: "*Message is required"
                                            })}
                                        />
                                        {errors.message && <p className="text-red-500 text-xs mt-1 ">{errors.message.message}</p>}
                                    </div>
                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="submit md:hidden bg-[var(--main-color)] text-black font-bold my-4 py-2 rounded-xl w-full"
                                    >
                                        Submit
                                    </button>
                                    <div className="flex gap-2 justify-start items-center md:py-4">
                                        <div className="contact_info flex flex-col gap-1 text-sm font-medium">
                                            <div className="phone flex items-center gap-1">
                                                <FontAwesomeIcon icon={faPhone} color='var(--main-color)' />
                                                <span>+91 8527801978</span>
                                            </div>
                                            <div className="email flex items-center gap-2">
                                                <FontAwesomeIcon icon={faEnvelope} color='var(--main-color)' />
                                                <span>danish150106@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Contact
