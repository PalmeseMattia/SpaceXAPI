import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import CapsuleCard from "./components/CapsuleCard";
import Img from "./components/Img"
import { Container, Nav, Button } from "react-bootstrap";

export default function App(){

  let [capsules, setCapsules] = useState([]);

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v4/capsules')
      .then(response =>  setCapsules(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
    });
  }, []);



  return(
    <Container>
      <Nav>
        <h1 className="text-start">🚀 SPACE X CAPSULES</h1>
      </Nav>
      <Img/>
      <p className="fs-3 text-center">This website made in <a href="https://it.reactjs.org/">React</a> and Axios </p>
      <h2 className="ms-auto">CAPSULES STATE :</h2>
      <div className="card--container">
        {capsules.map(capsule => <CapsuleCard key = {capsule.id} 
                                              serial = {capsule.serial}
                                              last_update = {capsule.last_update}
                                              status = {capsule.status}
                                              />)}
      </div>
    </Container>
  )
}
