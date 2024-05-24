import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

export default function App() {
  const [circle, setCircle] = useState(0);
  const random = gsap.utils.random(-500, 500, 100);
  console.log(random);
  
  // useGSAP(() => {
  //   gsap.from(".box", {
  //     rotate: 360,
  //     scale: 0,
  //     duration: 1,
  //     opacity: 0,
  //     delay: 0.5
  //   })
  // },{scope: ".container"})

  useGSAP(() => {
    gsap.to(".circle", {
      x: circle,
      duration: 0.5
    })
  }, [circle])

  return (
    <main>
      <button onClick={()=> setCircle(random)} >Animate</button>
      <div className="circle"></div>
    </main>
  )
}
