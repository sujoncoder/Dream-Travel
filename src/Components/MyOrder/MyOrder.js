import React from "react";
import { Card, Col } from "react-bootstrap";
import "animate.css";
const MyOrder = ({ order }) => {
  // destracture
  const { _id, name, email, phone, address, tourName, status, img, desc } =
    order;
  // console.log(order);
  const deleteOrder = (id) => {
    // delete message
    const deleteWarning = window.confirm(
      "are you sure to delete this tour plan?"
    );
    if (deleteWarning) {
      // fetching url
      const url = `https://frozen-scrubland-07900.herokuapp.com/orders/${id}`;
      // fetch from API
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("your tour deleted sucessfully");
          }
        });
    }
  };
  return (
    <div>
      {/* tour place container  */}
      <Col className="place-container">
        {/* tour place  container  */}
        <Card className="card-container">
          {/* tour  place image  */}
          <Card.Img variant="top" src={img} style={{ height: "300px" }} />
          {/* tour place body  */}
          <Card.Body>
            {/* tour place title  */}
            <Card.Title>
              {tourName}{" "}
              <sup
                style={{
                  background: "#9d3aff",
                  color: "white",
                  borderRadius: "1rem",
                  fontSize: "15px",
                  padding: "5px",
                  paddingTop: "0px",
                  paddingBottom: "1px",
                }}
              >
                {status}
              </sup>
            </Card.Title>
            {/* tour description  */}
            <Card.Text className="text-start">
              <span>Description: </span> {desc?.slice(0, 200)}
              {" ......"}
            </Card.Text>
            {/* tour orderer name  */}
            <Card.Text className="text-start">Name: {name}</Card.Text>
            {/* client email  */}
            <Card.Text className="text-start">Email: {email}</Card.Text>
            {/* client phone  */}
            <Card.Text className="text-start">Phone: {phone}</Card.Text>
            {/* client address  */}
            <Card.Text className="text-start">
              Parmanent address : {address}
            </Card.Text>
          </Card.Body>
          <div className="d-flex flex-start container mb-2">
            {/* delete button  */}
            <button className="btn btn-danger" onClick={() => deleteOrder(_id)}>
              <i className="fas fa-trash-alt"></i> {"  "} Delete Order
            </button>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default MyOrder;
