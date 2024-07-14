import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {

    const handleLink = (link) => {
        console.log(link);
        window.open(link, '_blank');
    }

    const handleGitLink = (gitHub) => {
        console.log(gitHub);
        window.open(gitHub, '_blank');
    }

    return (
        <div className="border-b border-neutral-900 pb-4 px-4 md:px-8 lg:px-16">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-3xl sm:text-4xl"
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div className="mb-8 flex flex-col lg:flex-row lg:justify-center" key={index}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-8"
                        >
                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                        key={techIndex}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap">
                                <button onClick={() => handleLink(project.link)} className="mr-4 mt-2 p-2 text-blue-500 underline">
                                    Visit Project
                                </button>
                                <button onClick={() => handleGitLink(project.gitHub)} className="mt-2 p-2 text-blue-500 underline">
                                    Visit Git Repo
                                </button>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
