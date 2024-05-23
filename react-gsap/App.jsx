import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

export default function App() {
  
  // useGSAP(() => {
  //   gsap.to(".box", {
  //     x: 500,
  //     duration: 2,
  //     delay: 1
  //   })
  // })

  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 1500,
      duration: 2,
      delay: 1,
      rotate: 720
    })
  })

  return (
    <main>
      <div ref={gsapRef} className="box">

      </div>
    </main>
  )
}
