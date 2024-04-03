import React from 'react'

interface Props = {
  compagnyName: string;
  ticker: string;
  price:string
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img  src="./aapl.jpg" 
            alt="image" 
      />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi quidem 
        velit molestiae, autem iure delectus voluptas suscipit, quaerat consequuntur 
        tempora sapiente hic fuga maxime laudantium. Nisi ullam cum minima.
      </p>
    </div>
  )
}

export default Card