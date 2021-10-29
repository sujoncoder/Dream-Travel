import React from "react";
import { Card, Col } from "react-bootstrap";
import "animate.css";
const MyOrder = ({ order }) => {
  const { _id, name, email, phone, address, tourName, status, img, desc } =
    order;
  // console.log(order);
  const deleteOrder = (id) => {
    const deleteWarning = window.confirm(
      "are you sure to delete this tour plan?"
    );
    if (deleteWarning) {
      const url = `https://frozen-scrubland-07900.herokuapp.com/orders/${id}`;
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
      <Col className="place-container">
        <Card className="card-container">
          <Card.Img variant="top" src={img} style={{ height: "300px" }} />
          <Card.Body>
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
            <Card.Text className="text-start">
              <span>Description: </span> {desc?.slice(0, 200)}
              {" ......"}
            </Card.Text>
            <Card.Text className="text-start">Name: {name}</Card.Text>
            <Card.Text className="text-start">Email: {email}</Card.Text>
            <Card.Text className="text-start">Phone: {phone}</Card.Text>
            <Card.Text className="text-start">
              Parmanent address : {address}
            </Card.Text>
          </Card.Body>
          <div className="d-flex flex-start container mb-2">
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
