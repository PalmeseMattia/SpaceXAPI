import React from "react"

export default function CapsuleCard(props){
  console.log("rendered")
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.serial}</h5>
            <p className="card-text">{props.last_update}</p>
            
          </div>
        </div>
    )
}