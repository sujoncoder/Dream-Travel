import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  // fetching url
  const url = `https://frozen-scrubland-07900.herokuapp.com/orders/${user.email}`;
  const [orders, setOrders] = useState([]);
  // fetching api method
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>my Orders item {orders.length}</h1>
      {/* mapping my orders  */}
      <Row xs={1} md={3} className="g-4 container mx-auto">
        {orders.map((order) => (
          <MyOrder key={order._id} order={order}></MyOrder>
        ))}
      </Row>
    </div>
  );
};

export default MyOrders;
