import React, { useState } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {

    const [search, setsearch] = useState<string>(""); 

  <r></r>eturn (
    <div>
        <input value={search} onChange={(e) => onclick(e)}></input>
    </div>
  )
}

export default Search