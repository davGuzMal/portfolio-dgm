import { NextComponentType } from 'next'
import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import photo from '../public/img/photo_cream.png'
import Image from 'next/image'
import Button from './Button'

const Background : NextComponentType = () => {
    
    return (
        <div className='lg:flex lg:justify-end lg:bg-portcream'>
            <div className="container mx-auto flex justify-center items-center min-h-[400px] lg:h-full">
                <div className="lg:max-w-[650px] text-left mx-auto lg:mx-0">
                    <h1 className="font-Quicksand text-2xl lg:text-4xl 2xl:text-6xl font-bold -tracking-[0.05em] mb-4 mt-16 text-portdarkblue">
                        I enjoy
                        {' '}
                        <span className="text-pwgreen-500 font-normal">
                            developing and building amazing websites which make
                        </span>{' '}
                        the life of people easier
                    </h1>
                    <Button
                    name = 'See my work ➜'
                    link = '/projects'
                    color = 'portcream'
                    />
                    <Button
                    name = 'Contact me'
                    link = 'mailto: dgm051195@gmail.com'
                    color = 'portcream'
                    />
                </div>
                <div>
                    <Image
                    src={photo}
                    className="h-[250px] w-[235px] rounded-full"
                    alt=""
                    >
                    </Image>           

                </div>
            </div>
            <section className="bg-softblue lg:bg-electricity lg:w-1/4 lg:bg-cover lg:bg-no-repeat h-max lg:h-screen">

            </section>
        </div>
        
    )
}

export default Background;