import React, { ChangeEvent, SyntheticEvent, useState } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {

    const [search, setsearch] = useState<string>(""); 

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setsearch(e.target.value);
        console.log(e);
    }

    const onclick = (e: SyntheticEvent) => {
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