import React from 'react'

const Header = () => {
   return (
      <header className='flex items-center w-full p-4 has-[10vh]: bg-primary'>
         <div className='bg-primary w-1/6'>
            <a href="#" className='text-2xl font-bold'>petsafe</a>
         </div>
         <nav className='bg-primary flex-1 flex items-center justify-center gap-10'>
            <a href="#" className='text-secons'>
               Home
            </a>
            <a href="#" className='text-secons'>
               Services
            </a>
            <a href="#" className='text-secons'>
               Products
            </a>
         </nav>
      </header>
   );
}

export default Header