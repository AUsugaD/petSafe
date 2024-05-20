import React from 'react';

const Hero = () => {
  return (
    <section className='h-[90vh] grid grid-cols-1 md:grid-cols-8'>
        <div className=' md:col-span-5 flex items-center justify-center'>
           <div className=''>
            <h1 className='text-primary text-7xl font-bold:'>FOOD FOR DOGS</h1>
            <h1 className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, temporibus a rem dolor mollitia accusamus animi deleniti magnam cupiditate nam id ut necessitatibus exercitationem cum optio eaque architecto? Corrupti, quisquam!</h1>
            <h1 className='text-secons text-4xl'>From$29.90</h1>
           </div>
           </div>
        <div className='md:col-span-3 flex items-center justify-center'>
            <img src="Hero.png" alt="" />
            </div>
        <div className='text-tersery flex items-center w-full p-4 h-[8vh] bg-primary'>
           REAL RECIPES. REAL INGREDIENTS. REAL GOOD. 
        </div>
        </section>

  )
}


export default Hero;