import { useEffect, useState } from "react";
import API from "./api/requests";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    API.fetchAnimes().then((todosAnimes) => setListaAnimes(todosAnimes));
  }, []);

  const [listaAnimes, setListaAnimes] = useState({data: { documents : []}});
  // console.log(listaAnimes.data.documents);

  const informacoesAnimes = listaAnimes.data.documents;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {informacoesAnimes.map((animeNome) => {
            let animeNames = animeNome.titles.en;
            return <p>{animeNames}</p>;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
