import { projectsHeadings } from '@/public/data/projects'
import React from 'react'

const Hero = () => {
  return (
    <div className='text-center'>
      <h1 className="mt-20">{projectsHeadings.h1.title}</h1>
      <h2 className="text-gradient text-xl font-normal  mt-4">
        {projectsHeadings.h1.subTitle}
      </h2>
    </div>
  )
}

export default Hero