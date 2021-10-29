import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./HEader.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const name = user.displayName;
  return (
    <div className="navBar__container">
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#014c6e" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontSize: "30px" }}>
            TourPedia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              {user.email && <Link to="/add/place">add new service </Link>}
              {user.email && <Link to="/my/orders">My Orders</Link>}
              {user.email && (
                <Link to="/admin/manage/order">Manage All Orders</Link>
              )}
            </Nav>
            {!user.email && (
              <Nav>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt"></i> login
                </Link>
              </Nav>
            )}
            {user.email && (
              <Nav>
                <Link to="/">{name}</Link>
                <button onClick={logOut} className="btn btn-danger">
                  <i className="fas fa-sign-out-alt"></i>
                  {"  "} logout
                </button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
