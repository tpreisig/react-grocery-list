import Content from "./components/Content";
import Header from "./components/Header";
import Search from "./components/Search";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      <Header />
      <Add />
      <Search />
      <Content />
    </div>
  );
}

export default App;
