import React from 'react'
import Card from './Card'

interface Props  {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default CardList