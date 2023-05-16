import ItemList from "./ItemList";

import "./List.css";

const MainBookmarkItems = ({ bookmarkState, setBookmarkState }) => {
  const handleIsBookmarked = item => {
    if (bookmarkState) {
      return bookmarkState.some(x => x.id === item.id);
    } else {
      return false;
    }
  };

  return (
    <ul className="itemLists">
      {bookmarkState.slice(0, 4).map(item => {
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

export default MainBookmarkItems;