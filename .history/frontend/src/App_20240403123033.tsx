
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/Card/CardList';
import Search from './Components/Search/Search';

function App() {

  const [search, setsearch] = useState<string>(""); 
  const [ searchResult, setSeearchResult] = us

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setsearch(e.target.value);
      console.log(e);
  }

  const onClick = (e: SyntheticEvent) => {
      console.log(e);
  }

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList/>
    </div>
  );
}

export default App;
