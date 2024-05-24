import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

export default function App() {
//  if we did not use useGsap then also the animation work but it stick to the memory so if we build a bigger website it takes extra space.

const { contextSafe } = useGSAP();
const boxRef = useRef();

  const rotateBox = contextSafe(()=> {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1
    })
  })

  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">Box</div>
    </main>
  )
}
