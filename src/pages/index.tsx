// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import { useState,useRef } from 'react'
import Link from 'next/link'
import { Header } from '../components'
const Home = () => {
   const [text, setText] = useState<string>('Hello From Next')  
   const h1Ref = useRef<any>(null)
   
        const updateText =() => {
        console.log('h1Ref', h1Ref)
        setText('Updated Text')
        // h1Ref.current.innerHTML ='updatedText'
   }
  return (
    <>
     <h1 ref={h1Ref}>Hello _World !!!</h1>
     <Link href="/blog">Go to blog</Link>
     <br />
     <br />
      <button onClick={updateText}>Update Text</button>
    </>
  )
}

export default  Home