import React from "react";
import { Card, Col } from "react-bootstrap";
import "animate.css";
const ManageOrder = ({ order }) => {
  const { _id, tourName, name, email, phone, address, status, img } = order;

  const deleteOrder = (id) => {
    const deleteWarning = window.confirm("are yout sure to delete this one ? ");
    if (deleteWarning) {
      const url = `https://frozen-scrubland-07900.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("hey this order deleted");
          }
        });
    }
  };
  const handleUpdate = (id) => {
    const updateOrder = { ...order };
    console.log(updateOrder);
    updateOrder.status = "approved";
    const url = `https://frozen-scrubland-07900.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated");
          window.location.reload();
        }
      });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Col className="place-container animate__animated animate__bounce">
        <Card className="card-container">
          <Card.Img variant="top" style={{ height: "300px" }} src={img} />
          <Card.Body>
            <Card.Title>{tourName}</Card.Title>

            <Card.Text className="text-start">
              <h4>Name: {name}</h4>
              <p>email: {email}</p>
              <p>phone: {phone}</p>
              <p>Address: {address}</p>

              <div>
                Status:
                <span
                  style={{
                    background: "#9d3aff",
                    color: "white",
                    borderRadius: "1rem",
                    fontSize: "15px",
                    padding: "5px",
                    margin: "10px",
                  }}
                >
                  {status}
                </span>
              </div>
            </Card.Text>
          </Card.Body>
          <div className="d-flex flex-start container mb-2">
            {/* buttion and some adding section  */}
            <button
              className="btn btn-danger m-1"
              onClick={() => deleteOrder(_id)}
            >
              <i className="fas fa-trash-alt"></i> {"  "} delete
            </button>
            {status === "approved" ? (
              ""
            ) : (
              <button
                onClick={() => handleUpdate(_id)}
                className="btn btn-success m-1 text-white"
              >
                <i className="fas fa-clipboard-check"></i>
                {"  "} Approve
              </button>
            )}
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default ManageOrder;
