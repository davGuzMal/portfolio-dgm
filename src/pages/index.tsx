import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'components/Navbar'
import Background from 'components/Background'


const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
    </div>
  )
}
export default Home
