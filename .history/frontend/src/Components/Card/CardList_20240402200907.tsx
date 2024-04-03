import React from 'react'
import Card from './Card'

interface Props {}

const CardList: React.FC<Props> = (props: Props): Jsx => {
  return (
    <div>
        <Card compagnyName={'Apple'} ticker={'AAPL'} price={100}/>
        <Card compagnyName={'Microsoft'} ticker={'MSFT'} price={300}/>
        <Card compagnyName={'TESLA'} ticker={'TSLA'} price={250}/>
    </div>
  )
}

export default CardList