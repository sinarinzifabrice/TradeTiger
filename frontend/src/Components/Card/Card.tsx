import React from 'react'

interface Props {
  compagnyName: string;
  ticker: string;
  price: number;
}

/**
 * This component displays information about a company.
 * @param compagnyName The name of the company.
 * @param ticker The stock ticker symbol of the company.
 * @param price The current stock price of the company.
 * @returns JSX.Element representing the card component.
 */
const Card: React.FC<Props> = ({compagnyName, ticker, price}: Props): JSX.Element => {
  return (
    <div className="card">
      <img  src="./aapl.jpg" 
            alt="image" 
      />
      <div className="details">
        <h2>{compagnyName} ({ticker})</h2>
        <p>${price}</p>
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