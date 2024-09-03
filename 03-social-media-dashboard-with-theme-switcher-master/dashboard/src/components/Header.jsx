import { useState, useEffect } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className='bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6 dark:bg-Very-Dark-Blue mb-[950px] sm:mb-[450px] md:mb-[400px] lg:mb-[160px]'>
      <div className='mx-auto max-w-[1100px] md:flex md:justify-between md:items-center'>
        <div>
          <h1 className='text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1'>
            Social Media Dashboard
          </h1>
          <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6'>
            Total Followers: 23,004
          </p>
        </div>
        <hr className='bg-Dark-Grayish-Blue dark:bg-red-500   mb-[19px] md:hidden' />
        <div className='flex justify-between gap-4'>
          <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold'>
            Dark Mode
          </p>
          <label
            htmlFor='darkMode'
            className='rotate-180 border border-Toggle bg-Toggle dark:border-Dark-Desaturated-Blue w-12 h-6 rounded-full cursor-pointer p-[2px] relative overflow-hidden'
          >
            <input
              id='darkMode'
              type='checkbox'
              className='peer sr-only'
              onClick={() => setDarkMode(!darkMode)}
            />
            <div className=' w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0 '></div>
            <div className='w-[18px] h-[18px] bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue rounded-full peer-checked:translate-x-[24px] transition-all'></div>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header
