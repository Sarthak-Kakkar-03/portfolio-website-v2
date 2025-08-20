import React from 'react'
import paragraphs from "/src/data/about.json"


const About = () => {
  return (
    <div className=" flex flex-col-reverse md:grid grid-cols-[70%_30%] min-h-full min-w-full p-2 gap-3">
      <div className='flex flex-col justify-center items-center 
      gap-2 flex-wrap 
      md:shadow rounded-4xl bg-white p-5
      transition-all duration-300 ease-in-out
      transform-gpu hover:scale-[1.02] hover:translate-y-1 hover:shadow-lg
      '>
        <h1 className='text-xl md:text-6xl font-extrabold hover:text-highlight transition-colors duration-500'>Sarthak Kakkar</h1>
        <p className='font-extralight text-base md:text-xl text-center md:text-left '>I am a software engineer with a focus on building end-to-end solutions that bridge specialized hardware systems and AI-driven workflows. My work has included developing a system certified for medical research on humans and creating an AI-powered code generation and auto-correction MVP that was presented to several companies. I have also contributed to academia as a teaching assistant for C++ and as a published author at the International Conference on Learning Representations (ICLR).</p>
        <div className='flex flex-col md:flex-row justify-center items-center md:justify-start w-full mt-2 gap-1'>
          <div className='hover:text-highlight'>
              <svg className='fill-current w-15 h-15' viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z"/></svg>
          </div>
          <div className='flex flex-col text-center md:text-left'>
            <a href="https://www.northeastern.edu/" target='_blank' className='hover:text-highlight font-bold'>Northeastern University</a>
            <h3>Bachelor of Science in Computer Science (BSCS)</h3>
            <p>Class of 2026</p>
          </div>
          
        </div>
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
