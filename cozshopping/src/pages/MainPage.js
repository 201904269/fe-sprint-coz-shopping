import React, { useState, useEffect } from "react";

import MainListItems from "../components/MainListItems";
import MainBookmarkItems from "../components/MainBookmarkItems";
import axios from "axios";

const MainPage = ({ bookmarkState, setBookmarkState }) => {
  const [itemList, setItemList] = useState([]);
  const url = "http://cozshopping.codestates-seb.link/api/v1/products?count=4";

  useEffect(() => {
    axios.get(url).then(res => {
      setItemList(res.data);
    });
  }, []);

  return (
    <main>
      <h3>상품 리스트</h3>
      <MainListItems
        itemList={itemList}
        bookmarkState={bookmarkState}
        setBookmarkState={setBookmarkState}
      />
      <h3>북마크 리스트</h3>
      <MainBookmarkItems
        bookmarkState={bookmarkState}
        setBookmarkState={setBookmarkState}
      />
    </main>
  );
};

export default MainPage;