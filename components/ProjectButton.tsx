import { NextComponentType } from 'next'
import Link from 'next/link'
import IsoGreen from 'public/iso-green.svg'
import { SiPokemon } from 'react-icons/si'
import Image from 'next/image'

type Props = {
    name: string,
    link: string
}

const ProjectButton  = ({name, link} : Props) => {
    return(
        <div className='font-Quicksand font-semibold text-center text-lg lg:text-2xl lg:mt-32 lg:text-portgrey '>
            <Link href={link}>
                <button className={`border border-2 border-gray-500/100 rounded-lg hover:text-white hover:border-white bg-portcream lg:w-[300px] lg:h-[70px] flex flex-row justify-center items-center`}>
                    <h2>{name+' '}</h2>
                    
                    {name==='Pawsitive'
                    ? (<Image
                        src={IsoGreen}
                        alt="not found"
                        width={40}
                        height={40}
                        className='flex justify-center text-center'
                        />)
                    :name==='Pokemon API'
                    ? <SiPokemon
                            className='w-[100px] h-[70px]'
                        />
                    : null
                    }
                </button>
            </Link>
        </div>
    )
}

export default ProjectButton