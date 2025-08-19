import React from 'react'
import paragraphs from "/src/data/about.json"


const About = () => {
  return (
    <div className=" flex flex-col-reverse md:grid grid-cols-[70%_30%] min-h-full min-w-full p-2 gap-3">
      <div className='flex flex-col justify-center items-center text-center gap-2 flex-wrap'>
        <h1 className='text-xl md:text-4xl font-extrabold hover:text-highlight'>Sarthak Kakkar</h1>
        <p className='font-extralight text-base md:text-xl'>I am a software engineer with expertise in developing end-to-end solutions in both independent and interdisciplinary team settings. My work focuses on specialized hardware systems and AI-driven workflows. I independently developed a system certified for medical research on humans and am a published author at the International Conference on Learning Representations (ICLR).</p>
      </div>
      <div className="w-48 h-48 md:w-72 md:h-72 overflow-hidden rounded-full mx-auto">
        <img
          src="/src/assets/about_img_rect.jpg"
          alt="Me"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
</div>

  )
}

export default About;
