import React from 'react'
import GlosarioItem from './GlosarioItem'
import {Title} from './StyledComponents/styles'
const items = [{color: "red", cantidad:1, categoria:"Services" },{color: "Blue", cantidad:2, categoria:"Product" },{color: "Green", cantidad:3, categoria:"EFSI" }]
function Glosario() {
  return (
    <>

    <Title>TP EFSI</Title>

  {  items.map(function(i, idx) {

                    return (
                        <div className='col-3'>
                          <GlosarioItem cantidad={i.cantidad} color={i.color} categoria={i.categoria}/>                  
                        </div>
                    )
                })}
</>
  )
}

export default Glosario