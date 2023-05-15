import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./MainListItems.css";

const MainBookmarkItems = ({ itemList, bookmarkState, setBookmarkState }) => {
  const handleBookmark = (e, item) => {
    const bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];

    const existingItemIndex = bookmark.findIndex(x => x.id === item.id);
    const isExistingItem = existingItemIndex !== -1;

    if (isExistingItem) {
      bookmark.splice(existingItemIndex, 1);
    } else {
      bookmark.unshift(item);
    }

    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    setBookmarkState(JSON.parse(localStorage.getItem("bookmark")));
  };

  const handleIsBookmarked = item => {
    if (bookmarkState) {
      return bookmarkState.some(x => x.id === item.id);
    } else {
      return false;
    }
  };

  return (
    <itemList>
      {itemList.map(item => (
        <item key={item.id}>
          <imgBox>
            <img src={item.type === "Brand" ? item.brand_image_url : item.image_url} alt={item.title || item.brand_name} />
          </imgBox>
          {item.type === "Product" && (
            <firstLine>
              <titles>{item.title}</titles>
              <percent>{item.discountPercentage}%</percent>
            </firstLine>
          )}
          {item.type === "Category" && <titles>{item.title}</titles>}
          {item.type === "Exhibition" && (
            <>
              <titles>{item.title}</titles>
              <span>{item.sub_title}</span>
            </>
          )}
          {item.type === "Brand" && (
            <firstLine>
              <titles>{item.brand_name}</titles>
              <customer>관심고객수</customer>
            </firstLine>
          )}
          {item.type === "Product" && (
            <follower>
              {item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원
            </follower>
          )}
          {item.type === "Brand" && (
            <follower>
              {item.follower.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </follower>
          )}
          {handleIsBookmarked(item) && (
            <div className="bookmarkIcon">
              <FontAwesomeIcon icon={faStar} />
            </div>
          )}
        </item>
      ))}
    </itemList>
  );
};

export default MainBookmarkItems;