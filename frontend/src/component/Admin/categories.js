import React, { Fragment, useEffect, useState } from "react";
import { MdOutlineCategory } from "react-icons/md";
import "./productReviews.css";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  clearErrors,
} from "../../actions/categoryAction";

import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { useAlert } from "react-alert";
import Button from "@mui/material/Button";
import MetaData from "../layout/MetaData";

import SideBar from "./Sidebar";
import {
  UPDATE_CATE_RESET,
  DELETE_CATE_RESET,
} from "../../constants/categoryConstants";

const Categories = ({ history }) => {
  const [categoryName, setCategoryName] = useState("");
  const [id, setId] = useState("");
  const alert = useAlert();

  const dispatch = useDispatch();
  const { categories, error, loading } = useSelector(
    (state) => state.categories
  );
  const createCategoryInput = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("categoryName", categoryName);
    if (id) {
      dispatch(updateCategory(id, myForm));
      alert.success("Category Updated Successfully");
      dispatch({ type: UPDATE_CATE_RESET });
      window.setTimeout(function () {
        window.location.reload();
      }, 2000);
    } else {
      alert.success("Category Created Successfully");
      dispatch(createCategory(myForm));
      window.setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  };
  const handleEditCategory = (item) => {
    setId(item._id);
    setCategoryName(item.categoryName);
    console.log(id);
  };
  const handleDeleteCategory = (item) => {
    dispatch(deleteCategory(item._id));
    alert.success("Category Deleted Successfully");
    window.setTimeout(function () {
      window.location.reload();
    }, 2000);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllCategories());
  }, [dispatch, error]);
  return (
    <Fragment>
      <MetaData title={`ALL CATEGORIES - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productReviewsContainer">
          <form className="productReviewsForm">
            <h1 className="productReviewsFormHeading">ALL CATEGORIES</h1>

            <div>
              <MdOutlineCategory />
              <input
                type="text"
                placeholder=""
                required
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              onClick={createCategoryInput}
            >
              {id ? "Update" : "Create"}
            </Button>
          </form>
          <table className="tableCategories">
            <tr>
              <td>Category name</td>
              <td>Action</td>
            </tr>
            {categories && categories.length > 0 ? (
              categories.map((item) => (
                <tr>
                  <td
                    className="category-link"
                    key={item}
                    onClick={() => handleEditCategory(item)}
                  >
                    {item.categoryName}
                  </td>
                  <td
                    className="category-link"
                    key={item}
                    onClick={() => handleDeleteCategory(item)}
                  >
                    Delete <RiDeleteBin6Line className="cateButtonDelete" />
                  </td>
                </tr>
              ))
            ) : (
              <h1 className="productReviewsFormHeading">No Categories Found</h1>
            )}
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
