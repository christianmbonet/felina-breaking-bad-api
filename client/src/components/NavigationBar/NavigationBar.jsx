import React from 'react';
import { Nav } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="navbarDiv" id="myHeader">
      <a href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0qLdwj8eQKfmKNAQCtwNdtFM1ZNpUUVYFrw&usqp=CAU"
          alt="logo"
        />
      </a>
      <Nav className="navbar" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="home" href="/">
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" className="About-Us" href="/About-Us">
            Meet the Team
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="link-3" className="gamestart" href="/game-start">
            Test Your Knowledge
          </Nav.Link>
        </Nav.Item>

        <Nav.Item></Nav.Item>
      </Nav>
    </div>
  );
}

export default NavigationBar;
