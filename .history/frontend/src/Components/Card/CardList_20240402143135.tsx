import React from 'react'
import Card from './Card'

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card compagnyName={'Apple'} ticker={''} price={0}/>
        <Card compagnyName={''} ticker={''} price={0}/>
        <Card compagnyName={''} ticker={''} price={0}/>
    </div>
  )
}

export default CardList