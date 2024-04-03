
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/Card/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompagnie } from './api';

function App() {

  const [search, setsearch] = useState<string>(""); 
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setsearch(e.target.value);
      console.log(e);
  }

  const onClick = async (e: SyntheticEvent) => {
      const result = await searchCompagnie(search);

      if(typeof result === "string"){
        setServerError(result);
      }else if(Array.isArray(result.data)){
        setSearchResult(result.data);
      }
      
      
  }

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList/>
    </div>
  );
}

export default App;
