import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Css/listCategories.css";

const ListCategories = (props) => {
  const [categories, setCategories] = useState([]);
  console.log(props);

  return (
    <div className="listCategory">
      <Link to={`/category/${props.strCategory.toLowerCase()}`}>
        <h1>{props.strCategory} </h1>
        <img
          src={props.strCategoryThumb}
          alt={props.strCategory}
          // style={{ width: "150px" }}
        />
      </Link>
    </div>
  );
};
export default ListCategories;
