import React from 'react'
import GlosarioItem from './GlosarioItem'
import {Title} from './StyledComponents/styles'
const items = [{color: "red", cantidad:1, categoria:"CategoriaRed" },{color: "Blue", cantidad:2, categoria:"Categoriablue" }]
function Glosario() {
  return (
    <>

    <Title>TP EFSI</Title>

<GlosarioItem cantidad={"2"} color="blue" categoria={"3"}/>
</>
  )
}

export default Glosario