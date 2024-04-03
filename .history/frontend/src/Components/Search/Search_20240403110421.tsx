import React, { ChangeEvent, useState } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {

    const [search, setsearch] = useState<string>(""); 

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setsearch
    }

    const onclick = (e: any) => {
        setsearch(e.target.value);
        console.log(e);
    }
    return (
        <div>
            <input value={search} onChange={(e) => onclick(e)}></input>
        </div>
    )
}

export default Search