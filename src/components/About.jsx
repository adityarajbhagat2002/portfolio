import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Aditya, Nice to have you here</p>
            </div>
            <div>
              <p>I am a student currently doing my B.tech from India I am passionate 
              about building excellent software that improves
              the lives of those around me. I specialize in frontend projects
              Apart from tech I am very much intrested in Footbal and  Formula 1
              I love travelling too. Do have a look  on my projects

    
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;