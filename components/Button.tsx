import { NextComponentType } from 'next'
import Link from 'next/link'
import { MdTouchApp } from 'react-icons/md'

type Props = {
    name: string,
    link: string,
    color: string
}

const Button  = ({name, link, color} : Props) => {
    return(
        <div className='font-Quicksand text-lg lg:text-2xl lg:mt-32 lg:text-portgrey'>
            <Link href={link}>
                <button className={`align-middle rounded-lg bg-${color} lg:flex lg:flex-row `}>
                    <h2>{name}</h2>
                    {name==='Contact me'
                    ? (<MdTouchApp/>)
                    : null
                    }
                </button>
            </Link>
        </div>
    )
}

export default Button