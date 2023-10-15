import React from "react";
import Links from "./Links";

function About(props) {
  // let isBio;
  // if (!props.bio || props.bio === undefined ) {
  //   return null
  // } else {
  //   isBio = <p>{props.bio}</p>
  // }
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {(!props.bio || props.bio === undefined ) ? null : <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
