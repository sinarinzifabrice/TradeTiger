
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/Card/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompagnie } from './api';

function App() {

  const [search, setsearch] = useState<string>(""); 
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setSe]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setsearch(e.target.value);
      console.log(e);
  }

  const onClick = async (e: SyntheticEvent) => {
      const result = await searchCompagnie(search);

      if(typeof == Array)
      console.log(result);
  }

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList/>
    </div>
  );
}

export default App;
