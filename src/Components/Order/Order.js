import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import "./Order.css";
import "animate.css";
const Order = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { user } = useAuth();
  const [place, setPlace] = useState([]);
  // fetching url
  const url = `https://frozen-scrubland-07900.herokuapp.com/places/${id}`;
  //  fetching methid
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, []);

  const onSubmit = (data) => {
    // push some data
    data.tourName = place.name;
    data.status = "pending";
    data.img = place.img;
    data.desc = place.desc;
    // fetch from api
    fetch("https://frozen-scrubland-07900.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // user interestion

        if (data.insertedId) {
          alert("we are collected your tour plan, please wait for approval");
          // reset form
          reset();
          // redirect user
          history.push("/my/orders");
        }
      });
  };
  return (
    <div className="container order-container animate__bounce">
      <div>
        <div className="row information-and__order_container">
          {/* order information container  */}
          <div className="col-md-6 order-info-container">
            {/* information main container  */}
            <div className="info-main-container">
              <div>
                {/* information image  */}
                <img src={place.img} className="img-fluid w-75" alt="" />
                {/* infromation name  */}
                <h4>{place.name}</h4>
                {/* information descriprion  */}
                <p>
                  {place.desc?.slice(0, 400)}
                  {" ..............."}
                </p>
                {/* information price  */}
                {place.price && <h4>Price: ${place.price}</h4>}
              </div>
            </div>
          </div>
          <div className="col-md-6 place-order-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* order name  */}
              <h1>Order {place.name}</h1>
              {/* collect tour name from place order  input */}
              <input
                {...register("tourName")}
                required
                placeholder="tour name"
                defaultValue={place.name || ""}
                readOnly
              />
              {/* collect namefrom place order  input */}
              <input
                {...register("name")}
                required
                placeholder="your name"
                defaultValue={user.displayName}
                readOnly
              />
              {/* collect email from place order  input */}
              <input
                {...register("email")}
                required
                placeholder="your email"
                defaultValue={user.email}
              />
              {/* collect phonr from place order  input */}
              <input
                {...register("phone")}
                required
                placeholder="your phone number"
              />
              {/* collect address from place order  input */}
              <input
                {...register("address")}
                required
                placeholder="your parmanent address"
              />
              {/* submit order  */}
              <input type="submit" value="place order" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
