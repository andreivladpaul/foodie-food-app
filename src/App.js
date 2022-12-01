import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Cuisine from './pages/cuisine/Cuisine';
import Category from './components/category/Category';
import Search from "./components/search/Search";
import Searched from "./pages/searched/Searched";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search />
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:input" element={<Searched />} />
          <Route path="/recipe/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
