import React from "react";
import ItemList from "./ItemList";

import "./List.css";

const MainListItems = ({ itemList, bookmarkState, setBookmarkState }) => {
  const handleIsBookmarked = item => {
    if (bookmarkState) {
      return bookmarkState.some(x => x.id === item.id);
    } else {
      return false;
    }
  };

  return (
    <ul class="itemLists">
      {itemList.map(item => {
        return (
          <ItemList
            key={item.id}
            item={item}
            isBookmarked={handleIsBookmarked(item)}
            bookmarkState={bookmarkState}
            setBookmarkState={setBookmarkState}
          />
        );
      })}
    </ul>
  );
};

export default MainListItems;