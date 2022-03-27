import React from "react";
import axios from "axios";

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
    <div>
      {capsules.map(capsule => <p key={capsule.id}>{capsule.id}</p>)}
    </div>
  )
}