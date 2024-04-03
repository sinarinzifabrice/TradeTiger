import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img  src="https://unsplash.com/photos/a-white-building-with-a-door-and-some-plants-TwU3C9_4YoI" 
            alt="image" 
      />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <div className="info">
        
      </div>
    </div>
  )
}

export default Card