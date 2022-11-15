import React from 'react'
import { Circle } from './StyledComponents/styles'
export default function GlosarioItem({cantidad, color, categoria}) {
  console.log(color)
  return (
 <Circle inputColor={color}></Circle>
  )
}
