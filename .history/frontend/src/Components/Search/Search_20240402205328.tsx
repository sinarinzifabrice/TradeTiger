import React, { useState } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setsearch] = useState(""); 
  return (
    <div>
        <input value={search} onChange={(e)=> on} />
    </div>
  )
}

export default Search