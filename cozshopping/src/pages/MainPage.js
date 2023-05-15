import React, { useState, useEffect } from "react";

import MainListItems from "../components/MainListItems";
import MainBookmarkItems from "../components/MainBookmarkItems";
import axios from "axios";

const MainPage = () => {
  const [bookmarkState, setBookmarkState] = useState([]);
  const [itemList, setItemList] = useState([]);
  //const bookmarkData = JSON.parse(localStorage.getItem("bookmark"));

  const url = "http://cozshopping.codestates-seb.link/api/v1/products?count=4";

  useEffect(() => {
    axios.get(url).then(res => {
      setItemList(res.data);
    });
  }, []);

  return (
    <main>
      <h2>상품 리스트</h2>
      <MainListItems
        itemList={itemList}
        bookmarkState={bookmarkState}
        setBookmarkState={setBookmarkState}
      />
      <h2>북마크 리스트</h2>
      <MainBookmarkItems
        bookmarkState={bookmarkState}
        setBookmarkState={setBookmarkState}
      />
    </main>
  );
};

export default MainPage;