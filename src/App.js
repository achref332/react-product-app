import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const userName = "Islem"; // Remplace par ton prénom ou laisse vide

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem', textAlign: 'center', margin: '0 auto' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3>Hello {userName ? userName : "!"}</h3>
        {userName && <img src="https://via.placeholder.com/100" alt="user" />}
      </div>
    </Container>
  );
}

export default App;
