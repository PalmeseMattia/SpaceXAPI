import React from "react"

export default function Image(){
    return(
        <>
        <img src={require("../images/thumbnail.png")} className="thumbnail"/>
        <h4 className="caption">This site is my first project ever written in <a target ="_blank" href="https://it.reactjs.org/">React.</a><br/>
        The scope of this project is to display data fetched from <a target="_blank" href="https://github.com/r-spacex/SpaceX-API">SpaceX API</a> using for the first time React and axios.<br/>
        Down below is a list of SpaceX dragon capsules, their ID and current status updated in real time.</h4>
        </>
    )
}