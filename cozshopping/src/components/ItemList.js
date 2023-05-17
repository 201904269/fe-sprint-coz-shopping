import React, { useState } from "react";
import Modal from "../components/Modal";
import "./MainListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ItemList = ({ item, setBookmarkState, isBookmarked }) => {
  const [modalState, setModalState] = useState(false);
  const [Bookmarked, setBookmarked] = useState(false);

  const modalOpen = () => {
    setModalState(true);
    setBookmarked(isBookmarked);
  };
  const modalClose = () => {
    if (isBookmarked) {
      const bookmark = JSON.parse(localStorage.getItem("bookmark"));
      const existingItemIndex = bookmark.findIndex(x => x.id === item.id);
      bookmark.splice(existingItemIndex, 1);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
      setBookmarkState(JSON.parse(localStorage.getItem("bookmark")));
    }
    if (!isBookmarked) {
      const bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];
      bookmark.unshift(item);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
      setBookmarkState(JSON.parse(localStorage.getItem("bookmark")));
    }
    setModalState(false);
  };
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
    <>
      {modalState && (
        <Modal
          imageUrl={item.image_url || item.brand_image_url}
          modalClose={modalClose}
          title={item.title || item.brand_name}
          setBookmarked={setBookmarked}
          Bookmarked={Bookmarked}
        />
      )}
    <div className="item">
      <imgBox>
        <img
          className="imgs"
          src={item.image_url ? item.image_url : item.brand_image_url}
          alt="img"
          onClick={modalOpen}
        />
        <FontAwesomeIcon
          className={isBookmarked ? "bookcolor" : "bookmark"}
          size="lg"
          icon={faStar}
          onClick={() => {
            handleBookmark(item);
          }}
        />
      </imgBox>
      <firstLine>
        {
          <titles>
            {item.title ? item.title : item.brand_name}
          </titles>
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
    </div>
    </>
  );
};

export default ItemList;