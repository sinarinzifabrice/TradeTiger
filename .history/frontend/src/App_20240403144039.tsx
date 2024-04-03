
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/Card/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {

  const [search, setSearch] = useState<string>(""); 
  const [searchResult, setSearchResult] = useState<CompanySearch[]>();
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    console
    console.log("search", search);
    console.log("coucou");
    const result = await searchCompanies(search);
    //setServerError(result.data);
    if (typeof result === "string") {
      console.log("error api call");
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      console.log("succes api call");
      console.log(result.data);
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList/>
    </div>
  );
}

export default App;
