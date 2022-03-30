import React, { useEffect, useState } from "react";
import axios from "axios";
import CapsuleCard from "./components/CapsuleCard";
import Image from "./components/Image"

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
    <div>
      <Image/>
      <h1>SPACE X CAPSULES </h1>
      <div className="card--container">
        {capsules.map(capsule => <CapsuleCard key = {capsule.id} 
                                              serial = {capsule.serial}
                                              last_update = {capsule.last_update}
                                              status = {capsule.status}
                                              />)}
      </div>
    </div>
  )
}