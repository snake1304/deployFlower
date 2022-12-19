import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import { getAllCategories } from "../../actions/categoryAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Panigation from "react-js-pagination";
import { Slider } from "@mui/material";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  console.log("product", products);

  const { categories } = useSelector((state) => state.categories);
  console.log("cate", categories);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllCategories());
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <h3>Price</h3>
            <Slider
              trackColor="#F85F68"
              size="small"
              value={price}
              onChange={priceHandler}
              aria-label="Small"
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={1500}
            />
            <h3>Categories</h3>
            <ul className="categoryBox">
              {categories &&
                categories.map((item) => (
                  <li
                    className="category-link"
                    key={item}
                    onClick={() => setCategory(item._id)}
                  >
                    {item.categoryName}
                  </li>
                ))}
            </ul>
          </div>
          {resultPerPage < productsCount && (
            <div className="panigationBox">
              <Panigation
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
