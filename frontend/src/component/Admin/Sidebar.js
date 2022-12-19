import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";

import { MdPostAdd } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { SlPeople } from "react-icons/sl";
import { MdOutlineRateReview } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <MdSpaceDashboard /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<MdOutlineUnfoldMore />}
          defaultExpandIcon={<MdOutlineUnfoldMore />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<MdPostAdd />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem
                nodeId="3"
                label="Create"
                icon={<MdAddCircleOutline />}
              />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/categories">
        <p>
          <MdOutlineCategory />
          Categories
        </p>
      </Link>
      <Link to="/admin/orders">
        <p>
          <GoTasklist />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <SlPeople /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <MdOutlineRateReview />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
