import React, { useState } from "react";
import Modal from "./Modal";
import "./MainListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ item, setBookmarkState, isBookmarked }) => {
  const [modalState, setModalState] = useState(false);
  const [Bookmarked, setBookmarked] = useState(false);
  
  const modalOpen = () => {
    setModalState(true);
    setBookmarked(isBookmarked);
  };
  const handleBookmarkClick = () => {
    handleBookmark(item);
  };
  const handleBookmark = item => {
    const bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];

    const existingItemIndex = bookmark.findIndex(x => x.id === item.id);
    const isExistingItem = existingItemIndex !== -1;

    if (isExistingItem) {
      bookmark.splice(existingItemIndex, 1);
      toast.error("⭐북마크에서 제거되었습니다.");
    } else {
      bookmark.unshift(item);
      toast.success("⭐북마크에 추가되었습니다.");
    }

    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    setBookmarkState(JSON.parse(JSON.stringify(bookmark)));
  };
  const handleModalBookmark = () => {
    handleBookmark(item); // 수정: 북마크 핸들러에 상품 정보를 전달
  };
  const modalClose = () => {
    if (isBookmarked !== isBookmarked) {
    if (isBookmarked) {
      const bookmark = JSON.parse(localStorage.getItem("bookmark"));
      const existingItemIndex = bookmark.findIndex(x => x.id === item.id);
      bookmark.splice(existingItemIndex, 0);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
      setBookmarkState(JSON.parse(localStorage.getItem("bookmark")));
    }
    if (!isBookmarked) {
      const bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];
      bookmark.unshift(item);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
      setBookmarkState(JSON.parse(localStorage.getItem("bookmark")));
    }
  }
    setModalState(false);
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
          handleBookmark={handleModalBookmark} // 북마크 핸들러 전달
          isBookmarked={isBookmarked} // 북마크 상태 전달
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
          onClick={handleBookmarkClick}
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