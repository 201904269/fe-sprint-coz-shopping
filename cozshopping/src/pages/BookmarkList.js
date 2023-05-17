import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import "./ProductList.css"
import all from "./all.png";
import product from "./product.png";
import category from "./category.png";
import exhibition from "./exhibition.png";
import brand from "./brand.png";

const BookmarkList = ({ bookmarkState = [], setBookmarkState }) => {
  const [itemListPage, setItemListPage] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  
  const handleIsBookmarked = item => {
    if (bookmarkState) {
      return bookmarkState.some(x => x.id === item.id);
    } else {
      return false;
    }
  };
  const handleSelectCategory = type => {
    setSelectedType(type);
  };

  //useEffect를 어떻게 줄까 고민...

  
  const choose = [
    { img: all, name: "전체", type: "All" },
    { img: product, name: "상품", type: "Product" },
    { img: category, name: "카테고리", type: "Category" },
    { img: exhibition, name: "기획전", type: "Exhibition" },
    { img: brand, name: "브랜드", type: "Brand" },
  ];

  return (
    <div className="list">
      <div className="choose">
       {choose.map(category => (
         <div
           key={category.name}
           onClick={() => handleSelectCategory(category.type)}
         >
           <img src={category.img} alt={category.name} className="category" />
           <span>
             {category.name}
           </span>
         </div>
       ))}
      </div>
      <ul className="itemList">
        {bookmarkState ? (
          itemListPage.map(item => {
            return (
              <ItemList
                key={item.id}
                item={item}
                isBookmarked={handleIsBookmarked(item)}
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
              />
            );
          })
        ) : (null)}
      </ul>
    </div>
  )
};

export default BookmarkList;