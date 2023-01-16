import { NextComponentType } from 'next'
import Link from 'next/link'
// import { useState, useEffect } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar : NextComponentType = () => {

    const router = useRouter()
    return (
        <nav
        className="sticky top-0 w-full z-30 flex gap-3 bg-portdarkblue shadow-md text-portsoftblue py-5 px-6 md:justify-between lg:py-5 items-center transition-all">
            <div className="hidden lg:flex lg:items-center gap-1 h-full flex-shrink-0 text-lg">
                <Link href={'/'} className="flex items-center gap-1.5">                    
                        <div className="hidden font-Quicksand transition-all md:block hover:drop-shadow-md hover:text-portcream">
                            David
                            <span className="font-bold"> GUZMAN MALDONADO</span>
                        </div>
                    
                </Link>
            </div>
            <div 
            id='menu'
            className="absolute w-screen pb-8 -top-64 -left-6 text-center lg:bg-transparent h-max lg:flex lg:pb-4 lg:left-2/4 lg:-translate-x-1/4 lg:w-3/4 xl:w-3/5 lg:top-1.5 lg:justify-around font-medium transition-all"
            >
                <Link href={'/projects'} className='mr-8'>                    
                        <p className={
                                router.pathname === '/projects'
                                    ? 'navbarLink navbarLinkActive uppercase'
                                    : 'navbarLink uppercase'
                            }>
                            Projects
                        </p>
                    
                </Link>
                <div className='lg:flex lg:flex-row lg:justify-end'>

                    <Link href={'https://github.com/davGuzMal'} className='ml-8'>
                            <div className='navbarLink'>
                                <BsGithub/>
                            </div>              
                        
                    </Link>
                    <Link href={'https://www.linkedin.com/in/davidguzmal-2a3ba01b3/'} className='ml-5'>
                            <div className='navbarLink'>
                                <BsLinkedin/>
                            </div>              
                        
                    </Link>
                    <Link href={'mailto: dgm051195@gmail.com'} className='ml-5'>
                            <div className='navbarLink'>
                                {/* <CiMail/> */}
                                <p>dgm051195@gmail.com</p>
                                
                            </div>              
                        
                    </Link>
                </div>

                
            </div>

        </nav>
    )
}

export default Navbar;