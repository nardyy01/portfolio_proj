"use client"
import React, { useTransition, useState, useRef } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { motion, useInView } from 'framer-motion'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='flex list-disc pl-2'>
                <div>
                    <li>C#</li>
                    <li>DB2</li>
                    <li>Python</li>
                    <li>React</li>
                </div>
                <div className='ml-10'>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>Perl</li>
                    <li>Node.js</li>
                </div>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Clayton State University - Bachelor&apos;s Degree</li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript Algorithms and Data Structures</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white'>
            <motion.div
                ref={ref}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'
            >
                {/* Image and short description of what I do */}
                <div className='flex justify-center align-middle relative'>
                    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 to-transparent rounded-full h-80 w-80 blur-xl'></div>
                    <Image
                        src="/images/3d_emoticon_meditate.png"
                        alt='Mood Image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={400}
                        height={400} />
                </div>


                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p>
                        I am a versatile developer specializing in backend, game, and web development, passionate about crafting innovative projects.
                        Recognized as an adaptable team player, I thrive in collaborative environments and rapidly grasp new concepts.
                        My proficiency includes working with technologies such as C++, Perl, JavaScript, Node.js, Db2, SQL, C#, Java, among others.
                        I am dedicated to expanding my skill set and eagerly embrace new tools and technologies to enhance my capabilities.
                    </p>
                    {/* Tab buttons for select information */}
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab == 'skills'}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab == 'education'}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange('certifications')} active={tab == 'certifications'}>Certifications</TabButton>
                    </div>
                    <div className='mt-8 ml-3'>
                        {TAB_DATA.find((tabCurr) => tabCurr.id == tab).content}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default AboutSection