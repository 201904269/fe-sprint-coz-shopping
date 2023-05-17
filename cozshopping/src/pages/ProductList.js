import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
import "./ProductList.css"
import all from "./all.png";
import product from "./product.png";
import category from "./category.png";
import exhibition from "./exhibition.png";
import brand from "./brand.png";

const ProductList = ({ item, bookmarkState, setBookmarkState, isBookmarked }) => {
  const [itemListPage, setItemListPage] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const url = "http://cozshopping.codestates-seb.link/api/v1/products";

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
  useEffect(() => {
    axios.get(url).then(res => {
      setItemListPage(res.data);
    });
  }, []);

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
        {
          itemListPage.filter(item => selectedType === "All" ? true : item.type === selectedType).map(item => {
            return (
              <ItemList
                key={item.id}
                item={item}
                isBookmarked={handleIsBookmarked(item)}
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
              />
            )
          })
        }
      </ul>
    </div>
  )
};

export default ProductList;