import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'components/Navbar'
import Background from 'components/Background'
import Button from 'components/Button'
import ProjectButton from 'components/ProjectButton'


const Projects: NextPage = () => {
  return (
    <div>

      <Navbar/>
      <div className='flex justify-center lg:flex lg:bg-portcream lg:h-screen'>
        <div>
          <ProjectButton
            name = 'Pawsitive'
            link = 'https://pawsitive-app.vercel.app/'
          />
          <ProjectButton
            name = 'Resonance'
            link = 'https://resonance-one.vercel.app/'
          />
          {/* <ProjectButton
            name = 'Pokemon API'
            link = 'https://pawsitive-app.vercel.app/'            
          /> */}
        </div>
      </div>
      
    </div>

  )
}
export default Projects