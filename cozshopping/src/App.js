import Header from "./components/Header";
import './App.css';
//import Footer from "./pages/Footer";
import MainPage from "./pages/MainPage";
import ProductList from "./pages/ProductList";
import BookmarkList from "./pages/BookmarkList";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {
  const bookmarkRender = JSON.parse(localStorage.getItem("bookmark"));
  const [bookmarkState, setBookmarkState] = useState(bookmarkRender);
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage 
                                    bookmarkState={bookmarkState}
                                    setBookmarkState={setBookmarkState}
                                  />} />
          <Route path="/product" element={<ProductList
                                            bookmarkState={bookmarkState}
                                            setBookmarkState={setBookmarkState}
                                           />} />
          <Route path="/bookmark" element={<BookmarkList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
