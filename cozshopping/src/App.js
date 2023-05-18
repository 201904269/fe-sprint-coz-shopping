import Header from "./components/Header";
import './App.css';
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import ProductList from "./pages/ProductList";
import BookmarkList from "./pages/BookmarkList";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <Route path="/product/list" element={<ProductList
                                            bookmarkState={bookmarkState}
                                            setBookmarkState={setBookmarkState}
                                           />} />
          <Route path="/bookmark" element={<BookmarkList 
                                            bookmarkState={bookmarkState}
                                            setBookmarkState={setBookmarkState}
                                            />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
