import React from "react";
import axios from "axios";
import CapsuleCard from "./components/CapsuleCard";

export default function App(){

  let [capsules, setCapsules] = React.useState([])


  axios.get('https://api.spacexdata.com/v4/capsules')
  .then(function (response) {
    setCapsules(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

  return(
    <div className="card--container">
      {capsules.map(capsule => <CapsuleCard key = {capsule.id} 
                                            serial = {capsule.serial}
                                            last_update = {capsule.last_update}/>)}
    </div>
  )
}