import React from "react";

import "./MainListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ItemList = ({ item, setBookmarkState, isBookmarked }) => {
  const handleBookmark = item => {
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

  return (
    <item>
      <imgBox>
        <img
          src={item.image_url ? item.image_url : item.brand_image_url}
          alt="img"
        />
        <FontAwesomeIcon>
          className={isBookmarked ? bookcolor : bookmark}
          size="lg"
          icon={faStar}
          onClick={() => {
            handleBookmark(item);
          }}
        </FontAwesomeIcon>
      </imgBox>
      <firstLine>
        {
          <title>
            {item.title ? item.title : item.brand_name}
          </title>
        }
        {(() => {
          switch (item.type) {
            case "Brand":
              return <customer>관심고객수</customer>;
            case "Product":
              return (
                <percent>
                  {item.discountPercentage}%
                </percent>
              );
            default:
              return "";
          }
        })()}
      </firstLine>
      <firstLine>
        <span>{item.sub_title ? item.sub_title : ""}</span>
        <follower>
          {(() => {
            switch (item.type) {
              case "Product":
                return `${item.price
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원`;
              case "Brand":
                return item.follower
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
              default:
                return "";
            }
          })()}
        </follower>
      </firstLine>
    </item>
  );
};

export default ItemList;