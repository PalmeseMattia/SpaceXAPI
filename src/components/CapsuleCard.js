import React from "react"
import { Card } from 'react-bootstrap'

export default function CapsuleCard(props){
  console.log(props.status)
  //we pass the status of the capsule
  //with this dict we associate every status with a bootstrap style
  const statuses = {
    active : "success",
    retired : "dark",
    unknown : "warning",
    destroyed : "danger"
  }

  //we render a card with capsule's infos
  const style = `card bg-${statuses[props.status]} mb-3 text-white` // this is an ES6 template literal
    return (
      <Card className={style}>
        <Card.Header>
          {props.status.toUpperCase()}
        </Card.Header>
        <Card.Body>
          <h5 className="card-title">{props.serial}</h5>
          <p className="card-text">{props.last_update}</p>
        </Card.Body>
      </Card>
    )
}