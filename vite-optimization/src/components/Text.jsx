import { useEffect } from "react"

export default function Test() {

    useEffect(() => {
      console.log('Mounting')
    }, [])
  
    useEffect(() => {
      const interval = setInterval(() =>{
        console.log('Interval')
      }, 1000)
      return () => {
        clearInterval(interval);
      }
    },[])
  
    return (<p>I am test component</p>)
  }