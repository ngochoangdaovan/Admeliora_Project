import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";

const Search = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await axios.get("http://admeliora.tk/api/products/");
      setProduct(respone.data.data);
    };
    fetchProducts();
  }, []);

  const [filter, setFilter] = useState("");

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  let dataSearch = product.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <Helmet title="Search">
      <div className="Search">
        <div className="Search-text">
          <h1>Search</h1>
          <input
            className="Search-input"
            type="text"
            onChange={searchText.bind(this)}
            placeholder="search here..."
          />
        </div>
        <div className="Search-list">
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {dataSearch.map((item, index) => (
              <ProductCard
                key={index}
                image01={
                  "http://admeliora.tk/api/products/images/" + item.images[0]
                }
                image02={
                  "http://admeliora.tk/api/products/images/" + item.images[1]
                }
                name={item.name}
                price={Number(item.price)}
                slug={item.slug}
                color_id={item.color_id}
                product_line_id={item.product_line_id}
              />
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
};

export default Search;