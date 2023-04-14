import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Productlist } from "../Data/productlist";
import { addItem } from "../Redux/reducer/cart";

export default function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const props = Productlist.find(
    (element) => element.id === parseInt(params.id)
  );
  const [alert, setAlert] = useState(false);

  const list = useSelector((state) => state.cart.list);
  const element = list.find((item) => item.id === props.id);

  const addToCart = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
    dispatch(addItem(props));
  };
  return (
    <div className="card m-2">
      {alert && <span className="alert alert-success">Item Added To Cart</span>}
      <div className="mt-2">
        <img
          src={props.thumbnail}
          height={350}
          width={400}
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      <div className="mt-2 card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="mt-2">Price:${props.price}</h6>
        <h6 className="mt-2">Discount:{props.discountPercentage}%</h6>
        <h6 className="mt-2">Rating:{props.rating}</h6>
        <div className="mt-4">
          {props.stock > 0 ? (
            <>
              <button
                className="btn btn-success"
                onClick={() => navigate(`/checkout/${props.id}`)}
              >
                Buy Now
              </button>
              {element?.count > 0 ? (
                <button
                  className="btn btn-outline-warning ms-2"
                  onClick={() => navigate("/cart")}
                >
                  Go To cart
                </button>
              ) : (
                <button className="btn btn-success ms-2" onClick={addToCart}>
                  Add To cart
                </button>
              )}
            </>
          ) : (
            <button className="btn btn-outline-danger">out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
