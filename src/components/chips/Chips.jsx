import React from 'react'
import "./chips.css"

function Chips({children}) {
  console.log(children)
  return (
    <span className='chips-container'>{children}</span>
  )
}

export {Chips};