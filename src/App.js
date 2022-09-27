import { BrowserRouter } from "react-router-dom";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Search />
        <Filter />
        <Pages />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
