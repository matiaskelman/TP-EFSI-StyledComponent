import React from 'react'
import { Circle } from './StyledComponents/styles'
export default function GlosarioItem({cantidad, color, categoria}) {
  console.log(color)
  return (
    <>
    <div className='row'> <Circle color={color}></Circle>
 <p><b>{cantidad}</b> {categoria}</p>
 </div>
 </>
  )
}
