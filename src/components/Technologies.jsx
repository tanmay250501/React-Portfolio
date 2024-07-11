import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { DiJavascript1 } from 'react-icons/di'; 

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-3">
            <SiMongodb className="text-5xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-3">
            <SiExpress className="text-5xl text-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-3">
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-3">
            <FaNodeJs className="text-5xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-3">
            <DiJavascript1 className="text-5xl text-yellow-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-3">
            <BsGithub className="text-5xl text-400" />
          </div>

        </div>
    </div>
  )
}

export default Technologies