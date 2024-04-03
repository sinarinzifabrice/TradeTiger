import React, { useState } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {

    const [search, setsearch] = useState<string>(""); 

    const onclick = (e: any) => {
        setsearch(e.)
    }
    return (
        <div>
            <input value={search} onChange={(e) => onclick(e)}></input>
        </div>
    )
}

export default Search