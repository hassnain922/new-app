import Link from 'next/link'
import {useState, useEffect} from 'react'


const Counter = () => {
  const [counter, setCounter] =useState<number> (0) 
  
  useEffect( () => {
    console.log('Empty useEffect')

    return () => console.log('unmount')
 },[])

 useEffect(() =>{
    console.log('updated counter value ',counter);
 },[counter])

  const increCount = () =>{
    setCounter(counter+1)
     
  }
  const decreCount = () => {
    setCounter(!counter ? 0: counter -1) 
 }
    
    return (
        <>
        <h1>Counter {counter} </h1>
        <button onClick={increCount}>Increase</button>
        <br />
        <br />
        <button onClick={decreCount} >Decrease</button>
        <br />
        <Link href={"/blog"}>Gto Blog page</Link>
        </>
    )
}

export default Counter