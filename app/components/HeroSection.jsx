"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'

const CV = 'https://drive.google.com/uc?export=download&id=1gevnJ5pW3rl9PBnX9Dp7avE1fnpZFXsy'
export const HeroSection = () => {
    return (
        <section>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600'>
                            Hi, I&apos;m Robert!
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Software Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Project Leader',
                                1000,
                                'Game Developer',
                                1000,
                                'Eternal Student',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
                        Software developer with over 4 years in the field, seeking opportunities to broaden my skill set, tackle fresh challenges,
                        and contribute to the creation of exceptional software.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-2 bg-gradient-to-br from-orange-600 via-yellow-600 to-red-600 hover:bg-slate-200 text-white'>
                            <Link href='/#contact' prefetch={false}>Hire Me</Link>
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-600 via-yellow-600 to-red-600 hover:bg-slate-800 text-white'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                <Link href={`${CV}`}>Download CV</Link>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/3d_emoticon.png"
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={280}
                            height={300}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
