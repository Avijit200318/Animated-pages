import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

export default function App() {
  const [xValue, setXValue] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const boxRef = useRef();
  const randomX = gsap.utils.random(-500, 500, 100);
  const randomRotate = gsap.utils.random(-360, 360, 30);


  useGSAP(() => {
    gsap.to( boxRef.current, {
      x: xValue,
      duration: 1,
      rotate: rotateX
    })
  }, [xValue, rotateX])

  // but if we want to use scope and dependencies then we need to write the last line like this .
  // }, {scope: "main", dependencies: [xValue, rotateX]});

  return (
    <main>
      <button onClick={()=>{ setXValue(randomX)
        setRotateX(randomRotate)}} >Animate</button>
      <div ref={boxRef} className="box"></div>
    </main>
  )
}
