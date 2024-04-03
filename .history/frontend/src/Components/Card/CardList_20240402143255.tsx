import React from 'react'
import Card from './Card'

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card compagnyName={'Apple'} ticker={'AAPL'} price={100}/>
        <Card compagnyName={'Microsoft'} ticker={'MSFT'} price={30}/>
        <Card compagnyName={'TESLA'} ticker={'TSLA'} price={0}/>
    </div>
  )
}

export default CardList