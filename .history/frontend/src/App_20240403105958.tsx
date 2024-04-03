
import './App.css';
import CardList from './Components/Card/CardList';
import Search from './Components/Search/Search';

function App() {

  const Search: React.FC<Props> = (props: Props): JSX.Element => {

    const [search, setsearch] = useState<string>(""); 

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

  return (
    <div className="App">
      <Search/>
      <CardList/>
    </div>
  );
}

export default App;
