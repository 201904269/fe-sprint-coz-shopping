import Header from "./pages/Header";
import './App.css';
//import Footer from "./pages/Footer";
import MainPage from "./pages/MainPage";
import ProductList from "./pages/ProductList";
import BookmarkList from "./pages/BookmarkList";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/bookmark" element={<BookmarkList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
